import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/productlist.css";

const ProductList = ({ products, addToCart }) => {
  const [filtered, setFiltered] = useState(products);

  const filterBy = (cat) => {
    if (cat === "All") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === cat));
  };

  return (<>
    {/* <div className="promo">
        <h2>Limited Time Offer</h2>
        <p>
          Up to <span>50% OFF</span>
        </p>
      </div> */}
    <section className="shop">
      
      {/* CATEGORY ICONS */}
      <div className="categories">
        {["All", "Men", "Women", "Shoes"].map((cat) => (
          <button key={cat} onClick={() => filterBy(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={`/assets/${product.image}`} alt={product.name} />

            <div className="info">
              <h4>{product.name}</h4>
              <p className="price">${product.price}</p>

              <div className="actions">
                <Link to={`/product/${product.id}`}>View</Link>
                <button onClick={() => addToCart(product)}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ProductList;
