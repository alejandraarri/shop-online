import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StoreSelector from './StoreSelector';
import Valentina from './Valentina';
import Shoppers from './Shoppers';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StoreSelector}/>
      <Route path="/valentina" component={Valentina}/>
      <Route path="/shoppers" component={Shoppers}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
) ;

export default Router;
