import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



function SingleProduct () {
    const products = useSelector(state => state.products.products);
    const productId = useParams();

    const filterProducts = products.map((item) => {
        if (item.id === productId.id) {
            return {
                id: item.id
            };
        }
    });

    console.log(filterProducts);
    return (
        <div></div>
    );
};

export default SingleProduct;