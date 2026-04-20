const themes = [
    { id: 'pijama', name: 'Evde Pijama Partisi' },
    { id: 'yilbasi', name: 'Yılbaşı Yemeği' },
    { id: 'balo', name: 'Balo' },
    { id: 'yaz', name: 'Yaz Partisi' },
    { id: 'dogumgunu', name: 'Doğum Günü Partisi' },
    { id: 'konser', name: 'Konser' }
];

// Complex modular SVG paths mapped to items
const svgPaths = {
    hair: {
        short: 'M35 20 Q50 5 65 20 C 70 30, 70 40, 65 50 C 60 60, 50 60, 50 60 C 50 60, 40 60, 35 50 C 30 40, 30 30, 35 20 Z',
        long: 'M35 15 Q50 -5 65 15 C 75 40, 75 80, 65 110 C 55 110, 45 110, 35 110 C 25 80, 25 40, 35 15 Z',
        bun: 'M40 15 Q50 -5 60 15 C 65 25, 50 35, 50 35 C 50 35, 35 25, 40 15 Z M42 5 C 45 -5, 55 -5, 58 5 C 60 15, 40 15, 42 5 Z',
        wavy: 'M30 25 Q50 -10 70 25 C 80 50, 75 90, 70 100 C 60 105, 40 105, 30 100 C 25 90, 20 50, 30 25 Z'
    },
    top: {
        tshirt: 'M38 35 C 44 30, 56 30, 62 35 L62 60 L38 60 Z',
        crop: 'M38 35 C 44 30, 56 30, 62 35 L60 50 L40 50 Z',
        dressTop: 'M38 35 C 44 30, 56 30, 62 35 L60 60 L40 60 Z',
        blouse: 'M38 35 C 44 35, 56 35, 62 35 L64 55 L36 55 Z'
    },
    bottom: {
        pants: 'M40 60 L60 60 C 62 80, 62 135, 60 140 L52 140 L50 90 L48 140 L40 140 C 38 135, 38 80, 40 60 Z',
        widePants: 'M40 60 L60 60 C 65 80, 70 135, 70 140 L52 140 L50 90 L48 140 L30 140 C 30 135, 35 80, 40 60 Z',
        miniSkirt: 'M40 60 L60 60 C 63 70, 65 80, 62 85 L38 85 C 35 80, 37 70, 40 60 Z',
        tutu: 'M40 60 L60 60 Q 80 80, 75 95 Q 50 100, 25 95 Q 20 80, 40 60 Z',
        dressBotLong: 'M40 60 L60 60 Q 80 100, 70 140 L30 140 Q 20 100, 40 60 Z',
        dressBotShort: 'M40 60 L60 60 C 65 75, 60 90, 58 95 L42 95 C 40 90, 35 75, 40 60 Z'
    },
    shoes: {
        sneaker: 'M35 135 C 40 132, 45 135, 45 142 L35 142 Z M55 135 C 60 132, 65 135, 65 142 L55 142 Z',
        heels: 'M38 135 C 42 135, 45 140, 45 145 L43 145 L43 140 C 40 140, 38 142, 38 145 L36 145 Z M55 135 C 59 135, 62 140, 62 145 L60 145 L60 140 C 57 140, 55 142, 55 145 L53 145 Z',
        boots: 'M35 110 L45 110 L45 142 L35 142 Z M55 110 L65 110 L65 142 L55 142 Z',
        slippers: 'M35 138 C 40 135, 45 138, 45 142 L35 142 Z M55 138 C 60 135, 65 138, 65 142 L55 142 Z'
    },
    acc: {
        necklace: 'M42 42 Q 50 50, 58 42 L50 50 Z',
        glasses: 'M40 22 L46 22 L46 26 L40 26 Z M54 22 L60 22 L60 26 L54 26 Z M46 24 L54 24',
        hat: 'M30 15 L70 15 C 65 5, 35 5, 30 15 Z',
        party: 'M45 5 L55 5 L50 -15 Z',
        sleep: 'M38 22 C 45 20, 55 20, 62 22 L62 28 C 55 26, 45 26, 38 28 Z',
        headphones: 'M36 25 Q 50 0, 64 25 C 64 28, 62 30, 62 25 Q 50 5, 38 25 C 38 30, 36 28, 36 25 Z'
    }
};

