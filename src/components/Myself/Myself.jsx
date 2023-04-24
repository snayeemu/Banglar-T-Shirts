/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ import React from "react";
import Special from "../Special/Special";

const Myself = ({ring}) => {
  return (
    <div>
      <h2>Myself</h2>
      <Special ring={ring}></Special>
    </div>
  );
};

export default Myself;
