import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/productlist.css"

const ProductList = ({products}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Men")}>Men</button>
        <button onClick={() => handleFilter("Women")}>Women</button>
        <button onClick={() => handleFilter("Shoes")}>Shoes</button>
      </div>

      <div className="container">
        {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img src={`/assets/${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="prices">
                {/* <strike style={{ color: "red" }}>
                  ${product.price + Math.floor(Math.random() * 50)}
                </strike> */}
                <p>${product.price}</p>
              </div>
              <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
                <p className="read_more">Read More</p>
              </Link>
              <p className="buy">Add To Cart</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
