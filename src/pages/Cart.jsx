import "../main/styles/cart.css";
import SpinnerSVG from "../component/SpinnerSVG";
import { useState } from "react";

function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [count, setCount] = useState(1);
  return (
    <>
      <hr className="blocker"></hr>
      <h2 className="cart__heading">SHOPPING CART</h2>
      <div className="cart__wrapper">
        <div>
          {cartItems.length === 0 ? (
            // In a button
            <button
              disabled
              style={{
                fontStyle: "italic",
                position: "relative",
                paddingLeft: -100,
                paddingTop: 200,
                border: "none",
                backgroundColor: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              <span>No items in cart...</span>
              <span
                style={{
                  position: "absolute",
                  left: 50,
                  top: "50%",
                  transform: "translateY(-10%)",
                  color: "#6c5ce7",
                }}
              >
                <SpinnerSVG size={60} stroke={3} />
              </span>
            </button>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <div className="cart__item" key={index}>
                    <div className="cart__des">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                      <div>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <span className="count">{count}</span>
                        <button
                          onClick={() => setCount(count - 1)}
                          disabled={count === 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <img
                      className="cart__image"
                      src={`/assets/${item.image}`}
                      alt=""
                    />
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="summary">
          <h4>ORDER SUMMARY</h4>
          <div className="subtotal">
            <p>SUBTOTAL</p>
            <p>${total*count}</p>
          </div>
          <div className="shipping">
            <p>SHIPPING</p>
            <p>{Math.floor(0.073 * total)}</p>
          </div>
          <div className="total">
            <p>TOTAL</p>
            <strong>${total*count + Math.floor(0.073 * total)}</strong>
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
