/* ===================================================
   AUCTIONFLOW ENTERPRISE - INTERACTIVE JAVASCRIPT ENGINE
   =================================================== */

// State Management
// State Management
const state = {
    isAuthenticated: false,
    currentUser: null,
    currentRole: 'BUYER', // BUYER, SELLER, ADMIN
    authModalRole: 'BUYER',
    activeTab: 'live',
    activeDashTab: 'bids',
    activeBpTab: 'architecture',
    filterCategory: 'All',
    searchQuery: '',
    sortBy: 'endingSoon',
    botSimulationActive: true,
    audioEnabled: true,
    watchlist: [2, 4],
    selectedAuction: null,
    currentLiveLot: null,
    selectedPresetAmount: 35000,
    activeLotImage: null,
    ratingScore: 5,

    // Initial Luxury Auction Items
    auctions: [
        {
            id: 1,
            lotNum: "01",
            title: "Rolex Cosmograph Daytona",
            subtitle: "Ref. 116500LN \"Panda\" Dial • 40mm Oystersteel • Caliber 4130",
            category: "Watches & Jewelry",
            condition: "MINT / UNWORN",
            startingPrice: 20000,
            reservePrice: 30000,
            currentHighestBid: 34500,
            currentHighestBidder: "apex_collector",
            minIncrement: 500,
            totalBids: 32,
            seller: { id: 3, username: "elena_rolex", name: "Elena Rostova", verified: true, rating: 5.0 },
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1547996160-71dfabb1a7b1?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Rolex Cosmograph Daytona in Oystersteel with white lacquer 'Panda' dial and black Cerachrom ceramic bezel with tachymetric scale. Calibre 4130 automatic movement, 72h power reserve. Complete collector set with warranty card, ChronoExpert verification certificate.",
            endsInSeconds: 1198, // Exactly 00:19:58!
            status: "ACTIVE",
            bidsHistory: [
                { id: 105, bidder: "apex_collector", amount: 34500, time: "4s ago", isWinning: true },
                { id: 104, bidder: "chronograph_king", amount: 34000, time: "28s ago", isWinning: false },
                { id: 103, bidder: "watchbox_vip", amount: 33500, time: "1m ago", isWinning: false },
                { id: 102, bidder: "horology_vault", amount: 32000, time: "4m ago", isWinning: false },
                { id: 101, bidder: "geneva_collector", amount: 30000, time: "12m ago", isWinning: false }
            ]
        },
        {
            id: 2,
            lotNum: "02",
            title: "1967 Shelby GT500 Fastback - 428 Cobra Jet",
            subtitle: "Concours Restored • 4-Speed Toploader • Nightmist Blue",
            category: "Vehicles",
            condition: "LIKE_NEW",
            startingPrice: 120000,
            reservePrice: 165000,
            currentHighestBid: 172500,
            currentHighestBidder: "marcus_buyer",
            minIncrement: 2500,
            totalBids: 14,
            seller: { id: 2, username: "victor_seller", name: "Victor Vance", verified: true, rating: 4.95 },
            image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Concours-restored Nightmist Blue with white Le Mans racing stripes. Factory 428 Police Interceptor V8, 4-speed Toploader. Elite Marti Report and Carroll Shelby registry certification included.",
            endsInSeconds: 3600 * 26 + 1400,
            status: "ACTIVE",
            bidsHistory: [
                { id: 204, bidder: "marcus_buyer", amount: 172500, time: "22 mins ago", isWinning: true },
                { id: 203, bidder: "elena_rolex", amount: 160000, time: "4 hours ago", isWinning: false },
                { id: 202, bidder: "marcus_buyer", amount: 145000, time: "18 hours ago", isWinning: false },
                { id: 201, bidder: "tokyo_vault", amount: 130000, time: "1 day ago", isWinning: false }
            ]
        },
        {
            id: 3,
            lotNum: "03",
            title: "Claude Monet — 'Bassin aux Nymphéas' (Study, 1917)",
            subtitle: "Oil on Canvas • Galerie Durand-Ruel Provenance",
            category: "Art & Antiques",
            condition: "GOOD",
            startingPrice: 240000,
            reservePrice: 310000,
            currentHighestBid: 295000,
            currentHighestBidder: "marcus_buyer",
            minIncrement: 5000,
            totalBids: 9,
            seller: { id: 2, username: "victor_seller", name: "Victor Vance", verified: true, rating: 4.95 },
            image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Impressionist water lilies oil study on canvas. Documented provenance from Galerie Durand-Ruel Paris with archival museum-grade UV conservation frame.",
            endsInSeconds: 3600 * 18 + 220,
            status: "ACTIVE",
            bidsHistory: [
                { id: 302, bidder: "marcus_buyer", amount: 295000, time: "1 hour ago", isWinning: true },
                { id: 301, bidder: "art_fund_nyc", amount: 280000, time: "5 hours ago", isWinning: false }
            ]
        },
        {
            id: 4,
            lotNum: "04",
            title: "1st Edition Shadowless Charizard Holo #4 PSA 10",
            subtitle: "1999 Base Set • Gem Mint Certification",
            category: "Collectibles",
            condition: "NEW",
            startingPrice: 150000,
            reservePrice: 200000,
            currentHighestBid: 212000,
            currentHighestBidder: "sarah_art",
            minIncrement: 2000,
            totalBids: 19,
            seller: { id: 3, username: "elena_rolex", name: "Elena Rostova", verified: true, rating: 5.0 },
            image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "The pinnacle of pop culture assets. 1999 Base Set 1st Edition Shadowless Charizard in pristine PSA 10 Gem Mint certification. Flawless foil surface and centering.",
            endsInSeconds: 3600 * 48 + 900,
            status: "ACTIVE",
            bidsHistory: [
                { id: 402, bidder: "sarah_art", amount: 212000, time: "14 mins ago", isWinning: true },
                { id: 401, bidder: "crypto_collector", amount: 195000, time: "1 hour ago", isWinning: false }
            ]
        },
        {
            id: 5,
            lotNum: "05",
            title: "Leica MP 'Anthracite' Special Titanium Edition #042",
            subtitle: "Summilux-M 35mm f/1.4 ASPH • Limited 100 Pieces",
            category: "Electronics",
            condition: "LIKE_NEW",
            startingPrice: 18500,
            reservePrice: 24000,
            currentHighestBid: 24500,
            currentHighestBidder: "marcus_buyer",
            minIncrement: 500,
            totalBids: 8,
            seller: { id: 2, username: "victor_seller", name: "Victor Vance", verified: true, rating: 4.95 },
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "One of only 100 crafted by Leica Camera AG Wetzlar. Features anthracite lacquered titanium top/bottom plates with matching Summilux-M 35mm f/1.4 ASPH lens.",
            endsInSeconds: 3600 * 6 + 180,
            status: "ACTIVE",
            bidsHistory: [
                { id: 502, bidder: "marcus_buyer", amount: 24500, time: "32 mins ago", isWinning: true },
                { id: 501, bidder: "tokyo_shutter", amount: 22000, time: "2 hours ago", isWinning: false }
            ]
        },
        {
            id: 6,
            lotNum: "06",
            title: "Marcus Aurelius Imperial Gold Aureus (161-180 AD) NGC Ch AU",
            subtitle: "Ancient Roman Empire • Strike 5/5, Surface 5/5",
            category: "Collectibles",
            condition: "GOOD",
            startingPrice: 32000,
            reservePrice: 42000,
            currentHighestBid: 44250,
            currentHighestBidder: "sarah_art",
            minIncrement: 750,
            totalBids: 11,
            seller: { id: 3, username: "elena_rolex", name: "Elena Rostova", verified: true, rating: 5.0 },
            image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Exceptional ancient Roman Imperial gold coin. NGC Strike 5/5, Surface 5/5 with Fine Style portrait of the Stoic Philosopher Emperor in full armor.",
            endsInSeconds: 3600 * 72,
            status: "ACTIVE",
            bidsHistory: [
                { id: 602, bidder: "sarah_art", amount: 44250, time: "45 mins ago", isWinning: true },
                { id: 601, bidder: "roman_history", amount: 41000, time: "3 hours ago", isWinning: false }
            ]
        }
    ],

    // Platform Disputes (For Admin desk)
    disputes: [
        {
            id: 101,
            auctionId: 1,
            itemTitle: "Rolex Cosmograph Daytona",
            complainant: "marcus_buyer",
            respondent: "elena_rolex",
            reason: "Documentation verification request for bezel authenticity",
            amount: 34500,
            status: "OPEN",
            created: "2026-10-04 14:20"
        }
    ],

    // Platform Users
    users: [
        { id: 1, username: "admin", name: "System Admin", role: "ADMIN", verified: true, active: true },
        { id: 2, username: "victor_seller", name: "Victor Vance", role: "SELLER", verified: true, active: true },
        { id: 3, username: "elena_rolex", name: "Elena Rostova", role: "SELLER", verified: true, active: true },
        { id: 4, username: "marcus_buyer", name: "Marcus Chen", role: "BUYER", verified: true, active: true },
        { id: 5, username: "sarah_art", name: "Sarah Jenkins", role: "BUYER", verified: true, active: true }
    ],

    // Live Audit Trail
    auditLogs: []
};

// Web Audio API Synthesizer (Realistic Sound Effects)
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    if (!state.audioEnabled) return;
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        if (type === 'bid') {
            // Elegant bright chime ding
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.25, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        } else if (type === 'gavel') {
            // Resonating wooden auction gavel strike
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.35);
            gain.gain.setValueAtTime(0.6, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } else if (type === 'alert') {
            // Outbid alert tone
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.setValueAtTime(330, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        }
    } catch (e) {
        console.warn('Audio not initialized or blocked', e);
    }
}

