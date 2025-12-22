import { useParams } from "react-router-dom";
import "./styles/productdetail.css";

function ProductDetail({ products, addToCart}) {
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;

    const handleAddToCart = () => {
    alert('Item added to cart!');
  };

  return (
    <div className="product-detail">
      <div className="product-main">
        <img
          src={`/assets/${product.image}`}
          alt={`Image of ${product.name}`}
        />
      </div>
      <div className="product-des">
        <h3>{product.name}</h3>
        <p className="stars">5.0⭐️⭐️⭐️⭐️⭐️</p>

        <p className="detail_price">USD  ${product.price}</p>

        <div className="button_sizes_container">
          <button className="size_buttons">
            {product.sizes[0]}
          </button>
          <button className="size_buttons">
            {product.sizes[1]}
          </button>
          <button className="size_buttons">
            {product.sizes[2]}
          </button>
          <button className="size_buttons">
            {product.sizes[3]}
          </button>
          <button className="size_buttons">
            {product.sizes[4]}
          </button>
        </div>

        <button className="detail_buy">Buy Now</button>
        <button className="detail_to_cart" onClick={() => {addToCart(product); handleAddToCart(product)}}>Add To Cart</button>

        <label htmlFor="">Description</label>
        <p className="des">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
