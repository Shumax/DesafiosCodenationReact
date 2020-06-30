import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SingleProduct from '../../containers/SingleProduct';

function ProductRoute () {
  const {id} = useParams();
  const products = useSelector(state => state.products.products);
  console.log(products);

  return (
    <SingleProduct productId={id}/>
  );
};

export default ProductRoute;