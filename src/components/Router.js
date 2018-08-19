import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StoreSelector from './StoreSelector';
import Store from './Store';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StoreSelector}/>
      <Route path="/valentina" component={() => <Store name={"valentina"} />}/>
      <Route path="/shoppers" component={() => <Store name={"shoppers"} />}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
) ;

export default Router;
