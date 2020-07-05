import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



function SingleProduct (productId) {
    const products = useSelector(state => state.products.products);
    //const productId = useParams();

    var parse = productId.productId;

    const filterProducts = products.filter(function(item) {
        if (item.id == parse) {
            return (
                item
            );
        }
    });
   

    console.log(parse);
    console.log(filterProducts)
    return (
    <div>{filterProducts}</div>
    );
};

export default SingleProduct;