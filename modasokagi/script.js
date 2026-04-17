// --- DATABASE & STATE ---
const themes = [
    { id: 'pijama', name: 'Evde Pijama Partisi' },
    { id: 'yilbasi', name: 'Yılbaşı Yemeği' },
    { id: 'balo', name: 'Balo' },
    { id: 'yaz', name: 'Yaz Partisi' },
    { id: 'dogumgunu', name: 'Doğum Günü Partisi' },
    { id: 'konser', name: 'Konser' }
];

const items = [
    { id: 1, name: "Sarı Kısa Küt", category: "Saç", price: 100, tags: ["Sokak Modası", "Yaz Partisi"], cssClass: "s-sarikisa" },
    { id: 2, name: "Siyah Uzun", category: "Saç", price: 150, tags: ["Konser", "Balo", "Yılbaşı Yemeği"], cssClass: "s-siyahuzun" },
    { id: 3, name: "Zarif Topuz", category: "Saç", price: 200, tags: ["Balo", "Yılbaşı Yemeği"], cssClass: "s-kahvetopuz" },
    { id: 4, name: "Kızıl Dalga", category: "Saç", price: 180, tags: ["Doğum Günü Partisi", "Konser"], cssClass: "s-kizildalga" },
    { id: 5, name: "Göz Alıcı Kırmızı Balo", category: "Elbise", price: 600, tags: ["Balo", "Yılbaşı Yemeği"], cssClass: "c-kirmizi-balo" },
    { id: 6, name: "Papatyalı Yazlık", category: "Elbise", price: 300, tags: ["Yaz Partisi", "Doğum Günü Partisi"], cssClass: "c-yazlik-cicekli" },
    { id: 7, name: "Gümüş Pullu", category: "Elbise", price: 500, tags: ["Konser", "Yılbaşı Yemeği"], cssClass: "c-parlak-konser" },
    { id: 8, name: "Klasik Siyah Mini", category: "Elbise", price: 400, tags: ["Balo", "Sokak Modası"], cssClass: "c-siyah-mini" },
    { id: 9, name: "Bulutlu Pijama Üstü", category: "T-shirt", price: 150, tags: ["Evde Pijama Partisi"], cssClass: "c-pijama-ustu" },
    { id: 10, name: "Rock Star Tişörtü", category: "T-shirt", price: 200, tags: ["Konser", "Sokak Modası"], cssClass: "c-rock-tshirt" },
    { id: 11, name: "Pembe Şık Bluz", category: "T-shirt", price: 250, tags: ["Doğum Günü Partisi"], cssClass: "c-sik-bluz" },
    { id: 12, name: "Mor Crop Top", category: "T-shirt", price: 180, tags: ["Yaz Partisi", "Sokak Modası"], cssClass: "c-krop-ust" },
    { id: 13, name: "Rahat Pijama Altı", category: "Pantolon", price: 150, tags: ["Evde Pijama Partisi"], cssClass: "c-pijama-alti" },
    { id: 14, name: "Yırtık Bol Kot", category: "Pantolon", price: 250, tags: ["Konser", "Sokak Modası"], cssClass: "c-yirtik-kot" },
    { id: 15, name: "Zümrüt Kumaş", category: "Pantolon", price: 350, tags: ["Yılbaşı Yemeği", "Balo"], cssClass: "c-klasik-pantolon" },
    { id: 16, name: "Koyu Kot Mini", category: "Etek", price: 200, tags: ["Yaz Partisi", "Sokak Modası"], cssClass: "c-mini-etek" },
    { id: 17, name: "Pembe Tül Etek", category: "Etek", price: 300, tags: ["Doğum Günü Partisi"], cssClass: "c-tullu-etek" },
    { id: 18, name: "Tavşan Terlik", category: "Ayakkabı", price: 100, tags: ["Evde Pijama Partisi"], cssClass: "c-pofuduk-terlik" },
    { id: 19, name: "Siyah Stiletto", category: "Ayakkabı", price: 400, tags: ["Balo", "Yılbaşı Yemeği", "Doğum Günü Partisi"], cssClass: "c-topuklu" },
    { id: 20, name: "Beyaz Sneaker", category: "Ayakkabı", price: 300, tags: ["Konser", "Sokak Modası"], cssClass: "c-spor" },
    { id: 21, name: "Deri Sandalet", category: "Ayakkabı", price: 200, tags: ["Yaz Partisi"], cssClass: "c-sandalet" },
    { id: 22, name: "Safir Kolye", category: "Takı/Aksesuar", price: 500, tags: ["Balo", "Yılbaşı Yemeği"], cssClass: "c-elmas-kolye" },
    { id: 23, name: "Siyah Gözlük", category: "Takı/Aksesuar", price: 150, tags: ["Yaz Partisi", "Sokak Modası"], cssClass: "c-gunes-gozlugu" },
    { id: 24, name: "Doğum Günü Şapkası", category: "Takı/Aksesuar", price: 50, tags: ["Doğum Günü Partisi"], cssClass: "c-parti-sapkasi" },
    { id: 25, name: "Uyku Bandı", category: "Takı/Aksesuar", price: 80, tags: ["Evde Pijama Partisi"], cssClass: "c-uyku-bandi" },
    { id: 26, name: "Kırmızı Kulaklık", category: "Takı/Aksesuar", price: 250, tags: ["Konser", "Sokak Modası"], cssClass: "c-kulaklik" }
];

