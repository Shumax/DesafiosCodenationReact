import React from 'react';

const SearchedCards = ({card}) => {
	return (
		<div>
			<figure className="card__poster">
				{!card.image ? (
				<img className="card__pic" src={"https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} alt="Imagem Indisponível"/>
					):(
							<img className="card__pic" src={card.image} alt="Imagem Produto"/>
					)}
				<div className="card__promo">
					{card.discount_percentage && (
						<b>- {card.discount_percentage}</b>
					)}
				</div>
			</figure>
			<div className="card__description">
				<strong className="card__name">{card.name}</strong>
				<div className="card__pricing">
					{
						card.regular_price !== card.actual_price ? (
							<>
								<span className="card__price"> { card.regular_price } </span>
								<span className="card__price--promo"> { card.actual_price } </span>
							</>
						):(
							<span className="card__price--promo"> {card.regular_price} </span>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default SearchedCards;