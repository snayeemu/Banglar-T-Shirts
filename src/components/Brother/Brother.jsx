/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>
        <small>{angti}</small>
      </p>
    </div>
  );
};

export default Brother;
