import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Catalog from '../../containers/Catalog';
import Loading from '../../components/Loading';
import { loadProducts } from '../../actions';

function CatalogRoute () {
  //const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(loadProducts());
    
    /*async function loadProducts(){
      await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((response) => response.json())
        .then(data => setCatalog(data))
        .catch(erro => {
          throw erro;
        });
    }
    loadProducts();*/
    //console.log(catalog);
  }, [dispatch]);

  return (
    <div>
      {!catalog ? (<Loading/>):(
        <Catalog
        />
      )}
    </div>
  );
};

export default CatalogRoute;
