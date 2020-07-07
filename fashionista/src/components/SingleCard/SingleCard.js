import React from 'react';

const SingleCard = ({filteredCard}) => {

    console.log(filteredCard)
    return (
        <div className="singleCard">
            <figure className="singleCard__poster">
                <img className="singleCard__pic" src={filteredCard.image} alt={`Foto ${filteredCard.name}`}/>
            </figure>
            <section className="singleCard__content">
                <h3 className="singleCard__name">{filteredCard.name}</h3>
                <div></div>

            </section>
        </div>
    );
}

export default SingleCard;