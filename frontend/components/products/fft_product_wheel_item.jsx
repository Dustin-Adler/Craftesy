import { useState } from 'react';
import React from "react";

const FFTProductWheelItem = ({ product }) => {
  const [active, setActive] = useState(false);

  if (!product) return null;

  return (
    <div className="fft-product-wheel-item-container">
      <div className="card">
        <div className="image-container">
          <img
            className="image"
            src={product.images[0]}
            alt={product.name}/>
        </div>
        <div className="info">
          <h3 className="name">{product.name}</h3>
          <p className="price">${product.price}</p>
        </div>
      </div>
      <span className="shadow"></span>
    </div>
  );
};

export default FFTProductWheelItem;
