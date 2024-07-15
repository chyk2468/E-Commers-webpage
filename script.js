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
                
                // Add a visual "bump" animation
                cartBadge.classList.remove('bump');
                void cartBadge.offsetWidth; // Trigger reflow
                cartBadge.classList.add('bump');
            }

            // Visual feedback on the button
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.classList.replace('btn-dark', 'btn-success');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.replace('btn-success', 'btn-dark');
            }, 1000);
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
