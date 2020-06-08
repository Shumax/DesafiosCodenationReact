import React from 'react';

import Card from '../../components/Card';

const Catalog = ({catalog}) => (
  <div className="container">
    <ul className="catalog">
      {catalog.map((card) => (
        <Card
          key={card.id}
          card={card}
        />
      ))
      }
    </ul>
  </div>
);

export default Catalog;