let state = {
    playerName: "Gigi",
    budget: 1000,
    inventory: [], // array of item IDs
    equipped: {
        Saç: null, Elbise: null, 'T-shirt': null, Pantolon: null, Etek: null, Ayakkabı: null, 'Takı/Aksesuar': null
    },
    currentTheme: null,
    currentCategory: 'Tümü'
};

const bots = [
    { name: "Bot Ayşe", budget: 1500, inventory: [], equipped: {} },
    { name: "Bot Fatma", budget: 1500, inventory: [], equipped: {} }
];

// --- CORE FUNCTIONS ---

function generateMannequinSVG(equippedState, idPrefix = 'm') {
    // Collect classes
    let classes = ['svg-mannequin'];
    for (const cat in equippedState) {
        if (equippedState[cat]) {
            const item = items.find(i => i.id === equippedState[cat]);
            if(item) classes.push(item.cssClass);
        }
    }

    return `
    <svg viewBox="0 0 100 150" class="${classes.join(' ')}" id="${idPrefix}">
        <defs>
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fca5a5" />
                <stop offset="100%" stop-color="#f87171" />
            </linearGradient>
        </defs>
        <!-- Body Base -->
        <path d="M40 30 Q50 40 60 30 L65 60 L55 90 L60 140 L50 140 L50 90 L40 140 L30 140 L35 90 L25 60 Z" fill="url(#skin)" />
        <!-- Head -->
        <circle cx="50" cy="20" r="12" fill="url(#skin)" />
        <!-- Default Face -->
        <path d="M46 18 Q48 20 50 18 M54 18 Q56 20 58 18" stroke="#000" fill="transparent" />
        <path d="M48 25 Q50 27 52 25" stroke="#db2777" fill="transparent" stroke-width="1.5" />
        
        <!-- Dynamic Layers based on CSS classes -->
        <!-- Hair layer -->
        <path class="hair" d="M38 10 Q50 0 62 10 Q65 25 50 25 Q35 25 38 10 Z" fill="#4b5563" />
        
        <!-- Clothes layers (Top/Dress) -->
        <path class="top" d="M35 35 L65 35 L60 60 L40 60 Z" fill="#e5e7eb" />
        
        <!-- Bottom layer (Pants/Skirt) -->
        <path class="bottom" d="M40 60 L60 60 L65 95 L35 95 Z" fill="transparent" />
        
        <!-- Shoes layer -->
        <path class="shoes" d="M30 135 L40 135 L40 140 L30 140 Z M50 135 L60 135 L60 140 L50 140 Z" fill="#9ca3af" />
        
        <!-- Accessory layer -->
        <path class="acc" d="" fill="transparent" />
    </svg>
    `;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectRandomTheme() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    state.currentTheme = themes[randomIndex];
    document.getElementById('current-theme-display').textContent = state.currentTheme.name;
    document.getElementById('podium-theme-display').textContent = state.currentTheme.name;
}

// --- UI UPDATERS ---

