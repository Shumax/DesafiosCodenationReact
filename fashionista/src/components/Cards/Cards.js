import React from 'react';
import { Link } from "react-router-dom";

import ImageUnavailable from "../../assets/img/ImagemIndisponivel.png";
import './Cards.scss';

const Cards = ({cards}) => {
  return (
    <li className="cards">
      <Link to={`products/${cards.id}`}>
        <figure className="cards__poster">
					{!cards.image ? (
					<img className="cards__pic" src={ImageUnavailable} alt="Imagem Indisponível"/>
						):(
								<img className="cards__pic" src={cards.image} alt="Imagem Produto"/>
						)}
					<div className="cards__promo">
						{cards.discount_percentage && (
							<b>- {cards.discount_percentage}</b>
						)}
					</div>
        </figure>
				<div className="cards__description">
					<strong className="cards__name">{cards.name}</strong>
					<div className="cards__pricing">
						{
							cards.regular_price !== cards.actual_price ? (
								<>
									<span className="cards__price"> { cards.regular_price } </span>
									<span className="cards__price--promo"> { cards.actual_price } </span>
								</>
							):(
								<span className="cards__price--promo"> {cards.regular_price} </span>
							)
						}
					</div>
				</div>
      </Link> 
    </li>
  );
};

export default Cards;