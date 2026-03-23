import { useState, useEffect } from "react";
import FFTProductWheelItem from "./fft_product_wheel_item";
import React from "react";

const FFTProductWheel = ({ products }) => {
  // useEffect(() => {}, []);

  if (products.length === 0) return null;

  const productItems = products.map((product, idx) => (
    <FFTProductWheelItem key={idx} product={product} />
  ));

  return (
    <div className="fft-product-wheel-container">
      <div className="fft-product-wheel">
        {productItems}
      </div>
    </div>
  );
};

export default FFTProductWheel;
