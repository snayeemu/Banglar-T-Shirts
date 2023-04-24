/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (!cart.length) message = <p>Please, add some products!!</p>;
  else
    message = (
      <div>
        <h3>Boroloxxx</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );

  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>

      {cart.length > 2 ? (
        <span className="purple">Aro keno</span>
      ) : (
        <span>Boroloxx Fokir</span>
      )}

      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!!</p>}
      {cart.length === 3 || <h3>Tinta to holo na!!</h3>}
    </div>
  );
};

export default Cart;

/*
 * CONDITIONAL RENDERING:
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary: condition ? 'for true' : 'for false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical &&: (if the condition is false hen the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS Class:
 * 1. use ternary
 * 2. ternary inside template string
 */
