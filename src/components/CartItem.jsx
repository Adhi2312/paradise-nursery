import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";
import "./CartItem.css";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (id) => dispatch(incrementQuantity(id));
  const handleDecrement = (id) => dispatch(decrementQuantity(id));
  const handleDelete = (id) => dispatch(removeItem(id));

  const handleCheckout = () => {
    setCheckoutMessage(true);
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-total">
            Total: <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-thumbnail"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => handleDecrement(item.id)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleIncrement(item.id)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-side">
                  <p className="cart-item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>

          {checkoutMessage && (
            <p className="checkout-message">
              Checkout is coming soon — thanks for your patience!
            </p>
          )}
        </>
      )}
    </main>
  );
}

export default CartItem;
