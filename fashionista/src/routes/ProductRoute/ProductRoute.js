import React from 'react';
import { useParams } from "react-router-dom";
import SingleProduct from '../../containers/SingleProduct';
import Topbar from '../../containers/Topbar';

function ProductRoute () {
  const {id} = useParams();
  //const products = useSelector(state => state.products.products);
  console.log(id);

  return (
		<div>
			<Topbar/>
			<SingleProduct productId={id}/>
		</div>
  );
};

export default ProductRoute;