import "../main/styles/cart.css";
import { useState } from "react";

function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [count, setCount] = useState(1)
  return (
    <>
      <hr className="blocker"></hr>
      <div className="cart__wrapper">
        <div>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
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
                      <button onClick={() => setCount(count - 1)} disabled={count===1}>-</button>
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
        <div>
          <h4>ORDER SUMMARY</h4>
          <div className="total__div">
          <p>SUBTOTAL</p>
          <p>{total}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
