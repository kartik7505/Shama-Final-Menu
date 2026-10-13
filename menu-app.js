/**
 * SHAMA DELUXE RESTAURANT - COMPLETE RESPONSIVE MENU ENGINE
 * Light Cream, Soft Gold, and Warm Brown Theme
 * 
 * Preserves authentic dishes, prices, portion sizes, restaurant details,
 * and integrates food reveal video player with accessible modal interactions.
 */

// ==========================================================================
// 1. AUTHENTIC MENU DATA CATALOG
// ==========================================================================

const CATEGORIES = [
  { id: 'all', name: 'All Curations', icon: '✨' },
  { id: 'mughlai', name: 'Mughlai Curries', icon: '🍲' },
  { id: 'tandoori', name: 'Tandoor & Kebabs', icon: '🍢' },
  { id: 'breads', name: 'Roti & Breads', icon: '🫓' },
  { id: 'biryani', name: 'Royal Biryani', icon: '🍚' },
  { id: 'desserts', name: 'Desserts & Starters', icon: '🍮' }
];

const DISH_CATALOG = [
  {
    id: "butter-chicken",
    name: "Shama Butter Chicken Handi",
    category: "mughlai",
    diet: "non-veg",
    badge: "Chef's Pride",
    spice: 2,
    portions: [
      { id: "half", label: "Half Handi", price: 250 },
      { id: "full", label: "Full Handi", price: 500 }
    ],
    image: "images/shama_butter_chicken.jpg",
    video: "videos/butter-chicken.mp4",
    description: "Succulent boneless chicken pieces slow-simmered in rich velvety tomato-cashew puree with churned butter and roasted fenugreek (kasuri methi).",
    story: "Crafted since 1998 following our founder's secret spice bouquet. Prepared exclusively in heavy brass handis for an authentic melt-in-mouth royal texture.",
    pairing: "Pairs best with hot Rumali Roti or Garlic Naan."
  },
  {
    id: "kali-mirch",
    name: "Kali Mirch Chicken",
    category: "mughlai",
    diet: "non-veg",
    badge: "Signature",
    spice: 3,
    portions: [
      { id: "half", label: "Half Handi", price: 340 },
      { id: "full", label: "Full Handi", price: 490 }
    ],
    image: "images/shama_kali_mirch.jpg",
    video: "videos/butter-chicken.mp4",
    description: "Tender chicken steeped in freshly stone-ground Malabar black peppercorns, roasted white sesame, and rich cashew cream sauce.",
    story: "A Mughlai court favorite known for its warming spices and pepper heat balanced seamlessly by velvety dairy cream.",
    pairing: "Excellent with Butter Naan or steamed long-grain basmati."
  },
  {
    id: "malai-tikka",
    name: "Chicken Malai Tikka",
    category: "tandoori",
    diet: "non-veg",
    badge: "Charcoal Grill",
    spice: 1,
    portions: [
      { id: "half", label: "Half Plate (4 Pcs)", price: 300 },
      { id: "full", label: "Full Plate (8 Pcs)", price: 600 }
    ],
    image: "images/shama_malai_tikka.jpg",
    video: "videos/malai-tikka.mp4",
    description: "Mouth-melting chicken thigh cubes marinated overnight in hung curd, green cardamom, processed cheese, and fresh clotted cream.",
    story: "Skewered on iron rods and charred over blazing sal-wood charcoal in our traditional earthen clay tandoor.",
    pairing: "Served with mint-coriander dip and pickled lachha onions."
  },
  {
    id: "rumali-roti",
    name: "Shama Rumali Roti",
    category: "breads",
    diet: "veg",
    badge: "Fresh Hand-Tossed",
    spice: 0,
    portions: [
      { id: "standard", label: "Per Piece", price: 14 }
    ],
    image: "images/shama_rumali_roti.jpg",
    video: "videos/roti-naan.mp4",
    description: "Ultra-thin, paper-soft handkerchief bread tossed rhythmically into the air and baked on an inverted spherical dome kadhai.",
    story: "Traditional Awadhi artisan technique creating feather-light bread that absorbs thick handi gravies with perfection.",
    pairing: "The quintessential partner for Butter Chicken and Changezi."
  },
  {
    id: "shama-kheer",
    name: "Royal Shama Special Kheer",
    category: "desserts",
    diet: "veg",
    badge: "Royal Dessert",
    spice: 0,
    portions: [
      { id: "standard", label: "Per Bowl", price: 30 }
    ],
    image: "images/shama_kheer.jpg",
    video: "videos/desserts.mp4",
    description: "Slow-condensed buffalo whole milk and fragrant broken basmati, enriched with Kashmiri saffron, slivered almonds, and green cardamom.",
    story: "Simmered continuously on low flame for 4 hours until the milk naturally caramelizes into a thick, creamy golden ambrosia.",
    pairing: "Best enjoyed chilled after a spicy Mughlai feast."
  },
  {
    id: "mughlai-handi",
    name: "Authentic Mughlai Handi",
    category: "mughlai",
    diet: "non-veg",
    badge: "Royal Heritage",
    spice: 2,
    portions: [
      { id: "half", label: "Half Handi", price: 350 },
      { id: "full", label: "Full Handi", price: 600 }
    ],
    image: "images/shama_ceramic_butter_chicken.jpg",
    video: "videos/mughlai-handi.mp4",
    description: "Slow-braised chicken with mace, whole cinnamon, caramel brown onions (birista), and thick yogurt gravy finished with desi ghee.",
    story: "Re-created from ancestral handwritten recipes preserved across generations.",
    pairing: "Divine with Shahi Butter Naan."
  },
  {
    id: "paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    category: "mughlai",
    diet: "veg",
    badge: "Vegetarian Special",
    spice: 2,
    portions: [
      { id: "standard", label: "Full Plate", price: 220 }
    ],
    image: "images/dish_3_1791103054248.jpg",
    video: "videos/paneer-tikka.mp4",
    description: "Farm-fresh malai paneer cubes charred in tandoor, folded into a fragrant onion-tomato bhuna masala with crunchy capsicum.",
    story: "Marinated with stone-ground ajwain, roasted gram flour, and mustard oil for that authentic rustic Punjabi kick.",
    pairing: "Pairs wonderfully with Laccha Paratha."
  },
  {
    id: "dal-makhani",
    name: "Shama Bukhara Dal Makhani",
    category: "mughlai",
    diet: "veg",
    badge: "Overnight Simmered",
    spice: 1,
    portions: [
      { id: "standard", label: "Full Bowl", price: 140 }
    ],
    image: "images/hero_image_1791102967343.jpg",
    video: "videos/dal-makhani.mp4",
    description: "Whole black urad lentils and red kidney beans slow-cooked overnight over glowing charcoal with churned butter and organic cream.",
    story: "Over 16 hours of slow simmering produces the legendary silky smokiness without artificial additives.",
    pairing: "A royal match with Butter Naan."
  },
  {
    id: "dum-biryani",
    name: "Shama Royal Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    badge: "Awadhi Dum",
    spice: 2,
    portions: [
      { id: "half", label: "Half Deg Plate", price: 130 },
      { id: "full", label: "Full Deg Plate", price: 240 }
    ],
    image: "images/dish_2_1791103040843.jpg",
    video: "videos/dum-biryani.mp4",
    description: "Aged long-grain basmati layered with succulent marinated chicken, saffron-infused milk, caramelized onions, and sealed with dough for dum.",
    story: "Steamed gently in sealed degs so the aromatic essence of kewra, star anise, and whole spices penetrates each individual grain.",
    pairing: "Served alongside spiced burani raita and salan."
  },
  {
    id: "butter-garlic-naan",
    name: "Butter & Garlic Naan",
    category: "breads",
    diet: "veg",
    badge: "Tandoori Bread",
    spice: 0,
    portions: [
      { id: "standard", label: "Per Piece", price: 50 }
    ],
    image: "images/dish_1_1791103007768.jpg",
    video: "videos/roti-naan.mp4",
    description: "Refined flour dough clay-baked to blistered golden softness, brushed liberally with pure desi butter and roasted chopped garlic flakes.",
    story: "Slapped on the glowing interior wall of a 400°C charcoal tandoor for immediate puff and crispiness.",
    pairing: "Best for scooping rich gravies and handi curries."
  },
  {
    id: "crispy-manchow",
    name: "Crispy Manchow Soup",
    category: "desserts",
    diet: "veg",
    badge: "Warm Starter",
    spice: 2,
    portions: [
      { id: "standard", label: "Per Bowl", price: 46 }
    ],
    image: "images/hero_image_1791102967343.jpg",
    video: "videos/manchow-soup.mp4",
    description: "Dark, robust Chinese style vegetable broth infused with crushed garlic, shiitake mushrooms, coriander stems, and crunchy noodle topping.",
    story: "The perfect piping hot appetite starter before a rich royal meal.",
    pairing: "Enjoyed solo as an evening comfort bowl."
  },
  {
    id: "gulab-jamun",
    name: "Royal Gulab Jamun (2 Pcs)",
    category: "desserts",
    diet: "veg",
    badge: "Sweet Dish",
    spice: 0,
    portions: [
      { id: "standard", label: "Portion (2 Pcs)", price: 80 }
    ],
    image: "images/shama_kheer.jpg",
    video: "videos/desserts.mp4",
    description: "Deep-fried melt-in-mouth khoya dumplings immersed in warm sugar syrup delicately scented with rose water and cardamom.",
    story: "Prepared from pure cow milk mawa with a soft, moist center that dissolves on your palate.",
    pairing: "Extra delicious when paired with a scoop of rabri or kheer."
  }
];

