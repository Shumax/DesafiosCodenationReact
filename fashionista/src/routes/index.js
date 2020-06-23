import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CatalogRoute from './CatalogRoute';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"> 
        <CatalogRoute/>
      </Route>
    </Switch>
  </BrowserRouter>
); 

export default Routes;