function updateBudgetDisplay() {
    document.getElementById('shop-budget').textContent = state.budget;
}

function renderShop() {
    const grid = document.getElementById('shop-items');
    grid.innerHTML = '';
    
    let filtered = items;
    if (state.currentCategory !== 'Tümü') {
        filtered = items.filter(i => i.category === state.currentCategory);
    }

    filtered.forEach(item => {
        const isOwned = state.inventory.includes(item.id);
        const canAfford = state.budget >= item.price;
        
        const card = document.createElement('div');
        card.className = 'item-card shop-item';
        
        // Mini preview of the item
        let fakeEquip = {}; fakeEquip[item.category] = item.id;
        const miniSvg = generateMannequinSVG(fakeEquip, `mini-${item.id}`);

        card.innerHTML = `
            <div class="svg-icon-container">${miniSvg}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">💎 ${item.price} TL</div>
            <button class="btn-action btn-buy" 
                ${isOwned ? 'disabled' : (canAfford ? '' : 'disabled')}
                onclick="buyItem(${item.id})">
                ${isOwned ? 'SAHİPSİN' : 'SATIN AL'}
            </button>
        `;
        grid.appendChild(card);
    });
}

function renderCategories() {
    const cats = ['Tümü', ...new Set(items.map(i => i.category))];
    const container = document.getElementById('shop-categories');
    container.innerHTML = '';
    
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${state.currentCategory === cat ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = () => {
            state.currentCategory = cat;
            renderCategories();
            renderShop();
        };
        container.appendChild(btn);
    });
}

function renderWardrobe() {
    // Update Mannequin
    document.getElementById('wardrobe-character-container').innerHTML = generateMannequinSVG(state.equipped, 'wardrobe-mannequin');
    
    // Render Inventory Items
    const grid = document.getElementById('inventory-items');
    grid.innerHTML = '';
    
    const myItems = items.filter(i => state.inventory.includes(i.id));
    
    if(myItems.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">Henüz hiç eşyan yok. Boutique\'e git!</p>';
        return;
    }

    myItems.forEach(item => {
        const isEquipped = state.equipped[item.category] === item.id;
        
        const card = document.createElement('div');
        card.className = 'item-card inventory-item';
        
        let fakeEquip = {}; fakeEquip[item.category] = item.id;
        const miniSvg = generateMannequinSVG(fakeEquip, `inv-${item.id}`);

        card.innerHTML = `
            <div class="svg-icon-container">${miniSvg}</div>
            <div class="item-name">${item.name}</div>
            <button class="btn-action btn-wear ${isEquipped ? 'active-wear' : ''}" 
                onclick="toggleEquip(${item.id})"
                style="${isEquipped ? 'background:var(--primary); color:white;' : ''}">
                ${isEquipped ? 'ÇIKAR' : 'GİY'}
            </button>
        `;
        grid.appendChild(card);
    });
}

// --- ACTIONS ---

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function buyItem(id) {
    const item = items.find(i => i.id === id);
    if (state.budget >= item.price && !state.inventory.includes(id)) {
        state.budget -= item.price;
        state.inventory.push(id);
        updateBudgetDisplay();
        renderShop();
        showToast('Eşya satın alındı!', 'success');
    } else if (state.budget < item.price) {
        showToast('Yetersiz bakiye!', 'error');
    }
}

window.buyItem = buyItem; // Make globally accessible for onclick

function toggleEquip(id) {
    const item = items.find(i => i.id === id);
    if (state.equipped[item.category] === id) {
        state.equipped[item.category] = null; // Unequip
    } else {
        // Handle Dress vs Top/Bottom exclusivity roughly
        if (item.category === 'Elbise') {
            state.equipped['T-shirt'] = null;
            state.equipped['Pantolon'] = null;
            state.equipped['Etek'] = null;
        } else if (['T-shirt', 'Pantolon', 'Etek'].includes(item.category)) {
            state.equipped['Elbise'] = null;
            if(item.category === 'Pantolon') state.equipped['Etek'] = null;
            if(item.category === 'Etek') state.equipped['Pantolon'] = null;
        }
        state.equipped[item.category] = id;
    }
    renderWardrobe();
}

window.toggleEquip = toggleEquip;