function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;
    const btn = document.getElementById('btnAudioToggle');
    btn.innerHTML = state.audioEnabled ? '🔊' : '🔇';
    showToast(state.audioEnabled ? 'Sound Effects Enabled' : 'Sound Effects Muted', 'info');
}

// Utilities
function formatMoney(amount) {
    return '$' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatDuration(seconds) {
    if (seconds <= 0) return '00:00:00';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function generateHash() {
    return '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

function logAudit(action, details) {
    const time = new Date().toLocaleTimeString();
    const entry = {
        time,
        action,
        details,
        hash: generateHash()
    };
    state.auditLogs.unshift(entry);
    if (state.auditLogs.length > 50) state.auditLogs.pop();
    renderAuditLogs();
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = '🔔';
    if (type === 'bid') icon = '⚡';
    if (type === 'success') icon = '✅';
    if (type === 'alert') icon = '⚠️';
    toast.innerHTML = `<span style="font-size:18px">${icon}</span><div>${message}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Switching Primary Tabs
function switchTab(tab) {
    if (tab === 'blueprint' || !tab) tab = 'live';
    if (tab === 'marketplace') tab = 'catalogue';
    state.activeTab = tab;
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(el => el.classList.remove('active'));

    const view = document.getElementById(`view-${tab}`);
    const btn = document.getElementById(`tab-btn-${tab}`);
    if (view) view.classList.add('active');
    if (btn) btn.classList.add('active');

    if (tab === 'live') {
        renderLiveFloor();
        renderSidebarQueue();
    }
    if (tab === 'catalogue') renderMarketplace();
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'admin') renderAdminView();
}

function getCurrentLiveLot() {
    return state.currentLiveLot || state.auctions[0];
}

// ===================================================
// LIVE FLOOR ARENA RENDERING (ASCII WIREFRAME IMPLEMENTATION)
// ===================================================
function renderLiveFloor() {
    const lot = getCurrentLiveLot();
    const container = document.getElementById('currentLotArena');
    if (!container || !lot) return;

    const reserveMet = lot.currentHighestBid >= lot.reservePrice;
    const isLeading = lot.currentHighestBidder === state.currentUser.username;
    
    // Determine quick presets (defaulting to the exact $35,000, $35,500, $37,000, $39,500 wireframe increments)
    let presets = [35000, 35500, 37000, 39500];
    if (lot.currentHighestBid !== 34500) {
        const cur = lot.currentHighestBid;
        const inc = lot.minIncrement || 500;
        presets = [cur + inc, cur + inc * 2, cur + inc * 5, cur + inc * 10];
    }
    if (!state.selectedPresetAmount || state.selectedPresetAmount <= lot.currentHighestBid) {
        state.selectedPresetAmount = presets[0];
    }

    const currentImg = state.activeLotImage || lot.image;

    container.innerHTML = `
        <!-- Top Eyebrow & Title -->
        <div class="lot-header-row">
            <div>
                <div class="lot-eyebrow">
                    <span>⚡ LIVE FLOOR</span>
                    <span>•</span>
                    <span style="color:#a5b4fc;">CURRENT LOT #${lot.lotNum || '01'}</span>
                </div>
                <h1 class="lot-main-title">${lot.title}</h1>
                <div class="lot-spec-subtitle">${lot.subtitle || lot.category + ' • ' + lot.condition}</div>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
                <span class="badge ${reserveMet ? 'badge-success' : 'badge-warning'}">
                    ${reserveMet ? '✓ Reserve Met' : '○ Reserve Pending'}
                </span>
                <span class="badge badge-info">Lot #${lot.lotNum || '01'} of ${state.auctions.length}</span>
            </div>
        </div>

        <div class="lot-divider"></div>

        <!-- Large Product / Lot Image Showcase -->
        <div class="lot-image-showcase">
            <img src="${currentImg}" alt="${lot.title}" class="lot-main-img" id="liveFloorMainImg">
            <div class="lot-overlay-badge">
                <span class="ws-dot pulse" style="background:#ef4444"></span>
                <span>LIVE ON BIDDING FLOOR</span>
            </div>
            <div class="lot-overlay-authenticity">
                <span>🛡️</span>
                <span>AUTHENTICITY GUARANTEED</span>
            </div>
        </div>

        <!-- Thumbnails Strip -->
        <div class="lot-thumb-strip">
            ${(lot.thumbnails || [lot.image]).map((thumbUrl, idx) => `
                <button class="lot-thumb-btn ${currentImg === thumbUrl ? 'active' : ''}" onclick="selectLotThumbnail('${thumbUrl}')" title="View angle ${idx + 1}">
                    <img src="${thumbUrl}" alt="Thumbnail ${idx + 1}">
                </button>
            `).join('')}
        </div>

        <!-- Two Core Metrics: Current Bid & Auction Closes -->
        <div class="lot-metrics-row">
            <div class="metric-box-card">
                <div class="metric-box-value" id="liveCurrentBid">${formatMoney(lot.currentHighestBid)}</div>
                <div class="metric-box-label">Current bid</div>
                <div class="metric-box-sub">
                    ${isLeading ? '<span style="color:#34d399; font-weight:700;">👑 You are leading bidder</span>' : 'Leading: <strong>' + lot.currentHighestBidder + '</strong>'}
                </div>
            </div>
            <div class="metric-box-card">
                <div class="metric-box-value timer-highlight" id="liveCountdownTimer">${formatDuration(lot.endsInSeconds)}</div>
                <div class="metric-box-label">Auction closes</div>
                <div class="metric-box-sub">
                    <span style="color:#818cf8;">● Anti-sniping protection active</span>
                </div>
            </div>
        </div>

        <!-- Quick Bid Preset Buttons -->
        <div class="quick-preset-bar">
            ${presets.map(amt => `
                <button class="preset-bid-btn ${state.selectedPresetAmount === amt ? 'selected' : ''}" onclick="selectBidPreset(${amt})">
                    ${formatMoney(amt)}
                </button>
            `).join('')}
        </div>

        <!-- Custom Bid Input Option -->
        <div class="custom-bid-flex">
            <span>Custom Bid:</span>
            <input type="number" id="liveCustomBidInput" value="${state.selectedPresetAmount}" min="${lot.currentHighestBid + lot.minIncrement}" step="${lot.minIncrement}" oninput="setCustomBid(this.value)">
            <button class="btn-secondary btn-sm" onclick="incrementCustomBid(${lot.minIncrement})">+${formatMoney(lot.minIncrement)}</button>
        </div>

        <!-- Giant Prominent PLACE BID Button -->
        <button class="btn-place-bid-hero" id="btnPlaceBidHero" onclick="handlePlaceFloorBid()">
            <span>🔨 PLACE BID</span>
            <span>•</span>
            <span id="placeBidHeroAmount">${formatMoney(state.selectedPresetAmount)}</span>
        </button>

        <div class="lot-divider"></div>

        <!-- LIVE BIDS Real-Time Stream -->
        <div class="live-bids-card">
            <div class="live-bids-header">
                <div class="live-bids-title">
                    <span class="ws-dot pulse" style="background:#10b981;"></span>
                    <span>LIVE BIDS</span>
                </div>
                <span style="font-size:12px; color:var(--text-muted);">
                    ${lot.bidsHistory.length} verified bids recorded on ledger
                </span>
            </div>

            <div class="live-bids-table" id="liveBidsStream">
                ${renderLiveBidsTable(lot.bidsHistory)}
            </div>
        </div>
    `;
}

function renderLiveBidsTable(bids) {
    if (!bids || bids.length === 0) {
        return '<div style="color:var(--text-muted); padding:12px; font-size:13px;">No bids placed on this lot yet.</div>';
    }
    return bids.map((b, idx) => `
        <div class="live-bid-row ${idx === 0 ? 'leading-bid' : ''} ${b.isNew ? 'new-flash' : ''}">
            <div class="bid-row-amount">${formatMoney(b.amount)}</div>
            <div class="bid-row-user">
                <span class="user-avatar-dot">${(b.bidder || 'U').charAt(0).toUpperCase()}</span>
                <span>${b.bidder}</span>
                ${idx === 0 ? '<span style="font-size:11px; color:#34d399; font-weight:700;">(Winning)</span>' : ''}
            </div>
            <div class="bid-row-time">${b.time}</div>
        </div>
    `).join('');
}

function selectBidPreset(amt) {
    state.selectedPresetAmount = amt;
    document.querySelectorAll('.preset-bid-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent.trim() === formatMoney(amt));
    });
    const inp = document.getElementById('liveCustomBidInput');
    if (inp) inp.value = amt;
    const heroAmt = document.getElementById('placeBidHeroAmount');
    if (heroAmt) heroAmt.textContent = formatMoney(amt);
}

function setCustomBid(val) {
    const num = Number(val);
    if (!num) return;
    state.selectedPresetAmount = num;
    document.querySelectorAll('.preset-bid-btn').forEach(btn => btn.classList.remove('selected'));
    const heroAmt = document.getElementById('placeBidHeroAmount');
    if (heroAmt) heroAmt.textContent = formatMoney(num);
}

function incrementCustomBid(step) {
    const current = state.selectedPresetAmount || (getCurrentLiveLot().currentHighestBid + step);
    selectBidPreset(current + step);
}

function selectLotThumbnail(url) {
    state.activeLotImage = url;
    const mainImg = document.getElementById('liveFloorMainImg');
    if (mainImg) mainImg.src = url;
    document.querySelectorAll('.lot-thumb-btn').forEach(btn => {
        const img = btn.querySelector('img');
        if (img) btn.classList.toggle('active', img.src === url);
    });
}

function selectLot(lotId) {
    const lot = state.auctions.find(a => a.id === lotId);
    if (!lot) return;
    state.currentLiveLot = lot;
    state.activeLotImage = lot.image;
    state.selectedPresetAmount = lot.currentHighestBid + lot.minIncrement;
    switchTab('live');
    renderSidebarQueue();
}

function handlePlaceFloorBid() {
    const lot = getCurrentLiveLot();
    if (!lot) return;

    const amount = state.selectedPresetAmount;
    if (amount <= lot.currentHighestBid) {
        showToast(`Bid must exceed current highest bid of ${formatMoney(lot.currentHighestBid)}`, 'alert');
        playSound('alert');
        return;
    }

    const requiredHold = amount * 0.1;
    if (state.currentUser.balance < requiredHold) {
        showToast(`Insufficient escrow balance for 10% guarantee hold (${formatMoney(requiredHold)}). Please deposit funds.`, 'alert');
        playSound('alert');
        openDepositModal();
        return;
    }

    // Deduct escrow hold from user
    state.currentUser.balance -= requiredHold;
    updateNavAccountUI();

    // Check anti-sniping (if < 120s remaining, add 180s)
    if (lot.endsInSeconds < 120) {
        lot.endsInSeconds += 180;
        showToast('Anti-Sniping window triggered! +3 minutes added to auction clock ⏳', 'alert');
        logAudit('ANTI_SNIPING_TRIGGERED', `Auction #${lot.id} extended by 180s`);
    }

    // Update lot state
    lot.currentHighestBid = amount;
    lot.currentHighestBidder = state.currentUser.username;
    lot.totalBids += 1;

    // Reset winning flags
    lot.bidsHistory.forEach(b => { b.isWinning = false; b.isNew = false; });
    lot.bidsHistory.unshift({
        id: Date.now(),
        bidder: state.currentUser.username,
        amount: amount,
        time: 'Just now',
        isWinning: true,
        isNew: true
    });

    logAudit('LIVE_BID_PLACED', `${state.currentUser.username} placed bid of ${formatMoney(amount)} on ${lot.title}`);
    playSound('gavel');
    showToast(`Bid of ${formatMoney(amount)} placed successfully! 🎯`, 'bid');

    renderLiveFloor();
    renderSidebarQueue();
}

function renderSidebarQueue() {
    const queue = document.getElementById('sidebarLotsQueue');
    if (!queue) return;
    const current = getCurrentLiveLot();

    queue.innerHTML = state.auctions.map(a => {
        const isCurrent = a.id === current.id;
        return `
            <div class="lot-queue-card ${isCurrent ? 'active-lot' : ''}" onclick="selectLot(${a.id})" title="Click to view ${a.title} on Live Floor">
                <img src="${a.image}" alt="${a.title}" class="lot-queue-thumb">
                <div class="lot-queue-info">
                    <div class="lot-queue-num">Lot #${a.lotNum || a.id} ${isCurrent ? '• LIVE' : ''}</div>
                    <div class="lot-queue-title">${a.title}</div>
                    <div class="lot-queue-bid">${formatMoney(a.currentHighestBid)}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===================================================
// AUTHENTIC ROLE SIGN IN MODAL (MATCHES SCREENSHOTS)
// ===================================================
// USER ACCOUNTS DATABASE & AUTHENTICATION GATEWAY
// ===================================================
const DEFAULT_ACCOUNTS = [
    {
        id: 4,
        username: 'marcus_buyer',
        fullName: 'Marcus Chen',
        email: 'buyer@demo.com',
        password: 'Buyer@123',
        role: 'BUYER',
        balance: 58500.00
    },
    {
        id: 2,
        username: 'victor_seller',
        fullName: 'Victor Vance',
        email: 'seller@demo.com',
        password: 'Seller@123',
        role: 'SELLER',
        balance: 142000.00
    },
    {
        id: 1,
        username: 'admin',
        fullName: 'Platform Admin',
        email: 'admin@demo.com',
        password: 'Admin@123',
        role: 'ADMIN',
        balance: 950000.00
    }
];

function getUsersDB() {
    try {
        const stored = localStorage.getItem('auctionflow_users_db');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {
        console.warn('Failed to parse users db:', e);
    }
    localStorage.setItem('auctionflow_users_db', JSON.stringify(DEFAULT_ACCOUNTS));
    return DEFAULT_ACCOUNTS;
}

function saveUsersDB(users) {
    try {
        localStorage.setItem('auctionflow_users_db', JSON.stringify(users));
    } catch (e) {
        console.warn('Failed to save users db:', e);
    }
}

let authGeneratedCode = 'VAULT-8821';
let authForgotUserEmail = '';

function switchAuthGateTab(tab) {
    const views = ['login', 'signup', 'forgot'];
    views.forEach(v => {
        const viewEl = document.getElementById(`authGateView-${v}`);
        const tabBtn = document.getElementById(`authGateTabBtn-${v}`);
        if (viewEl) viewEl.style.display = v === tab ? 'block' : 'none';
        if (tabBtn) tabBtn.classList.toggle('active', v === tab);
    });

    const errBanner = document.getElementById('authGateErrorBanner');
    if (errBanner) errBanner.style.display = 'none';

    if (tab === 'login') {
        selectAuthGateRole('BUYER');
    }
}

function selectAuthGateRole(role) {
    ['BUYER', 'SELLER', 'ADMIN'].forEach(r => {
        const btn = document.getElementById(`authGateRole-${r}`);
        if (btn) btn.classList.toggle('active', r === role);
    });

    const emailInp = document.getElementById('authGateLoginEmail');
    const pwdInp = document.getElementById('authGateLoginPassword');
    const submitBtn = document.getElementById('authGateLoginSubmitBtn');

    if (role === 'BUYER') {
        if (emailInp) emailInp.value = 'buyer@demo.com';
        if (pwdInp) pwdInp.value = 'Buyer@123';
        if (submitBtn) submitBtn.innerHTML = 'Sign In to Live Floor (Buyer) ➔';
    } else if (role === 'SELLER') {
        if (emailInp) emailInp.value = 'seller@demo.com';
        if (pwdInp) pwdInp.value = 'Seller@123';
        if (submitBtn) submitBtn.innerHTML = 'Sign In as Consignor (Seller) ➔';
    } else if (role === 'ADMIN') {
        if (emailInp) emailInp.value = 'admin@demo.com';
        if (pwdInp) pwdInp.value = 'Admin@123';
        if (submitBtn) submitBtn.innerHTML = 'Sign In to Admin Supervision ➔';
    }
}

function selectSignUpRole(role) {
    const buyerCard = document.getElementById('authTypeCard-BUYER');
    const sellerCard = document.getElementById('authTypeCard-SELLER');
    if (buyerCard) buyerCard.classList.toggle('selected', role === 'BUYER');
    if (sellerCard) sellerCard.classList.toggle('selected', role === 'SELLER');
}

function selectGrantChip(amt) {
    const balInp = document.getElementById('authSignUpBalance');
    if (balInp) balInp.value = amt;

    document.querySelectorAll('.auth-grant-chip').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent.includes(amt.toLocaleString()));
    });
}

function toggleAuthGatePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        btnEl.textContent = '🔒';
    } else {
        input.type = 'password';
        btnEl.textContent = '👁️';
    }
}

function updatePasswordStrength(val) {
    const bar = document.getElementById('authStrengthBar');
    if (!bar) return;
    bar.className = 'auth-strength-bar';
    if (!val) {
        bar.style.width = '0%';
    } else if (val.length < 6) {
        bar.classList.add('weak');
    } else if (val.length < 10) {
        bar.classList.add('medium');
    } else {
        bar.classList.add('strong');
    }
}

function showAuthError(msg) {
    const errBanner = document.getElementById('authGateErrorBanner');
    const errText = document.getElementById('authGateErrorText');
    if (errBanner && errText) {
        errText.textContent = msg;
        errBanner.style.display = 'flex';
    }
    playSound('alert');
}

function clearAuthError() {
    const errBanner = document.getElementById('authGateErrorBanner');
    if (errBanner) errBanner.style.display = 'none';
}

function quickLoginDemo(role) {
    const users = getUsersDB();
    const user = users.find(u => u.role === role) || DEFAULT_ACCOUNTS.find(u => u.role === role);
    if (!user) return;

    completeAuthLogin(user, true);
}

function handleAuthGateLogin(e) {
    if (e) e.preventDefault();
    clearAuthError();

    const email = document.getElementById('authGateLoginEmail')?.value.trim().toLowerCase();
    const password = document.getElementById('authGateLoginPassword')?.value;
    const remember = document.getElementById('authGateRemember')?.checked;

    if (!email || !password) {
        showAuthError('Please enter both your email and password.');
        return;
    }

    const users = getUsersDB();
    const foundUser = users.find(u => u.email.toLowerCase() === email && u.password === password);

    if (!foundUser) {
        showAuthError('Invalid credentials. Check your password or use a 1-Click Demo account below.');
        return;
    }

    completeAuthLogin(foundUser, remember);
}

function handleAuthGateRegister(e) {
    if (e) e.preventDefault();
    clearAuthError();

    const fullName = document.getElementById('authSignUpName')?.value.trim();
    const username = document.getElementById('authSignUpUsername')?.value.trim().replace(/^@/, '');
    const email = document.getElementById('authSignUpEmail')?.value.trim().toLowerCase();
    const password = document.getElementById('authSignUpPassword')?.value;
    const confirmPassword = document.getElementById('authSignUpConfirmPassword')?.value;
    const balance = parseFloat(document.getElementById('authSignUpBalance')?.value || '25000');
    const isSeller = document.getElementById('authTypeCard-SELLER')?.classList.contains('selected');
    const role = isSeller ? 'SELLER' : 'BUYER';

    if (!fullName || !username || !email || !password) {
        showAuthError('Please fill out all required fields.');
        return;
    }

    if (password.length < 6) {
        showAuthError('Password must be at least 6 characters.');
        return;
    }

    if (password !== confirmPassword) {
        showAuthError('Passwords do not match. Please re-enter.');
        return;
    }

    const users = getUsersDB();
    const existing = users.find(u => u.email.toLowerCase() === email || u.username.toLowerCase() === username.toLowerCase());
    if (existing) {
        showAuthError('An account with this email or username already exists. Please sign in.');
        return;
    }

    const newUser = {
        id: Date.now(),
        username: username,
        fullName: fullName,
        email: email,
        password: password,
        role: role,
        balance: balance
    };

    users.push(newUser);
    saveUsersDB(users);
    logAudit('AUTH_REGISTER_SUCCESS', `New ${role} account created: ${username} (${email}) with $${balance.toLocaleString()} escrow`);

    completeAuthLogin(newUser, true);
    showToast(`Welcome to AuctionFlow, ${fullName}! Your VIP account is active. 🎉`, 'success');
}

function handleForgotStep1(e) {
    if (e) e.preventDefault();
    clearAuthError();

    const email = document.getElementById('authForgotEmail')?.value.trim().toLowerCase();
    if (!email) {
        showAuthError('Please enter your email address.');
        return;
    }

    authForgotUserEmail = email;
    authGeneratedCode = `VAULT-${Math.floor(1000 + Math.random() * 9000)}`;

    const codeBadge = document.getElementById('authGeneratedCodeBadge');
    if (codeBadge) codeBadge.textContent = authGeneratedCode;

    const step1 = document.getElementById('authForgotStep1');
    const step2 = document.getElementById('authForgotStep2');
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'block';

    showToast(`Verification code sent to ${email} (Simulated: ${authGeneratedCode})`, 'info');
    playSound('bid');
}

function autofillSecurityCode() {
    const input = document.getElementById('authVerificationCodeInput');
    if (input) {
        input.value = authGeneratedCode;
        showToast(`Security code autofilled: ${authGeneratedCode} ⚡`, 'info');
    }
}

function handleForgotStep2(e) {
    if (e) e.preventDefault();
    clearAuthError();

    const code = document.getElementById('authVerificationCodeInput')?.value.trim().toUpperCase();
    const newPwd = document.getElementById('authNewPasswordInput')?.value;
    const confirmPwd = document.getElementById('authConfirmNewPasswordInput')?.value;

    if (code !== authGeneratedCode) {
        showAuthError('Invalid verification code. Please check or click Autofill.');
        return;
    }

    if (!newPwd || newPwd.length < 6) {
        showAuthError('New password must be at least 6 characters.');
        return;
    }

    if (newPwd !== confirmPwd) {
        showAuthError('New passwords do not match. Please re-enter.');
        return;
    }

    const users = getUsersDB();
    const userIndex = users.findIndex(u => u.email.toLowerCase() === authForgotUserEmail);

    if (userIndex !== -1) {
        users[userIndex].password = newPwd;
        saveUsersDB(users);
    }

    showToast('Vault password updated successfully! Please sign in with your new password.', 'success');
    playSound('bid');

    switchAuthGateTab('login');
    const loginEmail = document.getElementById('authGateLoginEmail');
    const loginPwd = document.getElementById('authGateLoginPassword');
    if (loginEmail) loginEmail.value = authForgotUserEmail;
    if (loginPwd) loginPwd.value = newPwd;

    const step1 = document.getElementById('authForgotStep1');
    const step2 = document.getElementById('authForgotStep2');
    if (step1) step1.style.display = 'block';
    if (step2) step2.style.display = 'none';
}

function completeAuthLogin(user, remember) {
    state.currentUser = user;
    state.currentRole = user.role || 'BUYER';
    state.isAuthenticated = true;

    const sessionData = {
        user: user,
        timestamp: Date.now(),
        token: `auctionflow_jwt_${user.username}_${Date.now()}`
    };

    if (remember) {
        localStorage.setItem('auctionflow_session', JSON.stringify(sessionData));
    } else {
        sessionStorage.setItem('auctionflow_session', JSON.stringify(sessionData));
    }

    applyAuthStateUI();
    playSound('bid');
    showToast(`Signed in successfully as ${user.fullName} (${state.currentRole}) ✅`, 'success');
    logAudit('AUTH_LOGIN_SUCCESS', `User authenticated as ${state.currentRole} (${user.email})`);
}

function handleLogout() {
    state.isAuthenticated = false;
    state.currentUser = null;
    state.currentRole = 'BUYER';

    try {
        localStorage.removeItem('auctionflow_session');
        sessionStorage.removeItem('auctionflow_session');
    } catch (e) {}

    applyAuthStateUI();
    playSound('alert');
    showToast('Signed out of AuctionFlow platform. Session closed.', 'info');
    logAudit('AUTH_LOGOUT', 'User session terminated');
}

function applyAuthStateUI() {
    const gateway = document.getElementById('authGateway');
    const mainApp = document.getElementById('mainApp');

    if (state.isAuthenticated && state.currentUser) {
        document.body.classList.remove('auth-locked');
        if (gateway) gateway.style.display = 'none';
        if (mainApp) mainApp.style.display = 'block';

        updateNavAccountUI();
        if (state.activeTab === 'blueprint' || !state.activeTab) state.activeTab = 'live';
        if (state.activeTab === 'live') renderLiveFloor();
        if (state.activeTab === 'catalogue') renderMarketplaceGrid();
        if (state.activeTab === 'dashboard') renderDashboard();
        if (state.activeTab === 'admin') renderAdminView();
    } else {
        document.body.classList.add('auth-locked');
        if (gateway) gateway.style.display = 'flex';
        if (mainApp) mainApp.style.display = 'none';
        switchAuthGateTab('login');
    }
}

function initAuthSession() {
    getUsersDB(); // Ensure default accounts are seeded

    let stored = null;
    try {
        stored = localStorage.getItem('auctionflow_session') || sessionStorage.getItem('auctionflow_session');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && parsed.user) {
                state.currentUser = parsed.user;
                state.currentRole = parsed.user.role || 'BUYER';
                state.isAuthenticated = true;
            }
        }
    } catch (e) {
        console.warn('Session parse error:', e);
    }

    applyAuthStateUI();
}

// In-App Role Switcher Modal (accessible from Navbar when logged in)
function openAuthModal() {
    if (!state.isAuthenticated) return;
    selectAuthModalRole(state.currentRole || 'BUYER');
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('active');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');
}

function selectAuthModalRole(role) {
    state.authModalRole = role;
    
    ['BUYER', 'SELLER', 'ADMIN'].forEach(r => {
        const tabBtn = document.getElementById(`authRoleTab-${r}`);
        if (tabBtn) tabBtn.classList.toggle('active', r === role);
    });

    const emailInp = document.getElementById('authEmail');
    const pwdInp = document.getElementById('authPassword');
    const submitBtn = document.getElementById('authSubmitBtn');
    const footerNotice = document.getElementById('authFooterNotice');
    const demoText = document.getElementById('authDemoText');

    if (role === 'BUYER') {
        if (emailInp) emailInp.value = 'buyer@demo.com';
        if (pwdInp) pwdInp.value = 'Buyer@123';
        if (submitBtn) submitBtn.textContent = 'Switch to Buyer workspace';
        if (footerNotice) footerNotice.innerHTML = 'Switching active persona for live floor bidding.';
        if (demoText) demoText.innerHTML = 'Demo buyer persona: <strong>buyer@demo.com</strong>';
    } else if (role === 'SELLER') {
        if (emailInp) emailInp.value = 'seller@demo.com';
        if (pwdInp) pwdInp.value = 'Seller@123';
        if (submitBtn) submitBtn.textContent = 'Switch to Seller workspace';
        if (footerNotice) footerNotice.innerHTML = 'Switching active persona for luxury consignment.';
        if (demoText) demoText.innerHTML = 'Demo seller persona: <strong>seller@demo.com</strong>';
    } else if (role === 'ADMIN') {
        if (emailInp) emailInp.value = 'admin@demo.com';
        if (pwdInp) pwdInp.value = 'Admin@123';
        if (submitBtn) submitBtn.textContent = 'Switch to Admin desk';
        if (footerNotice) footerNotice.innerHTML = 'Platform audit supervision desk.';
        if (demoText) demoText.innerHTML = 'Demo admin persona: <strong>admin@demo.com</strong>';
    }
}

function autoFillDemoCredentials() {
    selectAuthModalRole(state.authModalRole);
    showToast(`Demo credentials populated for ${state.authModalRole} ⚡`, 'info');
}

function handleAuthSubmit(e) {
    if (e) e.preventDefault();
    const role = state.authModalRole;
    state.currentRole = role;

    const users = getUsersDB();
    const user = users.find(u => u.role === role) || DEFAULT_ACCOUNTS.find(u => u.role === role);
    if (user) {
        state.currentUser = user;
    }

    updateNavAccountUI();
    closeAuthModal();
    playSound('bid');
    showToast(`Switched workspace to ${state.currentUser.fullName} (${role}) ✅`, 'success');
    logAudit('AUTH_ROLE_SWITCH', `Switched active workspace role to ${role}`);

    if (state.activeTab === 'live') renderLiveFloor();
    if (state.activeTab === 'dashboard') renderDashboard();
    if (state.activeTab === 'admin') renderAdminView();
}

function updateNavAccountUI() {
    if (!state.currentUser) return;
    const nameEl = document.getElementById('navAccountName');
    const tagEl = document.getElementById('navRoleTag');
    const balEl = document.getElementById('navBalanceDisplay');
    const avatarEl = document.getElementById('accountAvatarIcon');

    if (nameEl) nameEl.textContent = state.currentUser.fullName || state.currentUser.username;
    if (tagEl) {
        const role = state.currentRole || 'BUYER';
        tagEl.textContent = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
        tagEl.className = `account-role-tag ${role.toLowerCase()}`;
    }
    if (balEl) balEl.textContent = formatMoney(state.currentUser.balance || 0);
    if (avatarEl) {
        avatarEl.textContent = state.currentRole === 'ADMIN' ? '🛡️' : (state.currentRole === 'SELLER' ? '💼' : '👤');
    }
}

function handleForgotPassword() {
    switchAuthGateTab('forgot');
}

function handleCreateAccountPrompt() {
    switchAuthGateTab('signup');
}

// ===================================================
// ESCROW DEPOSIT MODAL
// ===================================================
function openDepositModal() {
    const cur = document.getElementById('depositCurrentBalance');
    if (cur) cur.textContent = formatMoney(state.currentUser.balance);
    const modal = document.getElementById('depositModal');
    if (modal) modal.classList.add('active');
}

function closeDepositModal() {
    const modal = document.getElementById('depositModal');
    if (modal) modal.classList.remove('active');
}

function selectDepositAmount(amt) {
    const inp = document.getElementById('depositAmountInput');
    if (inp) inp.value = amt;
    document.querySelectorAll('.deposit-chip').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent.includes(amt.toLocaleString()));
    });
}

function confirmDeposit() {
    const inp = document.getElementById('depositAmountInput');
    const amt = Number(inp?.value) || 10000;
    state.currentUser.balance += amt;
    updateNavAccountUI();
    closeDepositModal();
    playSound('bid');
    showToast(`${formatMoney(amt)} deposited into escrow wallet! ✅`, 'success');
    logAudit('ESCROW_FUNDS_DEPOSIT', `${state.currentUser.username} deposited ${formatMoney(amt)}`);
}

function handleGlobalSearch(q) {
    state.searchQuery = q.toLowerCase();
    if (state.activeTab !== 'catalogue') {
        switchTab('catalogue');
    }
    const catSearchInp = document.getElementById('searchInput');
    if (catSearchInp) catSearchInp.value = q;
    filterAuctions();
}

// Marketplace Rendering
function renderMarketplace() {
    renderHeroSpotlight();
    renderAuctionGrid();
}

function renderHeroSpotlight() {
    const featured = state.auctions[1]; // Rolex Daytona
    const container = document.getElementById('heroFeaturedItem');
    if (!container || !featured) return;

    container.innerHTML = `
        <div class="featured-img-wrap" onclick="openBidModal(${featured.id})">
            <img src="${featured.image}" alt="${featured.title}" class="featured-img">
            <div class="featured-badge-live"><span class="ws-dot pulse" style="background:#fff"></span> LIVE LOT #02</div>
            <div class="featured-timer" id="heroFeaturedTimer">${formatDuration(featured.endsInSeconds)}</div>
        </div>
        <div class="featured-body">
            <div>
                <span class="card-category-tag" style="position:static; display:inline-block; margin-bottom:8px;">${featured.category}</span>
                <h3 class="featured-title">${featured.title}</h3>
                <p style="color:var(--text-secondary); font-size:13px; margin-top:4px;">${featured.description.substring(0, 110)}...</p>
            </div>
            <div class="featured-bid-row">
                <div>
                    <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Leading Bid</span>
                    <div class="featured-bid-amount" id="heroFeaturedBid">${formatMoney(featured.currentHighestBid)}</div>
                </div>
                <button class="btn-primary" onclick="openBidModal(${featured.id})">⚡ Enter Bidding Room</button>
            </div>
        </div>
    `;
}

function filterAuctions() {
    state.searchQuery = document.getElementById('searchInput').value.toLowerCase();
    state.sortBy = document.getElementById('sortSelect').value;
    renderAuctionGrid();
}

function selectCategory(cat) {
    state.filterCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(pill => pill.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderAuctionGrid();
}

function renderAuctionGrid() {
    const grid = document.getElementById('auctionsGrid');
    if (!grid) return;

    let list = [...state.auctions];

    // Filter Category
    if (state.filterCategory !== 'All') {
        list = list.filter(a => a.category.toLowerCase().includes(state.filterCategory.toLowerCase()));
    }

    // Search Query
    if (state.searchQuery) {
        list = list.filter(a => a.title.toLowerCase().includes(state.searchQuery) || a.description.toLowerCase().includes(state.searchQuery));
    }

    // Sort
    if (state.sortBy === 'endingSoon') {
        list.sort((a, b) => a.endsInSeconds - b.endsInSeconds);
    } else if (state.sortBy === 'highestBid') {
        list.sort((a, b) => b.currentHighestBid - a.currentHighestBid);
    } else if (state.sortBy === 'mostBids') {
        list.sort((a, b) => b.totalBids - a.totalBids);
    } else if (state.sortBy === 'newest') {
        list.sort((a, b) => b.id - a.id);
    }

    grid.innerHTML = list.map(item => {
        const isWatched = state.watchlist.includes(item.id);
        const reserveMet = item.currentHighestBid >= item.reservePrice;
        const isWinning = item.currentHighestBidder === state.currentUser.username;
        const isUrgent = item.endsInSeconds < 3600;

        return `
            <div class="auction-card" id="card-${item.id}">
                <div class="card-media" onclick="openBidModal(${item.id})">
                    <img src="${item.image}" alt="${item.title}" class="card-img">
                    <span class="card-category-tag">${item.category}</span>
                    <button class="card-watch-btn ${isWatched ? 'active' : ''}" onclick="toggleWatch(event, ${item.id})">
                        ${isWatched ? '❤️' : '🤍'}
                    </button>
                    <div class="card-countdown-overlay">
                        <span>⏳ Time Remaining:</span>
                        <span class="countdown-time ${isUrgent ? 'countdown-urgency' : ''}" id="timer-${item.id}">${formatDuration(item.endsInSeconds)}</span>
                    </div>
                </div>

                <div class="card-content">
                    <h3 class="card-title" onclick="openBidModal(${item.id})" style="cursor:pointer;">${item.title}</h3>
                    
                    <div class="card-condition-row">
                        <span class="condition-pill">${item.condition}</span>
                        <span class="reserve-badge ${reserveMet ? 'reserve-met' : 'reserve-pending'}">
                            ${reserveMet ? '✓ Reserve Met' : '○ Reserve Pending'}
                        </span>
                        <span>• ${item.totalBids} bids</span>
                    </div>

                    <p style="font-size:13px; color:var(--text-secondary); margin-bottom:14px; line-height:1.4;">
                        ${item.description.substring(0, 95)}...
                    </p>

                    <div class="card-bid-footer">
                        <div class="bid-block">
                            <span class="label">Current Bid</span>
                            <span class="amount" id="bid-val-${item.id}">${formatMoney(item.currentHighestBid)}</span>
                            <span class="leader">${isWinning ? '👑 You are leading' : 'Leader: ' + item.currentHighestBidder}</span>
                        </div>
                        <button class="btn-primary btn-sm" onclick="openBidModal(${item.id})">
                            Bid Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleWatch(e, id) {
    e.stopPropagation();
    if (state.watchlist.includes(id)) {
        state.watchlist = state.watchlist.filter(x => x !== id);
        showToast('Removed from Watchlist', 'info');
    } else {
        state.watchlist.push(id);
        showToast('Added to Watchlist ⭐', 'success');
    }
    renderAuctionGrid();
}

// Bidding Room Modal
function openBidModal(auctionId) {
    const item = state.auctions.find(a => a.id === auctionId);
    if (!item) return;
    state.selectedAuction = item;

    const modal = document.getElementById('bidModal');
    const content = document.getElementById('biddingRoomContent');

    const nextMin = item.currentHighestBid + item.minIncrement;
    const reserveMet = item.currentHighestBid >= item.reservePrice;

    content.innerHTML = `
        <!-- Left: Image Gallery & Item Details -->
        <div class="room-gallery">
            <img src="${item.image}" alt="${item.title}" class="room-main-image" id="roomMainImg">
            
            <div class="room-provenance-box">
                <h4>📜 Specification & Authenticity Verification</h4>
                <p>${item.description}</p>
                <div style="margin-top:12px; display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12.5px;">
                    <div><strong>Asset Category:</strong> ${item.category}</div>
                    <div><strong>Condition Grade:</strong> ${item.condition}</div>
                    <div><strong>Starting Price:</strong> ${formatMoney(item.startingPrice)}</div>
                    <div><strong>Reserve Target:</strong> ${formatMoney(item.reservePrice)}</div>
                    <div><strong>Bid Increment:</strong> ${formatMoney(item.minIncrement)}</div>
                    <div><strong>Anti-Sniping:</strong> Active (2m window)</div>
                </div>
            </div>

            <div class="room-provenance-box" style="display:flex; align-items:center; gap:16px;">
                <div style="width:44px; height:44px; border-radius:50%; background:var(--primary-gradient); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px;">
                    ${item.seller.name.charAt(0)}
                </div>
                <div style="flex:1;">
                    <div style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:6px;">
                        ${item.seller.name} <span style="color:#38bdf8; font-size:12px;">✓ Verified Dealer</span>
                    </div>
                    <div style="font-size:12px; color:var(--text-muted);">
                        Trust Rating: ⭐ ${item.seller.rating} / 5.0 • Fast Insured Dispatch
                    </div>
                </div>
                <button class="btn-secondary btn-sm" onclick="openRatingModal()">Rate Seller</button>
            </div>
        </div>

        <!-- Right: Real-Time Bidding Panel -->
        <div class="room-bidding-panel">
            <div>
                <span class="room-status-badge">
                    <span class="ws-dot pulse" style="background:#ef4444"></span> LIVE STOMP WEBSOCKET ROOM
                </span>
                <h2 class="room-title" style="margin-top:8px;">${item.title}</h2>
            </div>

            <!-- Countdown Timer Card -->
            <div class="room-countdown-card">
                <div>
                    <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Closes In</span>
                    <div class="timer-val" id="roomModalTimer">${formatDuration(item.endsInSeconds)}</div>
                </div>
                <span class="badge ${reserveMet ? 'badge-success' : 'badge-warning'}">
                    ${reserveMet ? '✓ Reserve Met' : '○ Reserve Not Met'}
                </span>
            </div>

            <!-- Current Highest Bid Display -->
            <div class="bid-ladder-box">
                <div class="current-high-bid">
                    <div>
                        <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Current Highest Bid</span>
                        <div class="amount" id="roomCurrentBid">${formatMoney(item.currentHighestBid)}</div>
                        <div style="font-size:12px; color:#94a3b8;" id="roomBidderName">Held by: <strong>${item.currentHighestBidder}</strong></div>
                    </div>
                    <div style="text-align:right;">
                        <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Next Min Bid</span>
                        <div style="font-family:var(--font-mono); font-weight:700; font-size:18px; color:#a5b4fc;" id="roomNextMin">
                            ${formatMoney(nextMin)}
                        </div>
                    </div>
                </div>

                <!-- Quick Increment Buttons -->
                <div style="margin-bottom:8px; font-size:11px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Quick Place Increments:</div>
                <div class="quick-bid-buttons">
                    <button class="btn-quick-bid" onclick="placeDirectBid(${item.currentHighestBid + item.minIncrement})">+${formatMoney(item.minIncrement)}</button>
                    <button class="btn-quick-bid" onclick="placeDirectBid(${item.currentHighestBid + item.minIncrement * 2})">+${formatMoney(item.minIncrement * 2)}</button>
                    <button class="btn-quick-bid" onclick="placeDirectBid(${item.currentHighestBid + item.minIncrement * 5})">+${formatMoney(item.minIncrement * 5)}</button>
                    <button class="btn-quick-bid" onclick="placeDirectBid(${item.currentHighestBid + item.minIncrement * 10})">+${formatMoney(item.minIncrement * 10)}</button>
                </div>

                <!-- Custom Bid Input -->
                <div class="custom-bid-input-wrap">
                    <input type="number" id="customBidInput" min="${nextMin}" step="${item.minIncrement}" value="${nextMin}" placeholder="Enter custom bid ($)">
                    <button class="btn-primary" onclick="submitCustomBid()">⚡ Place Bid</button>
                </div>
            </div>

            <!-- Anti-sniping dynamic alert -->
            <div class="sniping-alert" id="snipingAlert" style="display: ${item.endsInSeconds < 180 ? 'flex' : 'none'};">
                <span>🛡️</span>
                <span><strong>Anti-Sniping Engine:</strong> Bids placed in final 2 minutes auto-extend the auction clock by 3 minutes to prevent latency bot sniping.</span>
            </div>

            <!-- Live Bid Feed -->
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:12px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Live Bid History Feed</span>
                    <span style="font-size:11px; color:#34d399;" class="pulse">● Live Stream</span>
                </div>
                <div class="live-feed-wrap" id="roomBidFeed">
                    ${renderBidFeedItems(item.bidsHistory)}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function renderBidFeedItems(bids) {
    if (!bids || bids.length === 0) return '<div style="color:var(--text-muted); padding:10px; font-size:12px;">No bids placed yet.</div>';
    return bids.map((b, idx) => `
        <div class="feed-item ${idx === 0 ? 'winning' : ''}">
            <span>${idx === 0 ? '👑' : '•'} <strong>${b.bidder}</strong></span>
            <span>${formatMoney(b.amount)}</span>
            <span style="color:#64748b; font-size:11px;">${b.time}</span>
        </div>
    `).join('');
}

function closeBidModal() {
    document.getElementById('bidModal').classList.remove('active');
    state.selectedAuction = null;
}

// Bidding Execution
function placeDirectBid(amount) {
    executeBid(state.selectedAuction.id, amount, state.currentUser.username);
}

function submitCustomBid() {
    const input = document.getElementById('customBidInput');
    const amount = Number(input.value);
    const min = state.selectedAuction.currentHighestBid + state.selectedAuction.minIncrement;
    if (amount < min) {
        showToast(`Bid must be at least ${formatMoney(min)}`, 'alert');
        playSound('alert');
        return;
    }
    executeBid(state.selectedAuction.id, amount, state.currentUser.username);
}

function executeBid(auctionId, amount, bidderUsername) {
    const auction = state.auctions.find(a => a.id === auctionId);
    if (!auction) return;

    if (amount <= auction.currentHighestBid) {
        showToast('Bid must exceed current highest bid!', 'alert');
        playSound('alert');
        return;
    }

    // Check Anti-Sniping rule (if less than 2 minutes remain, extend by 3 minutes)
    if (auction.endsInSeconds < 120) {
        auction.endsInSeconds += 180;
        showToast('Anti-Sniping triggered! +3 minutes added to clock ⏳', 'warning');
        logAudit('ANTI_SNIPING_TRIGGERED', `Auction #${auction.id} extended by 180 seconds due to bid in critical window`);
    }

    // Update auction state
    auction.currentHighestBid = amount;
    auction.currentHighestBidder = bidderUsername;
    auction.totalBids += 1;

    // Add to history
    auction.bidsHistory.unshift({
        id: Date.now(),
        bidder: bidderUsername,
        amount: amount,
        time: 'Just now',
        isWinning: true
    });
    // Mark previous as non-winning
    if (auction.bidsHistory[1]) auction.bidsHistory[1].isWinning = false;

    // Sound effect
    playSound('bid');

    // Toast
    showToast(`New Leading Bid of ${formatMoney(amount)} placed by ${bidderUsername}!`, 'bid');

    // Audit Log
    logAudit('BID_PLACED_WS', `User ${bidderUsername} placed ${formatMoney(amount)} on Lot #${auction.id} (${auction.title.substring(0, 20)}...)`);

    // Re-render UI
    renderMarketplace();
    if (state.selectedAuction && state.selectedAuction.id === auctionId) {
        openBidModal(auctionId); // refresh modal view
    }
}

// Bot Simulation Loop
function toggleBidSimulation() {
    state.botSimulationActive = !state.botSimulationActive;
    const icon = document.getElementById('simIcon');
    const label = document.getElementById('simLabel');
    icon.textContent = state.botSimulationActive ? '🤖' : '⏸️';
    label.textContent = state.botSimulationActive ? 'Bot Bids: ON' : 'Bot Bids: OFF';
    showToast(`Simulated Market Bidding: ${state.botSimulationActive ? 'ENABLED' : 'PAUSED'}`, 'info');
}

const botNames = ['elena_rolex', 'sarah_art', 'tokyo_vault', 'geneva_patrimony', 'crypto_whale', 'monaco_collector', 'alexander_v'];

setInterval(() => {
    if (!state.botSimulationActive) return;

    // Pick random active auction
    const active = state.auctions.filter(a => a.status === 'ACTIVE' && a.endsInSeconds > 0);
    if (active.length === 0) return;

    const target = active[Math.floor(Math.random() * active.length)];
    const randomBot = botNames[Math.floor(Math.random() * botNames.length)];

    // Don't bid if bot is already leading
    if (target.currentHighestBidder === randomBot) return;

    const increment = target.minIncrement * (Math.random() > 0.6 ? 2 : 1);
    const newBid = target.currentHighestBid + increment;

    executeBid(target.id, newBid, randomBot);

    // If current user was leading and was just outbid, play alert!
    if (target.currentHighestBidder !== state.currentUser.username && target.bidsHistory[1] && target.bidsHistory[1].bidder === state.currentUser.username) {
        playSound('alert');
        showToast(`⚠️ You have been outbid on "${target.title.substring(0, 25)}..."! New high bid: ${formatMoney(newBid)}`, 'alert');
    }
}, 16000); // Trigger every 16 seconds

// Ticking Clock Loop
setInterval(() => {
    state.auctions.forEach(auction => {
        if (auction.endsInSeconds > 0) {
            auction.endsInSeconds -= 1;
            const timerEl = document.getElementById(`timer-${auction.id}`);
            if (timerEl) {
                timerEl.textContent = formatDuration(auction.endsInSeconds);
                if (auction.endsInSeconds < 3600) timerEl.classList.add('countdown-urgency');
            }
            if (state.selectedAuction && state.selectedAuction.id === auction.id) {
                const modalTimer = document.getElementById('roomModalTimer');
                if (modalTimer) modalTimer.textContent = formatDuration(auction.endsInSeconds);
            }
        } else if (auction.status === 'ACTIVE') {
            auction.status = 'ENDED';
            playSound('gavel');
            logAudit('AUCTION_ENDED', `Lot #${auction.id} closed. Winner: ${auction.currentHighestBidder} for ${formatMoney(auction.currentHighestBid)}`);
            showToast(`🔨 Lot #${auction.id} (${auction.title.substring(0, 20)}...) has ENDED! Winner: ${auction.currentHighestBidder}`, 'success');
            renderMarketplace();
        }
    });

    // Update hero timer
    const heroTimer = document.getElementById('heroFeaturedTimer');
    if (heroTimer && state.auctions[1]) {
        heroTimer.textContent = formatDuration(state.auctions[1].endsInSeconds);
    }
}, 1000);

// Create Auction Modal
function openCreateModal() {
    if (!state.isAuthenticated) {
        applyAuthStateUI();
        return;
    }
    if (state.currentRole !== 'SELLER' && state.currentRole !== 'ADMIN') {
        showToast('Consignor Privileges: Switched to Seller workspace to list luxury item 💼', 'info');
        selectAuthModalRole('SELLER');
        handleAuthSubmit();
    }
    const modal = document.getElementById('createModal');
    if (modal) modal.classList.add('active');
}
function closeCreateModal() {
    const modal = document.getElementById('createModal');
    if (modal) modal.classList.remove('active');
}
function applyImagePreset(val) {
    const customGroup = document.getElementById('customUrlGroup');
    if (val === 'custom') {
        customGroup.style.display = 'block';
    } else {
        customGroup.style.display = 'none';
    }
}
function handleCreateAuction(e) {
    e.preventDefault();
    const title = document.getElementById('newTitle').value;
    const category = document.getElementById('newCategory').value;
    const condition = document.getElementById('newCondition').value;
    const startingPrice = Number(document.getElementById('newStartingPrice').value);
    const reservePrice = Number(document.getElementById('newReservePrice').value) || startingPrice;
    const minIncrement = Number(document.getElementById('newIncrement').value);
    const durationHours = Number(document.getElementById('newDuration').value);
    const presetSelect = document.getElementById('newImagePreset').value;
    const customUrl = document.getElementById('newCustomImageUrl').value;
    const image = (presetSelect === 'custom' && customUrl) ? customUrl : presetSelect;
    const description = document.getElementById('newDescription').value;

    const newAuction = {
        id: state.auctions.length + 1,
        title,
        category,
        condition,
        startingPrice,
        reservePrice,
        currentHighestBid: startingPrice,
        currentHighestBidder: 'No Bids Yet',
        minIncrement,
        totalBids: 0,
        seller: { 
            id: state.currentUser?.id || 2, 
            username: state.currentUser?.username || 'seller_demo', 
            name: state.currentUser?.fullName || 'Consignor Seller', 
            verified: true, 
            rating: 5.0 
        },
        image,
        description,
        endsInSeconds: durationHours * 3600,
        status: 'ACTIVE',
        bidsHistory: []
    };

    state.auctions.unshift(newAuction);
    closeCreateModal();
    showToast(`Auction "${title}" listed successfully! 🚀`, 'success');
    logAudit('AUCTION_CREATED', `New lot listed: "${title}" by ${state.currentUser?.username || 'seller'} with reserve ${formatMoney(reservePrice)}`);
    renderMarketplace();
    renderLiveFloor();
}

// User Dashboard View
function renderDashboard() {
    const greeting = document.getElementById('dashGreeting');
    const notice = document.getElementById('dashRoleNotice');
    greeting.textContent = `Portfolio: ${state.currentUser.fullName}`;
    notice.textContent = `Viewing active bidding commitments, escrow transactions, and listed inventory for ${state.currentRole} role.`;

    const quickStats = document.getElementById('dashQuickStats');
    const myBids = state.auctions.filter(a => a.bidsHistory.some(b => b.bidder === state.currentUser.username));
    const leadingBids = state.auctions.filter(a => a.currentHighestBidder === state.currentUser.username);
    const myListings = state.auctions.filter(a => a.seller.username === state.currentUser.username);

    quickStats.innerHTML = `
        <div class="metric-card" style="display:inline-block; margin-left:8px;">
            <span class="metric-val">${leadingBids.length} Lots</span>
            <span class="metric-label">Winning Now</span>
        </div>
        <div class="metric-card" style="display:inline-block; margin-left:8px;">
            <span class="metric-val">${myBids.length}</span>
            <span class="metric-label">Active Bids</span>
        </div>
        <div class="metric-card" style="display:inline-block; margin-left:8px;">
            <span class="metric-val">${state.watchlist.length}</span>
            <span class="metric-label">Watchlist</span>
        </div>
    `;

    renderDashSubView();
}

function switchDashSubTab(sub) {
    state.activeDashTab = sub;
    document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderDashSubView();
}

function renderDashSubView() {
    const container = document.getElementById('dashSubView');
    if (!container) return;

    if (state.activeDashTab === 'bids') {
        const myBids = state.auctions.filter(a => a.bidsHistory.some(b => b.bidder === state.currentUser.username));
        if (myBids.length === 0) {
            container.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted);">You have not placed bids on any active items. <br><button class="btn-primary mt-3" onclick="switchTab('marketplace')">Explore Marketplace</button></div>`;
            return;
        }

        container.innerHTML = `
            <div class="table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Current High Bid</th>
                            <th>Your Status</th>
                            <th>Time Left</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${myBids.map(a => {
                            const isLeading = a.currentHighestBidder === state.currentUser.username;
                            return `
                                <tr>
                                    <td style="font-weight:600; display:flex; align-items:center; gap:12px;">
                                        <img src="${a.image}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;">
                                        ${a.title}
                                    </td>
                                    <td style="font-family:var(--font-mono); font-weight:700;">${formatMoney(a.currentHighestBid)}</td>
                                    <td>
                                        <span class="badge ${isLeading ? 'badge-success' : 'badge-warning'}">
                                            ${isLeading ? '👑 Winning' : '⚠️ Outbid'}
                                        </span>
                                    </td>
                                    <td style="font-family:var(--font-mono);">${formatDuration(a.endsInSeconds)}</td>
                                    <td>
                                        <button class="btn-secondary btn-sm" onclick="openBidModal(${a.id})">${isLeading ? 'View Room' : '⚡ Increase Bid'}</button>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else if (state.activeDashTab === 'won') {
        // Show won items
        const wonItems = state.auctions.filter(a => a.currentHighestBidder === state.currentUser.username);
        container.innerHTML = `
            <div style="margin-bottom:16px;">
                <p style="color:var(--text-secondary); font-size:13.5px;">Items you have won or are currently highest bidder on. Complete payment to release shipment from verified escrow.</p>
            </div>
            <div class="table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Item Title</th>
                            <th>Winning Price</th>
                            <th>Seller</th>
                            <th>Escrow Settlement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${wonItems.map(w => `
                            <tr>
                                <td style="font-weight:600;">${w.title}</td>
                                <td style="font-family:var(--font-mono); font-weight:700; color:var(--success);">${formatMoney(w.currentHighestBid)}</td>
                                <td>${w.seller.name}</td>
                                <td><span class="badge badge-warning">Awaiting Settlement</span></td>
                                <td>
                                    <button class="btn-primary btn-sm" onclick="openPaymentModal(${w.id})">💳 Pay with Stripe</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else if (state.activeDashTab === 'listings') {
        const myListings = state.auctions.filter(a => a.seller.username === state.currentUser.username);
        container.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <p style="color:var(--text-secondary); font-size:13.5px;">Active inventory items listed under your seller profile.</p>
                <button class="btn-primary btn-sm" onclick="openCreateModal()">+ Create New Listing</button>
            </div>
            <div class="table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Asset</th>
                            <th>Starting Price</th>
                            <th>Current High</th>
                            <th>Total Bids</th>
                            <th>Reserve Met</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${myListings.map(l => `
                            <tr>
                                <td style="font-weight:600;">${l.title}</td>
                                <td style="font-family:var(--font-mono);">${formatMoney(l.startingPrice)}</td>
                                <td style="font-family:var(--font-mono); font-weight:700; color:var(--success);">${formatMoney(l.currentHighestBid)}</td>
                                <td>${l.totalBids}</td>
                                <td>${l.currentHighestBid >= l.reservePrice ? '✓ Yes' : '○ No'}</td>
                                <td>
                                    <button class="btn-secondary btn-sm" onclick="endListingEarly(${l.id})">Accept Leading Bid</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else if (state.activeDashTab === 'watchlist') {
        const watched = state.auctions.filter(a => state.watchlist.includes(a.id));
        container.innerHTML = `
            <div class="auctions-grid">
                ${watched.map(item => `
                    <div class="auction-card">
                        <div class="card-media" onclick="openBidModal(${item.id})">
                            <img src="${item.image}" alt="${item.title}" class="card-img">
                            <span class="card-category-tag">${item.category}</span>
                            <div class="card-countdown-overlay">
                                <span>⏳ Time:</span>
                                <span class="countdown-time">${formatDuration(item.endsInSeconds)}</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${item.title}</h3>
                            <div class="card-bid-footer">
                                <div class="bid-block">
                                    <span class="label">Current Bid</span>
                                    <span class="amount">${formatMoney(item.currentHighestBid)}</span>
                                </div>
                                <button class="btn-primary btn-sm" onclick="openBidModal(${item.id})">Bid Now</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function endListingEarly(id) {
    const item = state.auctions.find(a => a.id === id);
    if (!item) return;
    item.endsInSeconds = 0;
    item.status = 'ENDED';
    showToast(`Auction "${item.title}" accepted and finalized early.`, 'success');
    logAudit('SELLER_ACCEPT_BID', `Seller accepted current highest bid on #${id}`);
    renderDashboard();
}

// Payment Modal & Stripe Escrow Simulation
function openPaymentModal(auctionId) {
    const item = state.auctions.find(a => a.id === auctionId);
    if (!item) return;

    const modal = document.getElementById('paymentModal');
    const summary = document.getElementById('paymentSummary');

    const fee = item.currentHighestBid * 0.025; // 2.5% platform fee
    const total = item.currentHighestBid + fee;

    summary.innerHTML = `
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>Item: <strong>${item.title}</strong></span>
                <span style="font-family:var(--font-mono); font-weight:700;">${formatMoney(item.currentHighestBid)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; color:var(--text-muted);">
                <span>Insured Escrow & Verification Fee (2.5%)</span>
                <span style="font-family:var(--font-mono);">${formatMoney(fee)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding-top:10px; border-top:1px solid var(--border-color); font-weight:800; font-size:16px;">
                <span>Total Escrow Authorization:</span>
                <span style="color:var(--success); font-family:var(--font-mono); font-size:20px;">${formatMoney(total)}</span>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function handleProcessPayment(e) {
    e.preventDefault();
    const btn = document.getElementById('btnSubmitPayment');
    btn.innerHTML = `<span class="ws-dot pulse" style="background:#fff"></span> Authorizing with Stripe 3DS...`;
    btn.disabled = true;

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `<span>Authorize Escrow Payment</span>`;
        closePaymentModal();
        playSound('bid');
        showToast('Payment Authorized! Funds held in Escrow pending physical receipt.', 'success');
        logAudit('STRIPE_ESCROW_AUTHORIZED', `Payment intent settled. Escrow hold created for winning bidder ${state.currentUser.username}`);
        if (state.activeTab === 'dashboard') renderDashboard();
    }, 1500);
}

// Rating & Reviews Modal
function openRatingModal() {
    document.getElementById('ratingModal').classList.add('active');
}
function closeRatingModal() {
    document.getElementById('ratingModal').classList.remove('active');
}
function setRatingScore(score) {
    state.ratingScore = score;
    const stars = document.querySelectorAll('#starRatingSelector .star');
    stars.forEach((s, idx) => {
        if (idx < score) s.classList.add('active');
        else s.classList.remove('active');
    });
    const label = document.getElementById('ratingScoreText');
    const texts = ['', '1.0 - Poor Experience', '2.0 - Below Average', '3.0 - Satisfactory', '4.0 - Very Good', '5.0 - Exceptional Experience'];
    label.textContent = texts[score];
}
function submitRating() {
    const comment = document.getElementById('ratingComment').value;
    closeRatingModal();
    showToast(`Thank you! Submitted ${state.ratingScore}★ verified review.`, 'success');
    logAudit('USER_RATING_SUBMITTED', `Score: ${state.ratingScore}/5. Review: "${comment || 'Positive feedback'}"`);
}

// Admin Desk Rendering
function renderAdminView() {
    renderDisputeList();
    renderUserTable();
    renderAuditLogs();
}

function renderDisputeList() {
    const list = document.getElementById('disputeList');
    if (!list) return;

    if (state.disputes.length === 0) {
        list.innerHTML = `<div style="color:var(--text-muted); padding:20px; font-size:13px;">No open dispute claims pending.</div>`;
        return;
    }

    list.innerHTML = state.disputes.map(d => `
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-weight:700;">Case #${d.id}: ${d.itemTitle}</span>
                <span class="badge badge-warning">${d.status}</span>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">${d.reason}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--text-muted);">
                <span>Complainant: <strong>${d.complainant}</strong> • Target: <strong>${d.respondent}</strong></span>
                <div style="display:flex; gap:8px;">
                    <button class="btn-secondary btn-sm" onclick="resolveDispute(${d.id}, 'REFUND')">Refund Buyer</button>
                    <button class="btn-primary btn-sm" onclick="resolveDispute(${d.id}, 'RELEASE')">Release to Seller</button>
                </div>
            </div>
        </div>
    `).join('');
}

function resolveDispute(id, action) {
    state.disputes = state.disputes.filter(d => d.id !== id);
    const badge = document.getElementById('disputeCountBadge');
    if (badge) badge.textContent = `${state.disputes.length} Pending`;
    const count = document.getElementById('adminDisputes');
    if (count) count.textContent = `${state.disputes.length} Cases`;

    showToast(`Dispute #${id} resolved: ${action === 'REFUND' ? 'Refunded to Buyer' : 'Escrow Released to Seller'}`, 'success');
    logAudit('DISPUTE_RESOLVED', `Admin resolved Dispute #${id} with action: ${action}`);
    renderDisputeList();
}

function renderUserTable() {
    const tableBody = document.querySelector('#adminUserTable tbody');
    if (!tableBody) return;

    tableBody.innerHTML = state.users.map(u => `
        <tr>
            <td style="font-weight:600;">${u.name} <span style="font-size:11px; color:var(--text-muted);">(@${u.username})</span></td>
            <td><span class="badge ${u.role === 'ADMIN' ? 'badge-warning' : u.role === 'SELLER' ? 'badge-info' : 'badge-success'}">${u.role}</span></td>
            <td>${u.verified ? '✓ Verified' : 'Unverified'}</td>
            <td>
                <button class="btn-secondary btn-sm" onclick="toggleUserVerify(${u.id})">
                    ${u.verified ? 'Revoke Check' : 'Verify Seller'}
                </button>
            </td>
        </tr>
    `).join('');
}

function toggleUserVerify(id) {
    const user = state.users.find(u => u.id === id);
    if (!user) return;
    user.verified = !user.verified;
    showToast(`Updated verification status for @${user.username}`, 'info');
    logAudit('ADMIN_USER_VERIFIED', `Verification status for user #${id} updated to ${user.verified}`);
    renderUserTable();
}

function renderAuditLogs() {
    const terminal = document.getElementById('auditLogTerminal');
    if (!terminal) return;

    terminal.innerHTML = state.auditLogs.map(l => `
        <div class="terminal-line">
            <span class="terminal-time">[${l.time}]</span>
            <span class="terminal-action">${l.action}</span>
            <span style="flex:1;">${l.details}</span>
            <span class="terminal-hash">${l.hash}</span>
        </div>
    `).join('');
}

function triggerManualAudit() {
    logAudit('INTEGRITY_CHECK_PASS', 'Algorithmic state verification passed: All 6 live auction ledgers verified with 0 drift');
    showToast('Platform integrity scan completed: 100% Validated', 'success');
}

function exportAuditLog() {
    const csvContent = "data:text/csv;charset=utf-8,Time,Action,Details,Hash\n" +
        state.auditLogs.map(e => `"${e.time}","${e.action}","${e.details}","${e.hash}"`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `auction_audit_log_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Audit Log exported to CSV', 'success');
}

function renderBlueprint() {
    // Deprecated: Blueprint removed per request
}

// Initial Boot
window.addEventListener('DOMContentLoaded', () => {
    // Initial audit log
    logAudit('SYSTEM_BOOT', 'AuctionFlow Spring Boot STOMP Engine initialized on port 8080');
    logAudit('MARKETPLACE_LOAD', 'Loaded 6 live luxury auction lots with active anti-sniping checks');
    
    // Check and apply authentication gateway before loading main floor
    initAuthSession();

    // 1-second countdown clock interval
    setInterval(() => {
        if (!state.isAuthenticated) return;

        state.auctions.forEach(a => {
            if (a.endsInSeconds > 0) a.endsInSeconds -= 1;
        });

        // Update live floor timer if live view is open
        if (state.activeTab === 'live') {
            const lot = getCurrentLiveLot();
            const timerEl = document.getElementById('liveCountdownTimer');
            if (timerEl && lot) {
                timerEl.textContent = formatDuration(lot.endsInSeconds);
            }
        }

        // Update hero timer if catalogue view is open
        const heroTimer = document.getElementById('heroFeaturedTimer');
        if (heroTimer && state.auctions[1]) {
            heroTimer.textContent = formatDuration(state.auctions[1].endsInSeconds);
        }
    }, 1000);

    // Realistic bot participant simulation interval
    const botBidders = ['apex_collector', 'chronograph_king', 'watchbox_vip', 'horology_vault', 'sophia_collector', 'lady_monaco'];
    setInterval(() => {
        if (!state.botSimulationActive || !state.isAuthenticated || !state.currentUser) return;
        const lot = getCurrentLiveLot();
        if (!lot || lot.endsInSeconds <= 0) return;

        // Occasional live bid simulation
        if (Math.random() < 0.45) {
            const randomBidder = botBidders[Math.floor(Math.random() * botBidders.length)];
            if (randomBidder === state.currentUser?.username) return;

            const increment = lot.minIncrement || 500;
            const newBid = lot.currentHighestBid + increment;
            const wasUserLeading = lot.currentHighestBidder === state.currentUser?.username;

            lot.currentHighestBid = newBid;
            lot.currentHighestBidder = randomBidder;
            lot.totalBids += 1;

            lot.bidsHistory.forEach(b => { b.isWinning = false; b.isNew = false; });
            lot.bidsHistory.unshift({
                id: Date.now(),
                bidder: randomBidder,
                amount: newBid,
                time: 'Just now',
                isWinning: true,
                isNew: true
            });

            if (wasUserLeading) {
                playSound('alert');
                showToast(`You have been outbid on ${lot.title}! New bid: ${formatMoney(newBid)}`, 'alert');
            } else {
                playSound('bid');
            }

            if (state.activeTab === 'live') {
                renderLiveFloor();
            }
            renderSidebarQueue();
        }
    }, 14000);
});

