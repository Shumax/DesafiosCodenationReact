import React, { useState, useEffect } from 'react';

import Catalog from '../../containers/Catalog';
import Loading from '../../components/Loading';

const CatalogRoute = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    async function loadProducts(){
      await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((response) => response.json())
        .then(data => setCatalog(data))
        .catch(erro => {
          throw erro;
        });
    }
    console.log(loadProducts());
    loadProducts();
  }, []);

  return (
    <div>
      {catalog.length ? (<Loading/>):(
        <Catalog
          catalog={catalog}
        />
      )}
    </div>
  );
};

export default CatalogRoute;
