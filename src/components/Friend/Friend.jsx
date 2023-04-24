/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Friend = ({ ring }) => {
  return (
    <div>
      <h2>Friend</h2>
      {ring && (
        <p>
          <small>Ring: {ring}</small>
        </p>
      )}
    </div>
  );
};

export default Friend;
