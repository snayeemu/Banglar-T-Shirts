/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>
      </p>
      {hasFriend && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cousin;
