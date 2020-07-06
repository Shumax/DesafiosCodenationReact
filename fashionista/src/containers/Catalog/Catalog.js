import React from 'react';
import { useSelector } from "react-redux";

import './Catalog.scss';
import Cards from '../../components/Cards';

function Catalog () {
  const catalog = useSelector(state => state.products.products);
  console.log(catalog)
  return (
    <section className="catalog">
      <div className="catalog__container">
        <div className="catalog__counter">
          <b>{catalog.length} Itens</b>
        </div>
        <ul className="catalog__cards">
          {catalog?.map((card) => (
            <Cards
              key={card.id}
              cards={card}
            />
          ))}
        </ul>
      </div>
        
    </section> 
  );
} 
  

export default Catalog;