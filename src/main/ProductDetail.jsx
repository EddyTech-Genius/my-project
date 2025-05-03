import { useParams } from "react-router-dom";
import "./styles/productdetail.css";

function ProductDetail({ products }) {
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <div className="product-main">
        <img
          src={`/assets/${product.image}`}
          alt={`Image of ${product.name}`}
        />
      </div>
      <div className="product-des">
        <h2>{product.name}</h2>
        <p className="stars">5.0⭐️⭐️⭐️⭐️⭐️</p>

        <p className="detail_price">USD  ${product.price}</p>

        <div className="button_sizes_container">
          <button className="size_buttons">
            {product.sizes.toString().slice(0, 2)}
          </button>
          <button className="size_buttons">
            {product.sizes.toString().slice(3, 4)}
          </button>
          <button className="size_buttons">
            {product.sizes.toString().slice(5, 6)}
          </button>
          <button className="size_buttons">
            {product.sizes.toString().slice(7, 8)}
          </button>
          <button className="size_buttons">
            {product.sizes.toString().slice(9, 11)}
          </button>
        </div>

        <button className="detail_buy">Buy Now</button>
        <button className="detail_to_cart">Add To Cart</button>

        <label htmlFor="">Description</label>
        <p className="des">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
