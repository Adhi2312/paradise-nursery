import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsArray } from '../data/plants';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.numOfItems);

  const isAddedToCart = (name) => cartItems.some((item) => item.name === name);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="tag_home_link">
          <a href="/" onClick={handleHomeClick}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div className="navbar-links">
          <a href="/" onClick={handleHomeClick} className="nav-link">
            Home
          </a>
          <a href="#" onClick={handlePlantsClick} className="nav-link">
            Plants
          </a>
          <a href="#" onClick={handleCartClick} className="nav-link cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              height="32"
              width="32"
            >
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></path>
            </svg>
            <span className="cart_quantity_count">{totalQuantity}</span>
            Cart
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div className="plant_category" key={category.category}>
              <h2 className="plant_heading">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const added = isAddedToCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                      />
                      <div className="product-title">{plant.name}</div>
                      <p className="product-description">
                        {plant.description}
                      </p>
                      <div className="product-price">{plant.cost}</div>
                      <button
                        className={`product-button${
                          added ? ' added-to-cart' : ''
                        }`}
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
