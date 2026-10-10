# System Architecture: Enterprise Real-Time Auction Platform

## 1. High-Level Architecture Overview

The **Auction Platform** is engineered as a distributed, high-throughput bidding system designed to handle concurrent bids, prevent last-second sniping with algorithmic time-dilation, and settle transactions via escrow.

```mermaid
graph TD
    Client[React Client SPA / Mobile Web] -->|HTTP / REST (JWT)| Nginx[Nginx Reverse Proxy & SSL Terminator]
    Client -->|WebSocket / STOMP| Nginx
    Nginx -->|Port 8080| SpringApp[Spring Boot 3.3.x Application Server]

    subgraph Spring Boot Architecture
        Security[Spring Security & JWT Filter] --> Controllers[REST Controllers]
        WebSocketHandler[STOMP WebSocket Controller] --> EventPublisher[WebSocket Event Publisher]
        Controllers --> Services[Domain Services Layer]
        Services --> BiddingEngine[Anti-Sniping Bidding Engine]
        Services --> StripeService[Stripe Escrow Gateway]
        Services --> Schedulers[Auction Expiry & Finalization Scheduler]
        Services --> Repositories[Spring Data JPA Repositories]
    end

    Repositories --> MySQL[(MySQL 8.0 Primary DB)]
    EventPublisher -->|Topic Broadcast| Client
```

## 2. Core Architectural Pillars

### Anti-Sniping Protection Engine
- When a bid is placed within the final **2 minutes** (`ANTI_SNIPING_WINDOW_MINUTES`), the auction clock is automatically extended by **3 minutes** (`ANTI_SNIPING_EXTENSION_MINUTES`).
- This eliminates automated sniper bots from manipulating network latency and ensures fair market price discovery.

### Real-Time WebSocket Infrastructure
- Built on Spring WebSocket with **STOMP message broker**.
- Topic `/topic/auction/{auctionId}` broadcasts instantaneous bid ladder updates, new leading bidders, and dynamic countdown adjustments.
- Topic `/queue/notifications` sends direct outbid alerts and winning confirmations to individual user sessions.

### Escrow & Payment Flow
1. Auction closes -> Winner identified.
2. System transitions state to `ENDED` and generates pending payment record.
3. Buyer initiates checkout -> Stripe PaymentIntent created with authorized capture hold.
4. Goods dispatched & delivered -> Escrow released to seller.
