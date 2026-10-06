document.addEventListener('DOMContentLoaded', () => {
    // 1. Toast Notification for 'Add to Order' buttons
    const toast = document.getElementById('toast');
    const addButtons = document.querySelectorAll('.add-btn, .add-btn-small');
    
    let toastTimeout;
    
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Optional: get item name for a dynamic toast message
            // const itemName = button.closest('.dish-card, .menu-list-item').querySelector('h3, h4').innerText;
            // toast.innerText = `Added ${itemName} to your order!`;

            // Show toast
            toast.classList.add('show');
            
            // Reset timeout if clicked rapidly
            clearTimeout(toastTimeout);
            
            // Hide toast after 3 seconds
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    });

    // 2. Category Tabs Toggle
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.currentTarget.classList.add('active');
        });
    });
});