// Fallback SVG data URI for dishes when an image fails to load
const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="%23F0E6D6"><rect width="100%" height="100%" fill="%23F0E6D6"/><path d="M200 80c-44 0-80 32-80 72h160c0-40-36-72-80-72zm-8 10h16v12h-16zm-76 72h168v10H116z" fill="%23B58A45" opacity="0.6"/><circle cx="200" cy="74" r="7" fill="%23B58A45" opacity="0.8"/></svg>`;

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================

let activeCategory = 'all';
let activeDiet = 'all';
let searchQuery = '';
let diningMode = 'Dine-In';
let tableOrAddress = 'Table #4';
let currentModalDish = null;
let currentModalPortion = null;

let cart = [];

// Restore cart from localStorage if available
try {
  const savedCart = localStorage.getItem('shama_menu_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  console.warn("Storage restricted", e);
}

// ==========================================================================
// 3. CATALOG RENDERING
// ==========================================================================

function filterDishes() {
  return DISH_CATALOG.filter(dish => {
    const matchesCategory = (activeCategory === 'all' || dish.category === activeCategory);
    const matchesDiet = (activeDiet === 'all' || dish.diet === activeDiet);
    
    const query = searchQuery.trim().toLowerCase();
    const searchTarget = `${dish.name} ${dish.description} ${dish.category} ${dish.badge || ''}`.toLowerCase();
    const matchesSearch = !query || searchTarget.includes(query);
    
    return matchesCategory && matchesDiet && matchesSearch;
  });
}

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  CATEGORIES.forEach(cat => {
    const count = (cat.id === 'all') 
      ? DISH_CATALOG.length 
      : DISH_CATALOG.filter(d => d.category === cat.id).length;
    
    const btn = document.createElement('button');
    btn.className = `category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`;
    btn.dataset.category = cat.id;
    btn.innerHTML = `
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="category-count-badge">${count}</span>
    `;
    
    btn.addEventListener('click', () => {
      activeCategory = cat.id;
      renderCategoryTabs();
      renderMenu();
      
      // Smooth scroll the clicked button into view on mobile
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    
    container.appendChild(btn);
  });
}

function renderMenu() {
  const container = document.getElementById('menuCatalogContainer');
  const emptyState = document.getElementById('emptyStateNotice');
  if (!container) return;
  
  const filteredDishes = filterDishes();
  container.innerHTML = '';
  
  if (filteredDishes.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  if (emptyState) emptyState.style.display = 'none';
  
  // If activeCategory is 'all', group by categories
  if (activeCategory === 'all') {
    const categoriesWithDishes = CATEGORIES.filter(c => c.id !== 'all');
    
    categoriesWithDishes.forEach(cat => {
      const catDishes = filteredDishes.filter(d => d.category === cat.id);
      if (catDishes.length === 0) return;
      
      const groupEl = document.createElement('section');
      groupEl.className = 'menu-category-group';
      
      groupEl.innerHTML = `
        <div class="category-group-header">
          <h2 class="category-group-title">${cat.icon} ${cat.name}</h2>
          <div class="category-group-line"></div>
          <span class="category-group-count">${catDishes.length} items</span>
        </div>
        <div class="dishes-grid" id="grid-${cat.id}"></div>
      `;
      
      container.appendChild(groupEl);
      const grid = groupEl.querySelector(`#grid-${cat.id}`);
      catDishes.forEach(dish => {
        grid.appendChild(createDishCardElement(dish));
      });
    });
  } else {
    // Single category display
    const currentCatObj = CATEGORIES.find(c => c.id === activeCategory);
    const groupEl = document.createElement('section');
    groupEl.className = 'menu-category-group';
    
    groupEl.innerHTML = `
      <div class="category-group-header">
        <h2 class="category-group-title">${currentCatObj ? currentCatObj.icon : ''} ${currentCatObj ? currentCatObj.name : 'Selected Category'}</h2>
        <div class="category-group-line"></div>
        <span class="category-group-count">${filteredDishes.length} items</span>
      </div>
      <div class="dishes-grid" id="grid-active"></div>
    `;
    
    container.appendChild(groupEl);
    const grid = groupEl.querySelector('#grid-active');
    filteredDishes.forEach(dish => {
      grid.appendChild(createDishCardElement(dish));
    });
  }
}

