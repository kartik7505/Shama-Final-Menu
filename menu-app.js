/**
 * SHAMA DELUXE - 3D LUXURY DIGITAL MENU LOGIC
 * Dynamic 3D Tilt Physics, Reactive Cart, WhatsApp Order Engine & Instant Filters
 */

// 1. Comprehensive Dish Catalog
const DISH_CATALOG = [
    {
        id: "butter-chicken",
        name: "Shama Butter Chicken Handi",
        category: "mughlai",
        diet: "non-veg",
        badge: "Chef's Pride",
        spice: 2,
        halfPrice: 250,
        fullPrice: 500,
        image: "images/shama_butter_chicken.jpg",
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
        halfPrice: 340,
        fullPrice: 490,
        image: "images/shama_kali_mirch.jpg",
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
        halfPrice: 300,
        fullPrice: 600,
        image: "images/shama_malai_tikka.jpg",
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
        halfPrice: 14,
        fullPrice: 14,
        singlePrice: 14,
        image: "images/shama_rumali_roti.jpg",
        description: "Ultra-thin, paper-soft handkerchief bread tossed rhythmically into the air and baked on an inverted spherical dome kadhai.",
        story: "Traditional Awadhi artisan technique creating feather-light bread that absorbs thick handi gravies with perfection.",
        pairing: "The quintessential partner for Butter Chicken and Changezi."
    },
    {
        id: "shama-kheer",
        name: "Royal Shama Special Kheer",
        category: "desserts",
        diet: "veg",
        badge: "Bestseller Dessert",
        spice: 0,
        halfPrice: 30,
        fullPrice: 30,
        singlePrice: 30,
        image: "images/shama_kheer.jpg",
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
        halfPrice: 350,
        fullPrice: 600,
        image: "images/shama_ceramic_butter_chicken.jpg",
        description: "Slow-braised chicken with mace, whole cinnamon, caramel brown onions (birista), and thick yogurt gravy finished with desi ghee.",
        story: "Re-created from ancestral handwritten recipes preserved across generations.",
        pairing: "Divine with Shahi Butter Naan."
    },
    {
        id: "paneer-tikka-masala",
        name: "Paneer Tikka Masala",
        category: "mughlai",
        diet: "veg",
        badge: "Pure Veg Special",
        spice: 2,
        halfPrice: 220,
        fullPrice: 220,
        singlePrice: 220,
        image: "images/dish_3_1791103054248.jpg",
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
        halfPrice: 140,
        fullPrice: 140,
        singlePrice: 140,
        image: "images/hero_image_1791102967343.jpg",
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
        halfPrice: 130,
        fullPrice: 240,
        image: "images/dish_2_1791103040843.jpg",
        description: "Aged long-grain basmati layered with succulent marinated chicken, saffron-infused milk, caramelized onions, and sealed with dough for dum.",
        story: "Steamed gently in sealed degs so the aromatic essence of kewra, star anise, and whole spices penetrates each individual grain.",
        pairing: "Served alongside spiced burani raita and salan."
    },
    {
        id: "butter-garlic-naan",
        name: "Butter & Garlic Naan",
        category: "breads",
        diet: "veg",
        badge: "Clay Oven Baked",
        spice: 0,
        halfPrice: 50,
        fullPrice: 50,
        singlePrice: 50,
        image: "images/dish_1_1791103007768.jpg",
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
        halfPrice: 46,
        fullPrice: 46,
        singlePrice: 46,
        image: "images/hero_image_1791102967343.jpg",
        description: "Dark, robust Chinese style vegetable broth infused with crushed garlic, shiitake mushrooms, coriander stems, and crunchy noodle topping.",
        story: "The perfect piping hot appetite starter before a rich royal meal.",
        pairing: "Enjoyed solo as an evening comfort bowl."
    },
    {
        id: "gulab-jamun",
        name: "Royal Gulab Jamun (2 Pcs)",
        category: "desserts",
        diet: "veg",
        badge: "Traditional Sweet",
        spice: 0,
        halfPrice: 80,
        fullPrice: 80,
        singlePrice: 80,
        image: "images/shama_kheer.jpg",
        description: "Deep-fried melt-in-mouth khoya dumplings immersed in warm sugar syrup delicately scented with rose water and cardamom.",
        story: "Prepared from pure cow milk mawa with a soft, moist center that dissolves on your palate.",
        pairing: "Extra delicious when paired with a scoop of rabri or kheer."
    }
];

// 2. Global State
let cart = [];
let activeCategory = 'all';
let activeDiet = 'all';
let searchQuery = '';
let diningMode = 'Dine-In';
let tableNumber = 'Table #4';

