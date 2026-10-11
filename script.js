document.addEventListener('DOMContentLoaded', () => {
    // 1. Toast Notification & Order Bar Tracking
    const toast = document.getElementById('toast');
    const orderBar = document.getElementById('order-bar');
    const orderCountEl = document.getElementById('order-count');
    const orderTotalEl = document.getElementById('order-total');

    let totalItems = 0;
    let totalPrice = 0;
    let toastTimeout;

    // Delegate clicks for any add-to-cart buttons
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-btn, .add-btn-small, .add-to-cart-btn');
        if (!addBtn) return;

        e.preventDefault();

        // Extract item name and price if present
        let itemName = addBtn.getAttribute('data-name');
        let price = parseInt(addBtn.getAttribute('data-price'), 10);

        if (!itemName) {
            const card = addBtn.closest('.dish-card, .menu-list-item, .menu-card, .special-card');
            if (card) {
                const heading = card.querySelector('h3, h4');
                if (heading) itemName = heading.innerText.trim();
            }
        }

        if (isNaN(price) || !price) {
            price = 150; // default estimated price if not specified
        }

        totalItems += 1;
        totalPrice += price;

        // Show / update order bar if present
        if (orderBar && orderCountEl && orderTotalEl) {
            orderCountEl.innerText = `${totalItems} item${totalItems > 1 ? 's' : ''}`;
            orderTotalEl.innerText = `₹${totalPrice}`;
            orderBar.style.display = 'block';
        }

        // Show Toast
        if (toast) {
            toast.innerText = itemName ? `Added ${itemName} (₹${price}) to your order!` : 'Added to your order!';
            toast.classList.add('show');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    });

    // 2. Menu Page Interactive Filtering (Category, Dietary, Search)
    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('menu-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const dietBtns = document.querySelectorAll('.diet-btn');
    const categoryBtns = document.querySelectorAll('#category-pills .category-btn');
    const currentHeading = document.getElementById('menu-current-heading');
    const itemsCountEl = document.getElementById('items-count');
    const noResultsEl = document.getElementById('no-results');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    let currentCategory = 'all';
    let currentDiet = 'all';
    let searchQuery = '';

    function applyFilters() {
        if (!menuContainer) return;

        const cards = menuContainer.querySelectorAll('.menu-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            const cardDiet = card.getAttribute('data-diet');
            const cardText = (card.innerText || '').toLowerCase();

            const matchesCategory = (currentCategory === 'all' || cardCat === currentCategory);
            const matchesDiet = (currentDiet === 'all' || cardDiet === currentDiet);
            const matchesSearch = (!searchQuery || cardText.includes(searchQuery));

            if (matchesCategory && matchesDiet && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update items count
        if (itemsCountEl) {
            itemsCountEl.innerText = `${visibleCount} dish${visibleCount === 1 ? '' : 'es'} available`;
        }

        // Show or hide empty state
        if (noResultsEl) {
            noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    // Category Tabs
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            const clicked = e.currentTarget;
            clicked.classList.add('active');
            currentCategory = clicked.getAttribute('data-category') || 'all';

            if (currentHeading) {
                const label = clicked.innerText.replace(/[^\w\s&]/gi, '').trim();
                currentHeading.innerText = currentCategory === 'all' ? 'All Menu Items' : label;
            }

            applyFilters();
        });
    });

    // Dietary Filter Buttons
    dietBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            dietBtns.forEach(b => b.classList.remove('active'));
            const clicked = e.currentTarget;
            clicked.classList.add('active');
            currentDiet = clicked.getAttribute('data-diet') || 'all';
            applyFilters();
        });
    });

    // Live Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
            }
            applyFilters();
        });
    }

    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            applyFilters();
        });
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            currentCategory = 'all';
            currentDiet = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';

            categoryBtns.forEach(b => b.classList.remove('active'));
            if (categoryBtns[0]) categoryBtns[0].classList.add('active');

            dietBtns.forEach(b => b.classList.remove('active'));
            if (dietBtns[0]) dietBtns[0].classList.add('active');

            if (currentHeading) currentHeading.innerText = 'All Menu Items';
            applyFilters();
        });
    }

    // Home Page Category tabs (if on index.html)
    const homeCatBtns = document.querySelectorAll('.full-menu-header .category-btn');
    homeCatBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            homeCatBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });
});
