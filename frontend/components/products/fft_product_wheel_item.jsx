import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom'
import { formatNameAsTitle } from '../../helpers/name_formatter'

const FFTProductWheelItem = ({ product, position }) => {
  const [active, setActive] = useState(false);

  if (!product) return null;

  const starRating = [];
  for (let i = 0; i < product.average_rating; i++) {
    starRating.push(<FontAwesomeIcon key={i} className="star" icon={faStar} />)
  }

  return (
    <li className="mtg-item-container" style={{ "--position": position }}>
      <Link className="card" to={`/products/${product.id}`}>
        <span className="card-background"/>
        <div className="title-bar-container">
          <div className="title-bar">
            <h2 className="name">{product.name}</h2>
            <p className="price">${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src={product.images[0].url}
            alt={product.name}/>
        </div>
        <div className="title-bar-container">
          <div className="title-bar">
            <h3 className="game">Legendary Game - {formatNameAsTitle(product.game_name)}</h3>
            <FontAwesomeIcon className="game-icon" icon={faSmileBeam} />
          </div>
        </div>
        <div className="info-container">
          <p className="description">{product.description}</p>
          <span className="rating-container">
            <span className="rating">{starRating}</span>
          </span>
        </div>
      </Link>
      <span className="shadow"></span>
    </li>
  );
};

export default FFTProductWheelItem;
