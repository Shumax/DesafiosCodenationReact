import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import Catalog from '../../containers/Catalog';
import Loading from '../../components/Loading';
import { loadProducts } from '../../actions';

const CatalogRoute = () => {
  const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();

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
  }, [dispatch]);

  return (
    <div>
      {!catalog.length ? (<Loading/>):(
        <Catalog
          catalog={catalog}
        />
      )}
    </div>
  );
};

export default CatalogRoute;
