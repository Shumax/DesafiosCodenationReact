import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import TopBar from '../../containers/Topbar';
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
      await fetch("../../../public/services/data.json")
        .then((response) => response.json())
        .then(data => setCatalog(data))
        .catch(erro => {
          throw erro;
        });
    }
    loadProducts();
    console.log(catalog);*/
  }, [dispatch]);

  return (
    <div>
			<TopBar/>
      {!catalog.length ? (<Loading/>):(
        <Catalog
        />
      )}
    </div>
  );
};

export default CatalogRoute;
