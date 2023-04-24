/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ring}) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself ring={ring}></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
