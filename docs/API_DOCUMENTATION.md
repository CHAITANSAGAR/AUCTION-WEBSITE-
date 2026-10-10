# REST & WebSocket API Documentation

Base URL: `http://localhost:8080/api/v1`
WebSocket Endpoint: `ws://localhost:8080/ws/auction`

---

## 1. Authentication Endpoints

### Register User
- **POST** `/auth/register`
- **Request Body**:
```json
{
  "username": "collector_99",
  "email": "collector@example.com",
  "password": "Password123!",
  "fullName": "Alexander Vance",
  "role": "BUYER"
}
```
- **Response** `200 OK`: Returns JWT `accessToken`, `refreshToken`, and user profile.

### Login User
- **POST** `/auth/login`
- **Request Body**:
```json
{
  "usernameOrEmail": "collector_99",
  "password": "Password123!"
}
```

---

## 2. Auction Endpoints

### Get Active Auctions
- **GET** `/auctions/public/active`
- **Response**: Array of active auctions with item specifications, current bid, and countdown metadata.

### Get Auction Details
- **GET** `/auctions/public/{id}`

### Create Auction
- **POST** `/auctions/create`
- **Headers**: `Authorization: Bearer <TOKEN>`
- **Request Body**:
```json
{
  "title": "Rolex Submariner Date 126610LN",
  "description": "Mint condition with papers and box",
  "category": "Watches & Jewelry",
  "itemCondition": "LIKE_NEW",
  "startingPrice": 11500.00,
  "reservePrice": 13500.00,
  "minIncrement": 250.00,
  "endTime": "2026-10-15T18:00:00"
}
```

---

## 3. Real-Time Bidding Endpoints

### Place Bid
- **POST** `/bids/place`
- **Request Body**:
```json
{
  "auctionId": 1,
  "amount": 175000.00,
  "isAutoBid": false
}
```

### STOMP WebSocket Channel
- Subscribe: `/topic/auction/{auctionId}`
- Send Bid: `/app/auction/{auctionId}/bid`
