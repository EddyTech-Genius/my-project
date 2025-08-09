import React from 'react'

function Cart({ cartItems }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
          </>
        )}
      </div>
    );
  }
  
  export default Cart;
  