const items = [
    { id: 1, name: "Sarı Kısa Küt", category: "Saç", price: 100, tags: ["Sokak Modası", "Yaz Partisi"], pType: "short", pCat: "hair", colorClass: "color-hair-blonde" },
    { id: 2, name: "Siyah Uzun", category: "Saç", price: 150, tags: ["Konser", "Balo", "Yılbaşı Yemeği"], pType: "long", pCat: "hair", colorClass: "color-hair-black" },
    { id: 3, name: "Zarif Topuz", category: "Saç", price: 200, tags: ["Balo", "Yılbaşı Yemeği"], pType: "bun", pCat: "hair", colorClass: "color-hair-brown" },
    { id: 4, name: "Kızıl Dalga", category: "Saç", price: 180, tags: ["Doğum Günü Partisi", "Konser"], pType: "wavy", pCat: "hair", colorClass: "color-hair-red" },
    { id: 5, name: "Kırmızı Balo", category: "Elbise", price: 600, tags: ["Balo", "Yılbaşı Yemeği"], pType: ["dressTop", "dressBotLong"], pCat: ["top", "bottom"], colorClass: "color-top-red color-bot-red" },
    { id: 6, name: "Yazlık Çiçekli", category: "Elbise", price: 300, tags: ["Yaz Partisi", "Doğum Günü Partisi"], pType: ["dressTop", "dressBotShort"], pCat: ["top", "bottom"], colorClass: "color-top-yellow color-bot-yellow" },
    { id: 7, name: "Gümüş Pullu", category: "Elbise", price: 500, tags: ["Konser", "Yılbaşı Yemeği"], pType: ["dressTop", "miniSkirt"], pCat: ["top", "bottom"], colorClass: "color-top-silver color-bot-silver" },
    { id: 8, name: "Siyah Mini", category: "Elbise", price: 400, tags: ["Balo", "Sokak Modası"], pType: ["dressTop", "miniSkirt"], pCat: ["top", "bottom"], colorClass: "color-top-black color-bot-black" },
    { id: 9, name: "Pijama Üstü", category: "T-shirt", price: 150, tags: ["Evde Pijama Partisi"], pType: "tshirt", pCat: "top", colorClass: "color-top-blue" },
    { id: 10, name: "Rock Tişörtü", category: "T-shirt", price: 200, tags: ["Konser", "Sokak Modası"], pType: "tshirt", pCat: "top", colorClass: "color-top-dark" },
    { id: 11, name: "Şık Bluz", category: "T-shirt", price: 250, tags: ["Doğum Günü Partisi"], pType: "blouse", pCat: "top", colorClass: "color-top-pink" },
    { id: 12, name: "Mor Crop", category: "T-shirt", price: 180, tags: ["Yaz Partisi", "Sokak Modası"], pType: "crop", pCat: "top", colorClass: "color-top-purple" },
    { id: 13, name: "Pijama Altı", category: "Pantolon", price: 150, tags: ["Evde Pijama Partisi"], pType: "pants", pCat: "bottom", colorClass: "color-bot-blue" },
    { id: 14, name: "Yırtık Kot", category: "Pantolon", price: 250, tags: ["Konser", "Sokak Modası"], pType: "pants", pCat: "bottom", colorClass: "color-bot-jeans" },
    { id: 15, name: "Kumaş Pantolon", category: "Pantolon", price: 350, tags: ["Yılbaşı Yemeği", "Balo"], pType: "pants", pCat: "bottom", colorClass: "color-bot-emerald" },
    { id: 16, name: "Kot Mini Etek", category: "Etek", price: 200, tags: ["Yaz Partisi", "Sokak Modası"], pType: "miniSkirt", pCat: "bottom", colorClass: "color-bot-navy" },
    { id: 17, name: "Tül Etek", category: "Etek", price: 300, tags: ["Doğum Günü Partisi"], pType: "tutu", pCat: "bottom", colorClass: "color-bot-pink" },
    { id: 18, name: "Tavşan Terlik", category: "Ayakkabı", price: 100, tags: ["Evde Pijama Partisi"], pType: "slippers", pCat: "shoes", colorClass: "color-shoe-white" },
    { id: 19, name: "Stiletto", category: "Ayakkabı", price: 400, tags: ["Balo", "Yılbaşı Yemeği", "Doğum Günü Partisi"], pType: "heels", pCat: "shoes", colorClass: "color-shoe-black" },
    { id: 20, name: "Sneaker", category: "Ayakkabı", price: 300, tags: ["Konser", "Sokak Modası"], pType: "sneaker", pCat: "shoes", colorClass: "color-shoe-white" },
    { id: 21, name: "Sandalet", category: "Ayakkabı", price: 200, tags: ["Yaz Partisi"], pType: "slippers", pCat: "shoes", colorClass: "color-shoe-brown" },
    { id: 22, name: "Safir Kolye", category: "Takı/Aksesuar", price: 500, tags: ["Balo", "Yılbaşı Yemeği"], pType: "necklace", pCat: "acc", colorClass: "color-top-blue" },
    { id: 23, name: "Gözlük", category: "Takı/Aksesuar", price: 150, tags: ["Yaz Partisi", "Sokak Modası"], pType: "glasses", pCat: "acc", colorClass: "color-top-black" },
    { id: 24, name: "Parti Şapkası", category: "Takı/Aksesuar", price: 50, tags: ["Doğum Günü Partisi"], pType: "party", pCat: "acc", colorClass: "color-top-red" },
    { id: 25, name: "Uyku Bandı", category: "Takı/Aksesuar", price: 80, tags: ["Evde Pijama Partisi"], pType: "sleep", pCat: "acc", colorClass: "color-top-white" },
    { id: 26, name: "Kulaklık", category: "Takı/Aksesuar", price: 250, tags: ["Konser", "Sokak Modası"], pType: "headphones", pCat: "acc", colorClass: "color-top-red" },
    { id: 27, name: "Neon Crop", category: "T-shirt", price: 220, tags: ["Konser", "Sokak Modası"], pType: "crop", pCat: "top", colorClass: "color-top-green" },
    { id: 28, name: "Geniş Paça", category: "Pantolon", price: 300, tags: ["Balo", "Yılbaşı Yemeği"], pType: "widePants", pCat: "bottom", colorClass: "color-bot-dark" },
    { id: 29, name: "Şık Şapka", category: "Takı/Aksesuar", price: 180, tags: ["Yaz Partisi", "Sokak Modası"], pType: "hat", pCat: "acc", colorClass: "color-top-black" },
    { id: 30, name: "Gelinlik", category: "Elbise", price: 800, tags: ["Balo"], pType: ["dressTop", "dressBotLong"], pCat: ["top", "bottom"], colorClass: "color-top-white color-bot-white" },
    { id: 31, name: "Çizme", category: "Ayakkabı", price: 350, tags: ["Konser", "Sokak Modası"], pType: "boots", pCat: "shoes", colorClass: "color-shoe-black" }
];

