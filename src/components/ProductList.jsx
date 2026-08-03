import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { categories, plants } from "../data/plants";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
      })
    );
  };

  return (
    <main className="product-list-page">
      <div className="product-list-header">
        <h1>Shop All Plants</h1>
        <p>Browse by category and add your favorites to the cart.</p>
      </div>

      {categories.map((category) => (
        <section key={category.id} className="category-section">
          <div className="category-heading">
            <h2>{category.name}</h2>
            <p>{category.blurb}</p>
          </div>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category.id)
              .map((plant) => {
                const added = isInCart(plant.id);
                return (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumbnail"
                    />
                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <div className="plant-footer">
                        <span className="plant-price">
                          ${plant.price.toFixed(2)}
                        </span>
                        <button
                          className={`add-to-cart-btn${added ? " added" : ""}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? "Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
