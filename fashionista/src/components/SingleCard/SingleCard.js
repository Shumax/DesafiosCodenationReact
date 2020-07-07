import React from 'react';
import './SingleCard.scss';

const SingleCard = ({filteredCard}) => {

    console.log(filteredCard)
    return (
        <div className="singleCard">
            <figure className="singleCard__poster">
                {!filteredCard.image ? (
                    <img className="singleCard__pic" src={"https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} alt="Imagem Indisponível"/>
                ):(
                    <img className="singleCard__pic" src={filteredCard.image} alt={`Foto ${filteredCard.name}`}/>        
                )}
                <div className="singleCard__promo">
                    {filteredCard.discount_percentage && (
                        <b>- {filteredCard.discount_percentage}</b>
                    )}
                </div>
            </figure>
            <section className="singleCard__content">
                <h3 className="singleCard__name">{filteredCard.name}</h3>
                <div className="singleCard__pricing">
                    {filteredCard.regular_price !== filteredCard.actual_price ? (
                      <>
                        <span className="singleCard__price">{filteredCard.regular_price}</span>
                        <span className="singleCard__price--promo">{filteredCard.actual_price}</span>
                      </>
                    ) : (
                        <span className="singleCard__price">{filteredCard.regular_price}</span>    
                    )}
                    <span className="singleCard__price--installments">{` Em até ${filteredCard.installments}`}</span>
                </div>
                <p>Escolha o tamanho!</p>
                <div className="singleCard__sizes">
                    {filteredCard.sizes.filter(sizes => sizes.available === true)
                        .map((size) => {
                            return (
                              <button className="singleCard__sizes--btn">{size.size}</button>
                            );
                        })
                   }
                </div>
            </section>
        </div>
    );
}

export default SingleCard;