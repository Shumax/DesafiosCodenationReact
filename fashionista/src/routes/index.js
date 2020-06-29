import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CatalogRoute from './CatalogRoute';
import ProductRoute from './ProductRoute';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"> 
        <CatalogRoute/>
      </Route>
      <Route path="/products/:id">
        <ProductRoute/>
      </Route>
    </Switch>
  </BrowserRouter>
); 

export default Routes;