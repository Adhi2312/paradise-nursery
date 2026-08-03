import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="landing-page">
        <div className="landing-overlay">
          <p className="landing-eyebrow">Paradise Nursery</p>
          <h1 className="landing-title">Bring the outside in.</h1>
          <p className="landing-subtitle">
            Hand-picked houseplants, delivered ready to thrive — from
            air-purifying greenery to windowsill herbs and easy succulents.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </header>
      <AboutUs />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/products"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
