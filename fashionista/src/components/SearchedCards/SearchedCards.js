import React from 'react';
import './SearchedCards.scss';

const SearchedCards = ({card}) => {
	return (
		<div className="searched__card">
			<figure className="searched__card--poster">
				{!card.image ? (
					<img 
						className="searched__card--pic" 
						src={"https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} 
						alt="Imagem Indisponível"
					/> ):(
						<img className="searched__card--pic" src={card.image} alt="Imagem Produto"/>
					)}
			</figure>
			<div className="searched__card--description">
				<strong className="searched__card--name">{card.name}</strong>
				<div className="searched__card--pricing">
					{card.regular_price !== card.actual_price ? (
						<>
							<span className="searched__card--price"> { card.regular_price } </span>
							<span className="searched__card__price--promo"> { card.actual_price } </span>
						</>
					):(
						<span className="searched__card__price--promo"> {card.regular_price} </span>
					)}
				</div>
			</div>
		</div>
	);
}

export default SearchedCards;