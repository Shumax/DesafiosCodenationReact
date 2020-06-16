import React from 'react';

import './Catalog.scss';
import Card from '../../components/Card';

const Catalog = ({catalog}) => (
  <section className="catalog">
    <div className="catalog__container">
      <ul className="catalog__cards">
        {catalog.map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </ul>
    </div>

  </section> 
);

export default Catalog;