import React from 'react';
import { useSelector } from "react-redux";
import SingleCard from '../../components/SingleCard';


function SingleProduct (productId) {
    const products = useSelector(state => state.products.products);
    //const productId = useParams();

    /*
    var parse = productId.productId;

    const filterProducts = products.filter(function(item) {
        if (item.id == parse) {
            return {
                item
            };
        }
    });
    const filteredProducts = products.filter(item => item.id == productId.productId)
        .map((item) => item);
   

    console.log(parse);
    console.log(filteredProducts)*/
    return (
        <div>
            {products.filter(item => item.id == productId.productId)
                .map((card) =>
                    <SingleCard key={card.id} filteredCard={card}/>
                )
            }
        </div>
        
    );
};

export default SingleProduct;