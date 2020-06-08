import React from 'react';
import { Link } from "react-router-dom";

import './Card.css';

const Card = ({card}) => {
  return (
    <li key={card.id} className="catalog__card">
      <Link to={`products/${card.id}`}>
        <figure className="catalog__poster">
          {!card.image ? (
            <img
              className="catalog__img catalog__img--null"
              src={
                "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
              }
              alt="Null"
            />
          ) : (
            <img className="catalog__img" src={card.image} alt="product" />
          )}
          <div className="catalog__seal">
            {card.discount_percentage && (
              <span>-{card.discount_percentage}</span>
            )}
          </div>
        </figure>
      </Link>
      <div className="catalog__description">
        <strong className="catalog__name">{card.name}</strong>
        <div className="catalog__pricing">
          {card.regular_price !== card.actual_price ? (
            <>
              <span className="catalog__price">{card.regular_price}</span>
              <span className="catalog__price catalog__price--promo">
                {card.actual_price}
              </span>
            </>
          ) : (
            <span className="catalog__price catalog__price--promo">
              {card.regular_price}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;