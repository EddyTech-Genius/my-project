import "../main/styles/cart.css";
import SpinnerSVG from "../component/SpinnerSVG";
import { useState } from "react";

function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [count, setCount] = useState(1);
  return (
    <>
      <hr className="blocker"></hr>
      <div className="cart__wrapper">
        <div>
          {cartItems.length === 0 ? (
            // In a button
            <button disabled style={{ position: "relative", paddingLeft: 36 }}>
              <span>No items in cart yet...</span>
              <span
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c5ce7",
                }}
              >
                <SpinnerSVG size={28} stroke={3} />
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
            <p>{total}</p>
          </div>
          <div className="shipping">
            <p>SHIPPING</p>
            <p>{Math.floor(0.073 * total)}</p>
          </div>
          <div className="total">
            <p>TOTAL</p>
            <p>{total + Math.floor(0.073 * total)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
