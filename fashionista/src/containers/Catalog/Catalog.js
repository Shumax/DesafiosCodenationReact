import React from 'react';

import Card from '../../components/Card';

const Catalog = ({catalog}) => (
  <div className="container">
    <section className="catalog">
      {catalog.map((card) => (
        <Card
          key={post.id}
        />
      ))
      }
    </section>
  </div>
);

export default Catalog;