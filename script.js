// STORE. E-commerce Functionality

// 1. Product Data
const products = [
    { id: 1, name: "Minimalist Watch", category: "accessories", price: 129.00, desc: "Elegant and functional timepiece with a premium leather strap.", img: "https://picsum.photos/seed/p1/600/400" },
    { id: 2, name: "Noise-Canceling Headphones", category: "electronics", price: 249.00, desc: "Immersive sound experience with adaptive noise cancellation.", img: "https://picsum.photos/seed/p2/600/400" },
    { id: 3, name: "Smart Home Assistant", category: "electronics", price: 199.00, desc: "Connect and control your entire home with your voice.", img: "https://picsum.photos/seed/p3/600/400" },
    { id: 4, name: "Executive Messenger Bag", category: "fashion", price: 159.00, desc: "Spacious and professional leather bag with laptop sleeve.", img: "https://picsum.photos/seed/p4/600/400" },
    { id: 5, name: "Wireless Charging Stand", category: "electronics", price: 49.00, desc: "Fast charging for all your devices with a sleek wooden finish.", img: "https://picsum.photos/seed/p5/600/400" },
    { id: 6, name: "Compact Mechanical Keyboard", category: "electronics", price: 109.00, desc: "Satisfying tactile feedback and customizable RGB backlighting.", img: "https://picsum.photos/seed/p6/600/400" },
    { id: 7, name: "Premium Cotton T-Shirt", category: "fashion", price: 35.00, desc: "Ultra-soft, breathable cotton for everyday comfort.", img: "https://picsum.photos/seed/p7/600/400" },
    { id: 8, name: "Leather Wallet", category: "accessories", price: 55.00, desc: "Slim design with RFID protection and multiple card slots.", img: "https://picsum.photos/seed/p8/600/400" }
];

document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartBadge = document.querySelector('.badge');
    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-group button');

    // 2. Render Products Function
    function renderProducts(filter = 'all') {
        productGrid.innerHTML = ''; // Clear current products
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filteredProducts.forEach(product => {
            const productCard = `
                <div class="col product-card-wrapper" data-category="${product.category}">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${product.img}" class="card-img-top rounded-0" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${product.name}</h5>
                            <p class="card-text text-muted small">${product.desc}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fs-5 fw-bold">$${product.price.toFixed(2)}</span>
                                <button type="button" class="btn btn-dark btn-sm rounded-0 px-3 add-to-cart" data-id="${product.id}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', productCard);
        });

        // Re-attach event listeners to new buttons
        attachAddToCartListeners();
    }

    // 3. Add to Cart Logic
    function attachAddToCartListeners() {
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                cartCount++;
                if (cartBadge) {
                    cartBadge.textContent = cartCount;
                    cartBadge.classList.remove('bump');
                    void cartBadge.offsetWidth; 
                    cartBadge.classList.add('bump');
                }

                // Button Feedback
                const originalText = button.textContent;
                button.textContent = 'Added!';
                button.classList.replace('btn-dark', 'btn-success');
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.replace('btn-success', 'btn-dark');
                }, 800);
            });
        });
    }

    // 4. Filter Logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Render filtered products
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // 5. Initial Render
    renderProducts();

    // Smooth scrolling
    document.querySelectorAll('.nav-link, .btn-primary').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
