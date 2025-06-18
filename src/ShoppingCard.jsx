import React, { useState } from 'react';
import './ShoppingCard.css';

function ShoppingCard() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nike1 Man',
      price: 20,
      quantity: 1,
      image: './Products/Picture1.png'
    },
    {
      id: 2,
      name: 'Adidas Women',
      price: 25,
      quantity: 2,
      image: './Products/Picture3.png'
    }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const handleReset = () => {
    setCartItems([]);
  };

  const handleConfirm = () => {
    alert('Order Confirmed!');
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shoppingcard-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div className="shoppingcard-items">
            {cartItems.map((item) => (
              <div key={item.id} className="shoppingcard-item">
                <img src={item.image} alt={item.name} />
                <div className="shoppingcard-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="shoppingcard-actions">
            <h3>Grand Total: ${total}</h3>
            <button className="reset-btn" onClick={handleReset}>Reset Cart</button>
            <button className="confirm-btn" onClick={handleConfirm}>Confirm Order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCard;