// --- BOT LOGIC ---
function simulateBotShopping(bot) {
    bot.inventory = [];
    bot.equipped = { Saç: null, Elbise: null, 'T-shirt': null, Pantolon: null, Etek: null, Ayakkabı: null, 'Takı/Aksesuar': null };
    let tempBudget = bot.budget;
    
    // Bots try to buy items matching the theme
    let matchingItems = items.filter(i => i.tags.includes(state.currentTheme.name));
    // Shuffle
    matchingItems.sort(() => Math.random() - 0.5);

    matchingItems.forEach(item => {
        if(tempBudget >= item.price && !bot.equipped[item.category]) {
             // Basic dress/separates conflict check for bot
             if(item.category === 'Elbise' && (bot.equipped['T-shirt'] || bot.equipped['Pantolon'] || bot.equipped['Etek'])) return;
             if(['T-shirt', 'Pantolon', 'Etek'].includes(item.category) && bot.equipped['Elbise']) return;
             if(item.category === 'Pantolon' && bot.equipped['Etek']) return;
             if(item.category === 'Etek' && bot.equipped['Pantolon']) return;

             tempBudget -= item.price;
             bot.inventory.push(item.id);
             bot.equipped[item.category] = item.id;
        }
    });

    // Fill empty slots with random affordable items
    const categories = ["Saç", "Elbise", "Ayakkabı"];
    categories.forEach(cat => {
        if(!bot.equipped[cat]) {
            if (cat === 'Elbise' && (bot.equipped['T-shirt'] || bot.equipped['Pantolon'] || bot.equipped['Etek'])) {
                return;
            }
            const avail = items.filter(i => i.category === cat && i.price <= tempBudget);
            if(avail.length > 0) {
                const pick = avail[Math.floor(Math.random() * avail.length)];
                tempBudget -= pick.price;
                bot.inventory.push(pick.id);
                bot.equipped[cat] = pick.id;
            }
        }
    });
}

function calculateScore(equippedObj, themeName) {
    let score = 0;
    Object.values(equippedObj).forEach(itemId => {
        if(itemId) {
            const item = items.find(i => i.id === itemId);
            if(item && item.tags.includes(themeName)) {
                score += 30; // Theme match bonus
            } else {
                score += 10; // Base item score
            }
        }
    });
    // Add random factor for excitement (0-15)
    score += Math.floor(Math.random() * 16);
    return Math.min(score, 100); // Max 100
}

// --- PODIUM & JUDGING ANIMATIONS ---

function setupPodium() {
    const container = document.getElementById('podium-contestants');
    container.innerHTML = '';
    
    // Add Player
    container.appendChild(createContestantEl(state.playerName, 'podium-player', state.equipped));
    
    // Add Bots
    bots.forEach((bot, index) => {
        simulateBotShopping(bot);
        container.appendChild(createContestantEl(bot.name, `bot-${index}`, bot.equipped));
    });
}

function createContestantEl(name, idPrefix, equippedState) {
    const div = document.createElement('div');
    div.className = 'contestant';
    div.innerHTML = `
        <div class="c-mannequin">
            ${generateMannequinSVG(equippedState, `svg-${idPrefix}`)}
        </div>
        <div class="c-name">${name}</div>
    `;
    return div;
}