// Try to restore cart from localStorage
try {
    const savedCart = localStorage.getItem('shama_menu_cart');
    if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
    console.warn("Storage access restricted", e);
}

// 3. Render Catalog with 3D Tilt Cards
function renderCatalog() {
    const grid = document.getElementById('dishesGrid');
    const emptyState = document.getElementById('catalogEmpty');
    const counterBadge = document.getElementById('catalogCounter');
    
    if (!grid) return;
    grid.innerHTML = '';
    
    let visibleCount = 0;
    
    DISH_CATALOG.forEach(dish => {
        // Filter checks
        const matchesCat = (activeCategory === 'all' || dish.category === activeCategory);
        const matchesDiet = (activeDiet === 'all' || dish.diet === activeDiet);
        const searchTarget = `${dish.name} ${dish.description} ${dish.category}`.toLowerCase();
        const matchesSearch = (!searchQuery || searchTarget.includes(searchQuery));
        
        if (matchesCat && matchesDiet && matchesSearch) {
            visibleCount++;
            
            const hasPortions = (dish.halfPrice !== dish.fullPrice);
            const initialPortion = hasPortions ? 'half' : 'full';
            const initialPrice = (initialPortion === 'half') ? dish.halfPrice : dish.fullPrice;
            
            // Build Spice Icons
            let spiceIcons = '';
            for (let i = 0; i < dish.spice; i++) {
                spiceIcons += '🌶️';
            }
            if (dish.spice === 0) spiceIcons = '<span style="color:#10b981;font-size:0.75rem;">🌿 Mild</span>';
            
            const cardEl = document.createElement('div');
            cardEl.className = 'dish-card-3d';
            cardEl.dataset.id = dish.id;
            cardEl.dataset.selectedPortion = initialPortion;
            cardEl.dataset.selectedPrice = initialPrice;
            
            cardEl.innerHTML = `
                <div class="card-visual-wrap" onclick="openDishModal('${dish.id}')">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    <div class="card-badges-row">
                        <span class="dish-diet-tag ${dish.diet}" title="${dish.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
                        <span class="badge-tag-special">${dish.badge}</span>
                    </div>
                    <button class="card-view-btn-overlay">
                        <span>🔍 Story & Info</span>
                    </button>
                </div>
                
                <div class="card-body-content">
                    <div class="dish-title-row">
                        <h3 class="dish-title">${dish.name}</h3>
                        <div class="spice-rating-meter" title="Spice Level">${spiceIcons}</div>
                    </div>
                    
                    <p class="dish-recipe-desc">${dish.description}</p>
                    
                    ${hasPortions ? `
                        <div class="portion-switch-row">
                            <button class="portion-toggle-btn active" data-portion="half" onclick="selectPortion('${dish.id}', 'half', ${dish.halfPrice}, this)">
                                Half Plate (₹${dish.halfPrice})
                            </button>
                            <button class="portion-toggle-btn" data-portion="full" onclick="selectPortion('${dish.id}', 'full', ${dish.fullPrice}, this)">
                                Full Plate (₹${dish.fullPrice})
                            </button>
                        </div>
                    ` : `
                        <div class="portion-switch-row" style="background:transparent;border:none;margin-bottom:0.6rem;">
                            <span style="font-size:0.75rem;color:var(--text-dim);letter-spacing:1px;text-transform:uppercase;">Standard Portion</span>
                        </div>
                    `}
                    
                    <div class="dish-card-footer">
                        <div class="price-display-wrap">
                            <span class="price-label-small">${hasPortions ? 'Portion Price' : 'Price'}</span>
                            <span class="price-value-active" id="price-${dish.id}">₹${initialPrice}</span>
                        </div>
                        <button class="add-order-btn-3d" onclick="addToCart('${dish.id}')">
                            <span>+</span> Add to Order
                        </button>
                    </div>
                </div>
            `;
            
            // Add Interactive 3D Perspective Tilt Physics
            attach3DTilt(cardEl);
            
            grid.appendChild(cardEl);
        }
    });
    
    // Update counter
    if (counterBadge) {
        counterBadge.innerText = `${visibleCount} Dish${visibleCount === 1 ? '' : 'es'} Ready`;
    }
    
    // Empty state
    if (emptyState) {
        emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
}

// 4. 3D Tilt Physics Function
function attach3DTilt(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Tilt angles (-8deg to +8deg)
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    });
}