let state = {
    playerName: "Gigi",
    budget: 1000,
    inventory: [],
    equipped: { Saç: null, Elbise: null, 'T-shirt': null, Pantolon: null, Etek: null, Ayakkabı: null, 'Takı/Aksesuar': null },
    currentTheme: null
};

const bots = [
    { name: "Bot Ayşe", budget: 2000, inventory: [], equipped: {} },
    { name: "Bot Fatma", budget: 2000, inventory: [], equipped: {} }
];

// --- CORE FUNCTIONS ---
function generateMannequinSVG(equippedState, idPrefix = 'm') {
    let layerSVG = { hair: '', top: '', bottom: '', shoes: '', acc: '' };

    for (const cat in equippedState) {
        if (equippedState[cat]) {
            const item = items.find(i => i.id === equippedState[cat]);
            if (item) {
                if (Array.isArray(item.pCat)) {
                    item.pCat.forEach((c, index) => {
                        const pathD = svgPaths[c][item.pType[index]];
                        layerSVG[c] += `<path d="${pathD}" class="${item.colorClass.split(' ')[index]} ${c}"/>`;
                    });
                } else {
                    const pathD = svgPaths[item.pCat][item.pType];
                    layerSVG[item.pCat] += `<path d="${pathD}" class="${item.colorClass} ${item.pCat}"/>`;
                }
            }
        }
    }

    return `
    <svg viewBox="0 0 100 150" class="svg-mannequin" id="${idPrefix}">
        <defs>
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fca5a5" />
                <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
            <linearGradient id="leg-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#f87171" />
                <stop offset="50%" stop-color="#fca5a5" />
                <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
        </defs>

        <!-- Base Body -->
        <!-- Legs -->
        <path d="M42 85 C 45 100, 42 140, 42 140 L48 140 C 48 140, 52 100, 50 85 Z" fill="url(#leg-shading)" />
        <path d="M58 85 C 55 100, 58 140, 58 140 L52 140 C 52 140, 48 100, 50 85 Z" fill="url(#leg-shading)" />

        <!-- Torso -->
        <path d="M42 35 C 38 45, 40 65, 42 85 C 50 90, 50 90, 58 85 C 60 65, 62 45, 58 35 C 50 35, 50 35, 42 35 Z" fill="url(#skin)" />
        <!-- Arms -->
        <path d="M42 35 Q 30 55, 35 75 Q 40 60, 44 45 Z" fill="url(#skin)" />
        <path d="M58 35 Q 70 55, 65 75 Q 60 60, 56 45 Z" fill="url(#skin)" />
        <!-- Neck -->
        <rect x="47" y="28" width="6" height="8" fill="url(#skin)" />
        <!-- Head -->
        <ellipse cx="50" cy="18" rx="11" ry="14" fill="url(#skin)" />

        <!-- Hair Layer (Under Face) -->
        ${layerSVG.hair}

        <!-- Face Elements -->
        <path d="M45 15 Q47 13 49 15 Q47 16 45 15" fill="#fff" stroke="#000" stroke-width="0.3" />
        <circle cx="47" cy="14.8" r="0.8" fill="#000" />
        <path d="M51 15 Q53 13 55 15 Q53 16 51 15" fill="#fff" stroke="#000" stroke-width="0.3" />
        <circle cx="53" cy="14.8" r="0.8" fill="#000" />
        <path d="M48 22 Q50 24 52 22 Z" fill="#db2777" />
        <path d="M49.5 18 L49.5 20 L50.5 20" stroke="#b91c1c" fill="transparent" stroke-width="0.5" />

        <!-- Clothing & Accessories -->
        ${layerSVG.top}
        ${layerSVG.bottom}
        ${layerSVG.shoes}
        ${layerSVG.acc}
    </svg>
    `;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectRandomTheme() {
    state.currentTheme = themes[Math.floor(Math.random() * themes.length)];
    document.getElementById('current-theme-display').textContent = state.currentTheme.name;
    document.getElementById('podium-theme-display').textContent = state.currentTheme.name;
}

function updateBudgetDisplay() {
    document.querySelectorAll('.budget-display span').forEach(el => el.textContent = state.budget);
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// --- NAVIGATION & SHOP LOGIC ---
function goToBuilding(buildingName) {
    if (buildingName === 'Ev') {
        renderWardrobe();
        showScreen('screen-wardrobe');
    } else if (buildingName === 'Yarışma Salonu') {
        setupPodium();
        document.getElementById('btn-judge').style.display = 'inline-block';
        document.getElementById('live-scorecards').classList.add('hidden');
        showScreen('screen-podium');
    } else {
        document.getElementById('shop-title').textContent = buildingName;
        let categories = [];
        if(buildingName === 'Kıyafet Dükkanı') categories = ['Elbise', 'T-shirt', 'Pantolon', 'Etek'];
        if(buildingName === 'Aksesuarcı') categories = ['Takı/Aksesuar'];
        if(buildingName === 'Kuaför') categories = ['Saç'];
        if(buildingName === 'Ayakkabıcı') categories = ['Ayakkabı'];

        renderShop(categories);
        showScreen('screen-shop');
    }
}
window.goToBuilding = goToBuilding;

function renderShop(categoriesToShow) {
    const grid = document.getElementById('shop-items');
    grid.innerHTML = '';
    const filtered = items.filter(i => categoriesToShow.includes(i.category));

    filtered.forEach(item => {
        const isOwned = state.inventory.includes(item.id);
        const canAfford = state.budget >= item.price;
        const card = document.createElement('div');
        card.className = 'item-card';
        let fakeEquip = {}; fakeEquip[item.category] = item.id;

        card.innerHTML = `
            <div class="svg-icon-container">${generateMannequinSVG(fakeEquip, `mini-${item.id}`)}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">💎 ${item.price} TL</div>
            <button class="btn-action btn-buy" ${isOwned ? 'disabled' : (canAfford ? '' : 'disabled')} onclick="buyItem(${item.id}, '${categoriesToShow.join(',')}')">
                ${isOwned ? 'SAHİPSİN' : 'SATIN AL'}
            </button>
        `;
        grid.appendChild(card);
    });
}

function buyItem(id, catsStr) {
    const item = items.find(i => i.id === id);
    if (state.budget >= item.price && !state.inventory.includes(id)) {
        state.budget -= item.price;
        state.inventory.push(id);
        updateBudgetDisplay();
        renderShop(catsStr.split(','));
        showToast('Eşya satın alındı!', 'success');
    } else {
        showToast('Yetersiz bakiye!', 'error');
    }
}
window.buyItem = buyItem;

let currentWardrobeCategory = 'Tümü';
function renderWardrobe() {
    document.getElementById('wardrobe-character-container').innerHTML = generateMannequinSVG(state.equipped, 'wardrobe-mannequin');

    const myItemsTotal = items.filter(i => state.inventory.includes(i.id));
    const cats = ['Tümü', ...new Set(myItemsTotal.map(i => i.category))];
    const catContainer = document.getElementById('inventory-categories');

    catContainer.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${currentWardrobeCategory === cat ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = () => { currentWardrobeCategory = cat; renderWardrobe(); };
        catContainer.appendChild(btn);
    });

    const grid = document.getElementById('inventory-items');
    grid.innerHTML = '';

    let myItems = currentWardrobeCategory === 'Tümü' ? myItemsTotal : myItemsTotal.filter(i => i.category === currentWardrobeCategory);

    if(myItemsTotal.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;">Henüz hiç eşyan yok. Sokağa çıkıp dükkanları gez!</p>';
        return;
    }

    myItems.forEach(item => {
        const isEquipped = state.equipped[item.category] === item.id;
        const card = document.createElement('div');
        card.className = 'item-card inventory-item';
        let fakeEquip = {}; fakeEquip[item.category] = item.id;

        card.innerHTML = `
            <div class="svg-icon-container">${generateMannequinSVG(fakeEquip, `inv-${item.id}`)}</div>
            <div class="item-name">${item.name}</div>
            <button class="btn-action btn-wear" onclick="toggleEquip(${item.id})" style="${isEquipped ? 'background:var(--primary);color:white;' : ''}">
                ${isEquipped ? 'ÇIKAR' : 'GİY'}
            </button>
        `;
        grid.appendChild(card);
    });
}

function toggleEquip(id) {
    const item = items.find(i => i.id === id);
    if (state.equipped[item.category] === id) {
        state.equipped[item.category] = null;
    } else {
        if (item.category === 'Elbise') { state.equipped['T-shirt'] = state.equipped['Pantolon'] = state.equipped['Etek'] = null; }
        else if (['T-shirt', 'Pantolon', 'Etek'].includes(item.category)) {
            state.equipped['Elbise'] = null;
            if(item.category === 'Pantolon') state.equipped['Etek'] = null;
            if(item.category === 'Etek') state.equipped['Pantolon'] = null;
        }
        state.equipped[item.category] = id;
    }
    renderWardrobe();
}
window.toggleEquip = toggleEquip;

// --- BOT & SCORING ---
function simulateBotShopping(bot) {
    bot.inventory = [];
    bot.equipped = { Saç: null, Elbise: null, 'T-shirt': null, Pantolon: null, Etek: null, Ayakkabı: null, 'Takı/Aksesuar': null };
    let tempB = bot.budget;
    let match = items.filter(i => i.tags.includes(state.currentTheme.name)).sort(() => Math.random() - 0.5);

    match.forEach(it => {
        if(tempB >= it.price && !bot.equipped[it.category]) {
             if(it.category === 'Elbise' && (bot.equipped['T-shirt'] || bot.equipped['Pantolon'] || bot.equipped['Etek'])) return;
             if(['T-shirt', 'Pantolon', 'Etek'].includes(it.category) && bot.equipped['Elbise']) return;
             tempB -= it.price; bot.inventory.push(it.id); bot.equipped[it.category] = it.id;
        }
    });

    ["Saç", "Elbise", "Ayakkabı"].forEach(cat => {
        if(!bot.equipped[cat]) {
            if (cat === 'Elbise' && (bot.equipped['T-shirt'] || bot.equipped['Pantolon'] || bot.equipped['Etek'])) return;
            const avail = items.filter(i => i.category === cat && i.price <= tempB);
            if(avail.length > 0) {
                const p = avail[Math.floor(Math.random() * avail.length)];
                tempB -= p.price; bot.inventory.push(p.id); bot.equipped[cat] = p.id;
            }
        }
    });
}

function calculateScore(equippedObj, themeName) {
    let score = 0;
    Object.values(equippedObj).forEach(itemId => {
        if(itemId) {
            const item = items.find(i => i.id === itemId);
            score += (item && item.tags.includes(themeName)) ? 1.5 : 0.5;
        }
    });
    score += Math.random() * 2;
    return Math.min(Math.round(score * 10) / 10, 10).toFixed(1);
}

function setupPodium() {
    const container = document.getElementById('podium-contestants');
    container.innerHTML = '';

    const arr = [ {n: state.playerName, s: state.equipped}, ...bots.map(b => { simulateBotShopping(b); return {n: b.name, s: b.equipped}; }) ];

    arr.forEach((c, i) => {
        const div = document.createElement('div');
        div.className = 'contestant';
        div.style.setProperty('--target-x', `${(i - 1) * 250}px`); // Distribute on runway
        div.innerHTML = `<div class="c-mannequin">${generateMannequinSVG(c.s, `pod-${i}`)}</div><div class="c-name">${c.n}</div>`;
        container.appendChild(div);
    });
}

async function startJudgingSequence() {
    document.querySelectorAll('.contestant').forEach((c, i) => {
        setTimeout(() => c.classList.add('walk-in'), i * 1000); // Stagger walks
    });

    document.getElementById('btn-judge').style.display = 'none';

    // Wait for walks to finish
    await new Promise(r => setTimeout(r, 4500));

    const judges = [
        {name: "Cemil", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cemil&backgroundColor=ffb6c1"},
        {name: "Hakan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakan&backgroundColor=b0e0e6"},
        {name: "Ivana", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivana&backgroundColor=ffd700"}
    ];

    const cArr = [
        { name: state.playerName, state: state.equipped, isPlayer: true },
        ...bots.map(b => ({ name: b.name, state: b.equipped, isPlayer: false }))
    ];
    cArr.forEach(c => c.score = parseFloat(calculateScore(c.state, state.currentTheme.name)));

    const sc = document.getElementById('live-scorecards');
    sc.classList.remove('hidden'); sc.innerHTML = '';

    for(let j=0; j<judges.length; j++) {
        await new Promise(r => setTimeout(r, 800));
        const card = document.createElement('div');
        card.className = 'score-card';
        const js = (Math.random() * 2 + 7).toFixed(1);
        card.innerHTML = `<img src="${judges[j].avatar}" style="width:30px; border-radius:50%; vertical-align:middle;"> ${judges[j].name}: ${js}/10`;
        sc.appendChild(card);
    }

    await new Promise(r => setTimeout(r, 1500));
    showResults(cArr);
}
window.startJudgingSequence = startJudgingSequence;

function showResults(cArr) {
    showScreen('screen-results');
    cArr.sort((a,b) => b.score - a.score);
    const winner = cArr[0];

    document.getElementById('winner-announcement').innerHTML = `
        <div style="width:200px; height:300px; margin-bottom:20px;">${generateMannequinSVG(winner.state, 'win-svg')}</div>
        <h3>${winner.isPlayer ? 'Tebrikler!' : 'Kazanan:'} ${winner.name} 👑</h3>
        <p style="color:var(--text-muted); margin-top:10px;">Puan: ${winner.score}/10</p>
    `;

    const lb = document.getElementById('leaderboard');
    lb.innerHTML = '';
    cArr.forEach((c, i) => {
        lb.innerHTML += `<div class="l-card ${i===0?'winner':''}"><div><span style="display:inline-block;width:30px;color:gray">#${i+1}</span><span>${c.name}</span></div><div class="score-num">${c.score} / 10</div></div>`;
    });

    if(winner.isPlayer) { state.budget += 1000; fireConfetti(); }
}

function fireConfetti() {
    const c = document.getElementById('confetti-container'); c.innerHTML = '';
    const cols = ['#ff007f', '#00f2fe', '#ffd700', '#ffffff'];
    for(let i=0; i<100; i++) {
        const d = document.createElement('div');
        d.className = 'confetti';
        d.style.left = Math.random() * 100 + 'vw';
        d.style.backgroundColor = cols[Math.floor(Math.random() * cols.length)];
        d.style.animationDuration = (Math.random() * 2 + 2) + 's';
        d.style.animationDelay = (Math.random() * 2) + 's';
        c.appendChild(d);
    }
    setTimeout(() => c.innerHTML = '', 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('initial-character-preview').innerHTML = generateMannequinSVG({});
    document.getElementById('btn-start-game').addEventListener('click', () => {
        const n = document.getElementById('player-name').value;
        state.playerName = n.trim() !== "" ? n : "Gigi";
        selectRandomTheme();
        showScreen('screen-theme');
    });
    document.getElementById('btn-judge').addEventListener('click', startJudgingSequence);
    document.getElementById('btn-next-round').addEventListener('click', () => {
        selectRandomTheme();
        document.getElementById('confetti-container').innerHTML = '';
        showScreen('screen-theme');
    });
});
