// STORE. E-commerce Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count
    let cartCount = 0;
    const cartBadge = document.querySelector('.badge');
    const addToCartButtons = document.querySelectorAll('.btn-dark');

    // Add click event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Increment cart count
            cartCount++;
            
            // Update the UI
            if (cartBadge) {
                cartBadge.textContent = cartCount;
                
                // Add a little animation effect
                cartBadge.classList.add('bg-primary');
                cartBadge.classList.remove('bg-danger');
                
                setTimeout(() => {
                    cartBadge.classList.add('bg-danger');
                    cartBadge.classList.remove('bg-primary');
                }, 500);
            }

            // Optional: Show a confirmation toast or alert
            console.log('Item added to cart!');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
