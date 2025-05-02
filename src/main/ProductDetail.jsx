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

        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
