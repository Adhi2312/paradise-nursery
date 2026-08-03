import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        🌿 Paradise Nursery
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/products" className="navbar-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="navbar-link navbar-cart">
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
