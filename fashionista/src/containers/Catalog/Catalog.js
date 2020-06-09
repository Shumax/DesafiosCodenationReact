import React from 'react';

import './Catalog.scss';
import Card from '../../components/Card';

const Catalog = ({catalog}) => (
  <section className="catalog">
    <div className="catalog__card">
      {catalog.map((card) => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </div>
  </section> 
);

export default Catalog;