function createDishCardElement(dish) {
  const card = document.createElement('article');
  card.className = 'dish-card';
  card.dataset.dishId = dish.id;
  
  const hasMultiplePortions = dish.portions && dish.portions.length > 1;
  const initialPortion = dish.portions[0];
  card.dataset.selectedPortionId = initialPortion.id;
  card.dataset.selectedPrice = initialPortion.price;
  
  // Spice representation
  let spiceDisplay = '';
  if (dish.spice > 0) {
    spiceDisplay = `<span class="spice-meter" title="Spice Level ${dish.spice} of 3">${'🌶️'.repeat(dish.spice)}</span>`;
  }
  
  // Video Reveal Tag
  let videoTag = '';
  if (dish.video) {
    videoTag = `<span class="video-pill-badge" title="Has Food Reveal Video">🎬 Food Reveal</span>`;
  }
  
  // Portion selector HTML
  let portionControls = '';
  if (hasMultiplePortions) {
    const buttons = dish.portions.map((p, idx) => `
      <button 
        type="button" 
        class="portion-btn ${idx === 0 ? 'active' : ''}" 
        data-portion-id="${p.id}" 
        data-price="${p.price}"
        onclick="handleCardPortionSelect('${dish.id}', '${p.id}', ${p.price}, this)"
      >
        ${p.label} (₹${p.price})
      </button>
    `).join('');
    portionControls = `<div class="portion-selector-row">${buttons}</div>`;
  } else {
    portionControls = `<div class="single-portion-label">${dish.portions[0].label}</div>`;
  }
  
  card.innerHTML = `
    <div class="dish-card-visual" onclick="openDishModal('${dish.id}')">
      <img 
        src="${dish.image}" 
        alt="${dish.name}" 
        class="dish-card-img" 
        loading="lazy"
        onerror="this.onerror=null; this.src='${PLACEHOLDER_SVG}';"
      />
      <div class="card-top-badges">
        <span class="diet-icon-box ${dish.diet}" title="${dish.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
        ${dish.badge ? `<span class="authentic-tag">${dish.badge}</span>` : ''}
      </div>
      ${videoTag}
    </div>
    
    <div class="dish-card-body">
      <div class="dish-header-row">
        <h3 class="dish-name-title" onclick="openDishModal('${dish.id}')" style="cursor: pointer;">${dish.name}</h3>
        ${spiceDisplay}
      </div>
      
      <p class="dish-description-text">${dish.description || ''}</p>
      
      ${portionControls}
      
      <div class="dish-card-footer">
        <div class="dish-price-wrap">
          <span class="price-meta-label">${hasMultiplePortions ? 'Starting from' : 'Price'}</span>
          <span class="dish-price-amount" id="card-price-${dish.id}">₹${initialPortion.price}</span>
        </div>
        
        <div class="dish-card-actions">
          <button 
            type="button" 
            class="btn-details-icon" 
            title="View Details & Story" 
            onclick="openDishModal('${dish.id}')"
            aria-label="View details for ${dish.name}"
          >
            🔍
          </button>
          <button 
            type="button" 
            class="btn-add-order" 
            onclick="handleAddCardToCart('${dish.id}')"
          >
            <span>+</span> Add
          </button>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Portion selection handler on the card
window.handleCardPortionSelect = function(dishId, portionId, price, btn) {
  const card = document.querySelector(`.dish-card[data-dish-id="${dishId}"]`);
  if (!card) return;
  
  const buttons = card.querySelectorAll('.portion-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  card.dataset.selectedPortionId = portionId;
  card.dataset.selectedPrice = price;
  
  const priceEl = document.getElementById(`card-price-${dishId}`);
  if (priceEl) priceEl.innerText = `₹${price}`;
};

// Add to Cart from Card
window.handleAddCardToCart = function(dishId) {
  const card = document.querySelector(`.dish-card[data-dish-id="${dishId}"]`);
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish) return;
  
  let portionId = dish.portions[0].id;
  let price = dish.portions[0].price;
  
  if (card) {
    portionId = card.dataset.selectedPortionId || portionId;
    price = parseInt(card.dataset.selectedPrice, 10) || price;
  }
  
  const portionObj = dish.portions.find(p => p.id === portionId) || dish.portions[0];
  addItemToCart(dish, portionObj);
};

// ==========================================================================
// 4. DISH DETAILS MODAL & FOOD REVEAL VIDEO PLAYER
// ==========================================================================

window.openDishModal = function(dishId) {
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish) return;
  
  currentModalDish = dish;
  currentModalPortion = dish.portions[0];
  
  const overlay = document.getElementById('dishModalOverlay');
  const heroImg = document.getElementById('modalHeroImg');
  const titleEl = document.getElementById('modalTitle');
  const tagsRow = document.getElementById('modalTagsRow');
  const descEl = document.getElementById('modalDesc');
  const storyBox = document.getElementById('modalStoryBox');
  const pairingNote = document.getElementById('modalPairingNote');
  const videoRow = document.getElementById('modalVideoRow');
  const portionSection = document.getElementById('modalPortionsSection');
  const totalPriceEl = document.getElementById('modalTotalPrice');
  
  if (heroImg) {
    heroImg.src = dish.image;
    heroImg.onerror = function() { heroImg.src = PLACEHOLDER_SVG; };
  }
  if (titleEl) titleEl.innerText = dish.name;
  if (descEl) descEl.innerText = dish.description || '';
  
  // Tags
  if (tagsRow) {
    let tags = `
      <span class="modal-diet-badge ${dish.diet}">
        <span class="dot-indicator ${dish.diet === 'veg' ? 'veg' : 'nonveg'}"></span>
        ${dish.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
      </span>
    `;
    if (dish.badge) {
      tags += `<span class="authentic-tag">${dish.badge}</span>`;
    }
    if (dish.spice > 0) {
      tags += `<span class="authentic-tag">${'🌶️'.repeat(dish.spice)} Spicy</span>`;
    }
    tagsRow.innerHTML = tags;
  }
  
  // Story
  if (storyBox) {
    if (dish.story) {
      storyBox.style.display = 'block';
      storyBox.innerHTML = `<strong>Heritage Tradition:</strong> ${dish.story}`;
    } else {
      storyBox.style.display = 'none';
    }
  }
  
  // Pairing
  if (pairingNote) {
    if (dish.pairing) {
      pairingNote.style.display = 'flex';
      pairingNote.innerHTML = `<span>💡</span> <span>${dish.pairing}</span>`;
    } else {
      pairingNote.style.display = 'none';
    }
  }
  
  // Food Reveal Video Button
  if (videoRow) {
    if (dish.video) {
      videoRow.style.display = 'block';
      videoRow.innerHTML = `
        <button type="button" class="btn-watch-video" onclick="openFoodRevealVideo('${dish.id}')">
          <span>🎬</span> Watch Food Reveal Video
        </button>
      `;
    } else {
      videoRow.style.display = 'none';
    }
  }
  
  // Portions
  if (portionSection) {
    if (dish.portions && dish.portions.length > 1) {
      portionSection.innerHTML = `
        <div class="modal-portion-box">
          <div class="modal-portion-title">Select Portion:</div>
          <div class="modal-portion-options">
            ${dish.portions.map((p, idx) => `
              <button 
                type="button" 
                class="modal-portion-btn ${idx === 0 ? 'active' : ''}" 
                data-portion-id="${p.id}"
                onclick="handleModalPortionSelect('${p.id}')"
              >
                <span class="modal-portion-name">${p.label}</span>
                <span class="modal-portion-price">₹${p.price}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      portionSection.innerHTML = `
        <div class="modal-portion-box">
          <div class="modal-portion-title">Portion:</div>
          <div style="font-size:0.9rem;color:var(--text-body);">${dish.portions[0].label} — <strong>₹${dish.portions[0].price}</strong></div>
        </div>
      `;
    }
  }
  
  if (totalPriceEl) totalPriceEl.innerText = `₹${currentModalPortion.price}`;
  
  if (overlay) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.handleModalPortionSelect = function(portionId) {
  if (!currentModalDish) return;
  const portion = currentModalDish.portions.find(p => p.id === portionId);
  if (!portion) return;
  
  currentModalPortion = portion;
  
  const buttons = document.querySelectorAll('.modal-portion-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.dataset.portionId === portionId);
  });
  
  const totalPriceEl = document.getElementById('modalTotalPrice');
  if (totalPriceEl) totalPriceEl.innerText = `₹${portion.price}`;
};

window.closeDishModal = function() {
  const overlay = document.getElementById('dishModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  currentModalDish = null;
  currentModalPortion = null;
};

window.handleAddModalToCart = function() {
  if (!currentModalDish || !currentModalPortion) return;
  addItemToCart(currentModalDish, currentModalPortion);
  closeDishModal();
};

// Food Reveal Video Modal
window.openFoodRevealVideo = function(dishId) {
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish || !dish.video) return;
  
  const videoOverlay = document.getElementById('videoModalOverlay');
  const videoTitle = document.getElementById('videoModalTitle');
  const videoEl = document.getElementById('foodRevealVideoPlayer');
  
  if (videoTitle) videoTitle.innerText = `${dish.name} • Food Reveal`;
  
  if (videoEl) {
    videoEl.src = dish.video;
    videoEl.load();
  }
  
  if (videoOverlay) {
    videoOverlay.classList.add('active');
    videoOverlay.setAttribute('aria-hidden', 'false');
  }
};

window.closeFoodRevealVideo = function() {
  const videoOverlay = document.getElementById('videoModalOverlay');
  const videoEl = document.getElementById('foodRevealVideoPlayer');
  
  if (videoEl) {
    videoEl.pause();
    videoEl.removeAttribute('src'); // Unload to free memory
    videoEl.load();
  }
  
  if (videoOverlay) {
    videoOverlay.classList.remove('active');
    videoOverlay.setAttribute('aria-hidden', 'true');
  }
};

// ==========================================================================
// 5. CART & ORDERING ENGINE
// ==========================================================================

function addItemToCart(dish, portion) {
  const cartItemId = `${dish.id}-${portion.id}`;
  const existing = cart.find(item => item.id === cartItemId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: cartItemId,
      dishId: dish.id,
      name: dish.name,
      portionId: portion.id,
      portionLabel: portion.label,
      price: portion.price,
      quantity: 1,
      image: dish.image
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`Added ${dish.name} (${portion.label}) to order`);
}

window.updateCartItemQty = function(cartItemId, delta) {
  const itemIndex = cart.findIndex(i => i.id === cartItemId);
  if (itemIndex === -1) return;
  
  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }
  
  saveCart();
  updateCartUI();
};

function saveCart() {
  try {
    localStorage.setItem('shama_menu_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn("Storage restricted", e);
  }
}

function updateCartUI() {
  const headerCount = document.getElementById('headerCartCount');
  const dock = document.getElementById('floatingOrderDock');
  const dockCount = document.getElementById('dockBadgeCount');
  const dockPrice = document.getElementById('dockTotalPrice');
  const dockMeta = document.getElementById('dockCountMeta');
  
  const drawerList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const gstEl = document.getElementById('cartGst');
  const totalEl = document.getElementById('cartTotal');
  
  let totalItems = 0;
  let subtotal = 0;
  
  cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += (item.price * item.quantity);
  });
  
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;
  
  // Header Counter
  if (headerCount) headerCount.innerText = totalItems;
  
  // Floating Dock
  if (dock) {
    if (totalItems > 0) {
      dock.classList.add('visible');
      if (dockCount) dockCount.innerText = totalItems;
      if (dockPrice) dockPrice.innerText = `₹${grandTotal}`;
      if (dockMeta) dockMeta.innerText = `${totalItems} dish${totalItems > 1 ? 'es' : ''} in order`;
    } else {
      dock.classList.remove('visible');
    }
  }
  
  // Cart Drawer Items List
  if (drawerList) {
    if (cart.length === 0) {
      drawerList.innerHTML = `
        <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
          <div style="font-size:2.8rem;margin-bottom:0.75rem;">🍽️</div>
          <h4 style="font-family:var(--font-serif);color:var(--text-heading);margin-bottom:0.35rem;">Your order is empty</h4>
          <p style="font-size:0.85rem;">Select dishes from the menu to build your royal order.</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = cart.map(item => `
        <div class="cart-item-card">
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-portion">${item.portionLabel}</span>
            <span class="cart-item-price">₹${item.price * item.quantity}</span>
          </div>
          <div class="cart-qty-group">
            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
      `).join('');
    }
  }
  
  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (gstEl) gstEl.innerText = `₹${gst}`;
  if (totalEl) totalEl.innerText = `₹${grandTotal}`;
}

window.toggleCartDrawer = function(open = null) {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (!overlay) return;
  
  if (open === true) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else if (open === false) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  } else {
    const isActive = overlay.classList.contains('active');
    toggleCartDrawer(!isActive);
  }
};