// 5. Portion Selector Toggle
function selectPortion(dishId, portion, price, btn) {
    const card = btn.closest('.dish-card-3d');
    if (!card) return;
    
    const buttons = card.querySelectorAll('.portion-toggle-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    card.dataset.selectedPortion = portion;
    card.dataset.selectedPrice = price;
    
    const priceDisplay = card.querySelector(`#price-${dishId}`);
    if (priceDisplay) {
        priceDisplay.innerText = `₹${price}`;
    }
}

// 6. Cart Management & Calculations
function addToCart(dishId, customPortion = null, customPrice = null) {
    const dish = DISH_CATALOG.find(d => d.id === dishId);
    if (!dish) return;
    
    let portion = customPortion;
    let price = customPrice;
    
    if (!portion || !price) {
        const card = document.querySelector(`.dish-card-3d[data-id="${dishId}"]`);
        if (card) {
            portion = card.dataset.selectedPortion || 'full';
            price = parseInt(card.dataset.selectedPrice, 10) || dish.fullPrice;
        } else {
            portion = 'full';
            price = dish.fullPrice;
        }
    }
    
    const cartItemId = `${dishId}-${portion}`;
    const existing = cart.find(item => item.id === cartItemId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            dishId: dish.id,
            name: dish.name,
            portion: portion,
            price: price,
            quantity: 1,
            image: dish.image
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`Added ${dish.name} (${portion.toUpperCase()}) to order!`);
}

function updateCartQty(cartItemId, delta) {
    const itemIndex = cart.findIndex(i => i.id === cartItemId);
    if (itemIndex === -1) return;
    
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    
    saveCart();
    updateCartUI();
}

function saveCart() {
    try {
        localStorage.setItem('shama_menu_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn("Storage full or restricted", e);
    }
}

function updateCartUI() {
    const dock = document.getElementById('floatingOrderDock');
    const dockCount = document.getElementById('dockBadgeCount');
    const dockPrice = document.getElementById('dockTotalPrice');
    const dockMeta = document.getElementById('dockCountText');
    const drawerItems = document.getElementById('cartItemsList');
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
    
    // Update Floating Dock
    if (dock) {
        if (totalItems > 0) {
            dock.classList.add('visible');
            if (dockCount) dockCount.innerText = totalItems;
            if (dockPrice) dockPrice.innerText = `₹${grandTotal}`;
            if (dockMeta) dockMeta.innerText = `${totalItems} dish${totalItems > 1 ? 'es' : ''} in your order`;
        } else {
            dock.classList.remove('visible');
        }
    }
    
    // Update Drawer Elements
    if (drawerItems) {
        if (cart.length === 0) {
            drawerItems.innerHTML = `
                <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
                    <div style="font-size:2.5rem;margin-bottom:0.8rem;">🍽️</div>
                    <p style="font-size:1.1rem;color:var(--text-white);margin-bottom:0.4rem;">Your order is currently empty</p>
                    <p style="font-size:0.85rem;">Select dishes from the menu to prepare your royal meal.</p>
                </div>
            `;
        } else {
            drawerItems.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-portion">${item.portion.toUpperCase()} PORTION</span>
                        <span class="cart-item-price">₹${item.price * item.quantity}</span>
                    </div>
                    <div class="cart-qty-controls">
                        <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
                        <span class="qty-number">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
    if (gstEl) gstEl.innerText = `₹${gst}`;
    if (totalEl) totalEl.innerText = `₹${grandTotal}`;
}

// 7. WhatsApp Order Dispatcher
function dispatchWhatsAppOrder() {
    if (cart.length === 0) {
        alert("Please add dishes to your order first!");
        return;
    }
    
    const tableInput = document.getElementById('orderTableInput');
    const notesInput = document.getElementById('orderNotesInput');
    
    const table = (tableInput && tableInput.value.trim()) ? tableInput.value.trim() : tableNumber;
    const notes = (notesInput && notesInput.value.trim()) ? notesInput.value.trim() : 'None';
    
    let subtotal = 0;
    let itemsText = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsText += `• ${item.quantity}x ${item.name} [${item.portion.toUpperCase()}] - ₹${itemTotal}\n`;
    });
    
    const gst = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + gst;
    
    const message = `⚜️ *SHAMA DELUXE RESTAURANT - ORDER* ⚜️\n` +
        `📅 Date: ${new Date().toLocaleDateString('en-IN')}\n` +
        `🛎️ Dining Mode: *${diningMode}* (${table})\n` +
        `----------------------------------------\n` +
        `*ORDERED ITEMS:*\n${itemsText}` +
        `----------------------------------------\n` +
        `💵 Subtotal: ₹${subtotal}\n` +
        `🧾 GST (5%): ₹${gst}\n` +
        `🔥 *TOTAL PAYABLE: ₹${grandTotal}*\n` +
        `----------------------------------------\n` +
        `📝 Special Instructions: ${notes}\n\n` +
        `_Please confirm preparation of this order._`;
    
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919759100786?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
}

// 8. Dish Detail Modal
function openDishModal(dishId) {
    const dish = DISH_CATALOG.find(d => d.id === dishId);
    if (!dish) return;
    
    const modal = document.getElementById('dishModalOverlay');
    const modalHero = document.getElementById('modalHeroImg');
    const modalTitle = document.getElementById('modalDishTitle');
    const modalTags = document.getElementById('modalTagsRow');
    const modalStory = document.getElementById('modalStoryBox');
    const modalPairing = document.getElementById('modalPairingText');
    const modalAddBtn = document.getElementById('modalAddOrderBtn');
    
    if (modalHero) modalHero.src = dish.image;
    if (modalTitle) modalTitle.innerText = dish.name;
    
    if (modalTags) {
        modalTags.innerHTML = `
            <span class="modal-tag">${dish.badge}</span>
            <span class="modal-tag" style="color:${dish.diet === 'veg' ? '#10b981' : '#ef4444'}">${dish.diet === 'veg' ? 'PURE VEGETARIAN' : 'HALAL NON-VEG'}</span>
            <span class="modal-tag">Heritage Recipe</span>
        `;
    }
    
    if (modalStory) {
        modalStory.innerHTML = `<strong>Heritage Tradition:</strong> ${dish.story}`;
    }
    
    if (modalPairing) {
        modalPairing.innerText = dish.pairing;
    }
    
    if (modalAddBtn) {
        modalAddBtn.onclick = () => {
            addToCart(dish.id, 'full', dish.fullPrice);
            closeDishModal();
        };
    }
    
    if (modal) modal.classList.add('active');
}

function closeDishModal() {
    const modal = document.getElementById('dishModalOverlay');
    if (modal) modal.classList.remove('active');
}

// 9. Toast Notification
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('luxuryToast');
    const toastText = document.getElementById('toastMessageText');
    if (!toast || !toastText) return;
    
    toastText.innerText = message;
    toast.classList.add('active');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
    }, 2800);
}

