import { useState, useMemo } from 'react';
import './App.css';
import { products } from './data/products';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [bump, setBump] = useState(false);

  const filteredProducts = useMemo(() => {
    return activeFilter === 'all' 
      ? products 
      : products.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setBump(true);
    setTimeout(() => setBump(false), 300);
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">STORE.</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-light position-relative">
                Cart
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${bump ? 'bump' : ''}`}>
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="home" className="py-5 text-center bg-white border-bottom">
        <div className="container py-lg-5">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold display-4">Seasonal Collection</h1>
              <p className="lead text-muted">Explore our latest arrivals and timeless classics, curated just for you. Quality materials meets elegant design.</p>
              <p>
                <a href="#shop" className="btn btn-primary my-2 px-4 py-2 shadow-sm">Shop All Items</a>
                <button className="btn btn-outline-dark my-2 ms-2 px-4 py-2">View Categories</button>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="shop" className="container my-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="btn-group filter-group" role="group">
              {['all', 'electronics', 'accessories', 'fashion'].map(filter => (
                <button
                  key={filter}
                  type="button"
                  className={`btn btn-outline-dark ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col product-card-wrapper">
              <div className="card h-100 shadow-sm border-0">
                <img src={product.img} className="card-img-top rounded-0" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted small">{product.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-5 fw-bold">${product.price.toFixed(2)}</span>
                    <AddToCartButton onClick={handleAddToCart} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container text-center">
          <p className="mb-2">© 2026 STORE. All rights reserved.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            <li className="list-inline-item mx-2"><a href="#" class="text-light text-decoration-none">Terms of Service</a></li>
            <li className="list-inline-item mx-2"><a href="#" className="text-light text-decoration-none">Shipping Info</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function AddToCartButton({ onClick }: { onClick: () => void }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onClick();
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <button 
      type="button" 
      className={`btn btn-sm rounded-0 px-3 ${added ? 'btn-success' : 'btn-dark'}`}
      onClick={handleClick}
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}

export default App;
