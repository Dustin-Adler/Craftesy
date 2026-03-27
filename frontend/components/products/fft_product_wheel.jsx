import { useState, useEffect } from "react";
import FFTProductWheelItem from "./fft_product_wheel_item";
import React from "react";

const FFTProductWheel = ({ products }) => {
  // useEffect(() => {}, []);

  if (products.length === 0) return null;

  const productItems = products.slice(0, 10).map((product, idx) => (
    <FFTProductWheelItem
      className="fft-product-wheel-item"
      key={idx}
      product={product}
      position={idx}
    />
  ));

  return (
    <div className="fft-product-wheel-container">
      <ul className="fft-product-wheel">
        {productItems}
      </ul>
    </div> 
  );
};

export default FFTProductWheel;