// Dispatch WhatsApp Order to authentic restaurant number (+91 97591 00786)
window.dispatchWhatsAppOrder = function() {
  if (cart.length === 0) {
    alert("Please add dishes to your order first.");
    return;
  }
  
  const locationInput = document.getElementById('orderLocationInput');
  const instructionsInput = document.getElementById('orderNotesInput');
  
  const locationVal = (locationInput && locationInput.value.trim()) ? locationInput.value.trim() : tableOrAddress;
  const notesVal = (instructionsInput && instructionsInput.value.trim()) ? instructionsInput.value.trim() : 'None';
  
  let subtotal = 0;
  let itemsText = '';
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    itemsText += `• ${item.quantity}x ${item.name} (${item.portionLabel}) — ₹${itemTotal}\n`;
  });
  
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;
  
  const message = 
    `⚜️ *SHAMA DELUXE RESTAURANT - ORDER* ⚜️\n` +
    `📍 Dining Mode: *${diningMode}* (${locationVal})\n` +
    `📅 Date: ${new Date().toLocaleDateString('en-IN')}\n` +
    `----------------------------------------\n` +
    `*ITEMS ORDERED:*\n${itemsText}` +
    `----------------------------------------\n` +
    `💵 Subtotal: ₹${subtotal}\n` +
    `🧾 GST (5%): ₹${gst}\n` +
    `🔥 *TOTAL AMOUNT: ₹${grandTotal}*\n` +
    `----------------------------------------\n` +
    `📝 Special Cooking Notes: ${notesVal}\n\n` +
    `_Namaste! Please confirm this order and preparation time._`;
  
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919759100786?text=${encoded}`;
  
  window.open(whatsappUrl, '_blank');
};

// ==========================================================================
// 6. TOAST NOTIFICATIONS
// ==========================================================================

let toastTimer;
function showToast(text) {
  const toast = document.getElementById('luxuryToastNotice');
  const toastText = document.getElementById('toastNoticeText');
  if (!toast || !toastText) return;
  
  toastText.innerText = text;
  toast.classList.add('active');
  
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 2600);
}

// ==========================================================================
// 6B. TABLE QR MODAL CONTROLS
// ==========================================================================

window.openQrModal = function() {
  const overlay = document.getElementById('qrModalOverlay');
  if (overlay) {
    const input = document.getElementById('customQrUrlInput');
    if (input && window.location.href) {
      input.value = window.location.origin + window.location.pathname;
    }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeQrModal = function() {
  const overlay = document.getElementById('qrModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

window.copyMenuLink = function() {
  const input = document.getElementById('customQrUrlInput');
  const url = (input && input.value) ? input.value : window.location.href;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Menu link copied to clipboard!");
    }).catch(() => {
      prompt("Copy this menu URL:", url);
    });
  } else {
    prompt("Copy this menu URL:", url);
  }
};

// ==========================================================================
// 7. INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  renderMenu();
  updateCartUI();
  
  // Search Input
  const searchInput = document.getElementById('dishSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderMenu();
    });
  }
  
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderMenu();
    });
  }
  
  // Clear Filters button in empty state
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      searchQuery = '';
      activeCategory = 'all';
      activeDiet = 'all';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      
      const dietPills = document.querySelectorAll('.diet-pill');
      dietPills.forEach(p => p.classList.toggle('active', p.dataset.diet === 'all'));
      
      renderCategoryTabs();
      renderMenu();
    });
  }
  
  // Dietary Filter Pills
  const dietPills = document.querySelectorAll('.diet-pill');
  dietPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      dietPills.forEach(p => p.classList.remove('active'));
      const clicked = e.currentTarget;
      clicked.classList.add('active');
      activeDiet = clicked.dataset.diet || 'all';
      renderMenu();
    });
  });
  
  // Dining Mode Selector in Cart Drawer
  const modeChips = document.querySelectorAll('.dining-mode-chip');
  modeChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      modeChips.forEach(c => c.classList.remove('active'));
      const clicked = e.currentTarget;
      clicked.classList.add('active');
      diningMode = clicked.dataset.mode;
      
      const locInput = document.getElementById('orderLocationInput');
      if (locInput) {
        if (diningMode === 'Dine-In') locInput.placeholder = 'Enter Table Number (e.g. Table #4)';
        else if (diningMode === 'Takeaway') locInput.placeholder = 'Takeaway Pickup Name';
        else locInput.placeholder = 'Delivery Full Address & Landmark';
      }
    });
  });
  
  // Sticky nav shadow trigger
  const stickyNav = document.getElementById('menuStickyNav');
  if (stickyNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        stickyNav.classList.add('scrolled');
      } else {
        stickyNav.classList.remove('scrolled');
      }
    }, { passive: true });
  }
  
  // Keyboard Accessibility: Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const qrOverlay = document.getElementById('qrModalOverlay');
      if (qrOverlay && qrOverlay.classList.contains('active')) {
        closeQrModal();
        return;
      }

      const videoOverlay = document.getElementById('videoModalOverlay');
      if (videoOverlay && videoOverlay.classList.contains('active')) {
        closeFoodRevealVideo();
        return;
      }
      
      const dishOverlay = document.getElementById('dishModalOverlay');
      if (dishOverlay && dishOverlay.classList.contains('active')) {
        closeDishModal();
        return;
      }
      
      const cartOverlay = document.getElementById('cartDrawerOverlay');
      if (cartOverlay && cartOverlay.classList.contains('active')) {
        toggleCartDrawer(false);
      }
    }
  });
});