async function startJudgingSequence() {
    const btn = document.getElementById('btn-judge');
    btn.style.display = 'none';
    
    document.getElementById('screen-podium').classList.add('dim-background');
    document.getElementById('spotlight-layer').classList.remove('hidden');

    const judges = [
        {name: "Cemil", color: "#ffb6c1", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cemil&backgroundColor=ffb6c1"},
        {name: "Hakan", color: "#b0e0e6", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakan&backgroundColor=b0e0e6"},
        {name: "Ivana", color: "#ffd700", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivana&backgroundColor=ffd700"}
    ];

    const contestants = [
        { idPrefix: 'player', name: state.playerName, state: state.equipped, isPlayer: true },
        ...bots.map((b,i) => ({ idPrefix: `bot-${i}`, name: b.name, state: b.equipped, isPlayer: false }))
    ];

    // Calculate final scores
    contestants.forEach(c => {
        c.score = calculateScore(c.state, state.currentTheme.name);
    });

    const scoreboards = document.getElementById('live-scorecards');
    scoreboards.classList.remove('hidden');
    scoreboards.innerHTML = '';

    // Dramatic pauses and score reveals
    for(let j=0; j<judges.length; j++) {
        await sleep(1000);
        const card = document.createElement('div');
        card.className = 'score-card';
        card.innerHTML = `<img src="${judges[j].avatar}" style="width:30px; border-radius:50%; vertical-align:middle; margin-right:10px;"> ${judges[j].name} Puanlıyor...`;
        scoreboards.appendChild(card);
        
        await sleep(1200);
        // Distribute portions of the final score to simulate judges
        card.innerHTML = `<img src="${judges[j].avatar}" style="width:30px; border-radius:50%; vertical-align:middle; margin-right:10px;"> ${judges[j].name}: EVET!`;
    }

    await sleep(1500);
    document.getElementById('spotlight-layer').classList.add('hidden');
    document.getElementById('screen-podium').classList.remove('dim-background');
    
    showResults(contestants);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showResults(contestants) {
    showScreen('screen-results');
    
    // Sort descending
    contestants.sort((a,b) => b.score - a.score);
    const winner = contestants[0];

    // Winner Showcase
    const showcase = document.getElementById('winner-announcement');
    showcase.innerHTML = `
        <div style="width:200px; height:300px; margin-bottom:20px;">
            ${generateMannequinSVG(winner.state, 'winner-svg')}
        </div>
        <h3>${winner.isPlayer ? 'Tebrikler!' : 'Kazanan:'} ${winner.name} 👑</h3>
        <p style="color:var(--text-muted); margin-top:10px;">Puan: ${winner.score}</p>
    `;

    // Leaderboard
    const lb = document.getElementById('leaderboard');
    lb.innerHTML = '';
    contestants.forEach((c, index) => {
        const row = document.createElement('div');
        row.className = `l-card ${index === 0 ? 'winner' : ''}`;
        row.innerHTML = `
            <div>
                <span style="display:inline-block; width:30px; color:var(--text-muted)">#${index+1}</span>
                <span>${c.name}</span>
            </div>
            <div class="score-num">${c.score} Puan</div>
        `;
        lb.appendChild(row);
    });

    if(winner.isPlayer) {
        state.budget += 1000;
        fireConfetti();
    }
}

function fireConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#ff007f', '#00f2fe', '#ffd700', '#ffffff'];
    
    for(let i=0; i<100; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
        conf.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(conf);
    }
    
    setTimeout(() => { container.innerHTML = ''; }, 5000);
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // Set initial mannequin preview
    document.getElementById('initial-character-preview').innerHTML = generateMannequinSVG({});

    document.getElementById('btn-start-game').addEventListener('click', () => {
        const nameInput = document.getElementById('player-name').value;
        state.playerName = nameInput.trim() !== "" ? nameInput : "Gigi";
        selectRandomTheme();
        document.getElementById('current-theme-display').textContent = state.currentTheme.name;
        showScreen('screen-theme');
    });

    document.getElementById('btn-go-shop').addEventListener('click', () => {
        updateBudgetDisplay();
        renderCategories();
        renderShop();
        showScreen('screen-shop');
    });

    document.getElementById('btn-go-wardrobe').addEventListener('click', () => {
        renderWardrobe();
        showScreen('screen-wardrobe');
    });

    document.getElementById('btn-back-shop').addEventListener('click', () => {
        updateBudgetDisplay();
        renderShop();
        showScreen('screen-shop');
    });

    document.getElementById('btn-go-podium').addEventListener('click', () => {
        setupPodium();
        document.getElementById('btn-judge').style.display = 'inline-block';
        document.getElementById('live-scorecards').classList.add('hidden');
        showScreen('screen-podium');
    });

    document.getElementById('btn-judge').addEventListener('click', () => {
        startJudgingSequence();
    });

    document.getElementById('btn-next-round').addEventListener('click', () => {
        // Reset turn state
        selectRandomTheme();
        document.getElementById('current-theme-display').textContent = state.currentTheme.name;
        document.getElementById('confetti-container').innerHTML = '';
        showScreen('screen-theme');
    });
});