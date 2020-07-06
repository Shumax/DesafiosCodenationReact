import React from 'react';
import { useSelector } from "react-redux";


function SingleProduct (productId) {
    const products = useSelector(state => state.products.products);
    //const productId = useParams();

    var parse = productId.productId;

    /*const filterProducts = products.filter(function(item) {
        if (item.id == parse) {
            return {
                item
            };
        }
    });*/
    const filterProducts = products.filter(item => item.id == productId.productId)
        .map((item) => item);
   

    console.log(parse);
    console.log(filterProducts)
    return (
    <div></div>
    );
};

export default SingleProduct;