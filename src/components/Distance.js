import React from "react";

const Distance = ({ setDistance, value }) => {
  return (
    <>
      <input value={value} onChange={(e) => setDistance(e.target.value)}/> <span>in miles</span>

    </>
  );
};

export default Distance;