// 10. Drawer Toggles
function toggleCartDrawer(open = null) {
    const drawer = document.getElementById('cartDrawerOverlay');
    if (!drawer) return;
    
    if (open === true) {
        drawer.classList.add('active');
    } else if (open === false) {
        drawer.classList.remove('active');
    } else {
        drawer.classList.toggle('active');
    }
}

// 11. Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    updateCartUI();
    
    // Category Chips
    const categoryBtns = document.querySelectorAll('.category-chip-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            const clicked = e.currentTarget;
            clicked.classList.add('active');
            activeCategory = clicked.dataset.category || 'all';
            
            const titleEl = document.getElementById('activeCategoryTitle');
            if (titleEl) {
                const label = clicked.innerText.replace(/[^\w\s&]/gi, '').trim();
                titleEl.innerText = (activeCategory === 'all') ? 'All Royal Curations' : label;
            }
            
            renderCatalog();
        });
    });
    
    // Dietary Switch
    const dietBtns = document.querySelectorAll('.diet-pill-btn');
    dietBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            dietBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.remove('veg-active');
                b.classList.remove('nonveg-active');
            });
            
            const clicked = e.currentTarget;
            clicked.classList.add('active');
            activeDiet = clicked.dataset.diet || 'all';
            
            if (activeDiet === 'veg') clicked.classList.add('veg-active');
            if (activeDiet === 'non-veg') clicked.classList.add('nonveg-active');
            
            renderCatalog();
        });
    });
    
    // Search Box
    const searchInput = document.getElementById('menuSearchInput');
    const clearSearchBtn = document.getElementById('searchClearBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
            }
            renderCatalog();
        });
    }
    
    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            renderCatalog();
        });
    }
    
    // Dining Mode Buttons
    const modeBtns = document.querySelectorAll('.dining-mode-btn');
    modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            diningMode = btn.dataset.mode;
            
            const tableBadge = document.getElementById('tableBadgeText');
            if (tableBadge) {
                if (diningMode === 'Dine-In') {
                    tableBadge.innerText = tableNumber;
                } else if (diningMode === 'Takeaway') {
                    tableBadge.innerText = 'Takeaway Counter';
                } else {
                    tableBadge.innerText = 'Home Delivery';
                }
            }
        });
    });
    
    // Table Prompt
    const tableBtn = document.getElementById('tableSelectorBtn');
    if (tableBtn) {
        tableBtn.addEventListener('click', () => {
            const promptVal = prompt("Please enter your Table Number or Delivery Location:", tableNumber);
            if (promptVal && promptVal.trim()) {
                tableNumber = promptVal.trim();
                const tableBadge = document.getElementById('tableBadgeText');
                if (tableBadge) tableBadge.innerText = tableNumber;
                
                const tableInput = document.getElementById('orderTableInput');
                if (tableInput) tableInput.value = tableNumber;
            }
        });
    }
});
