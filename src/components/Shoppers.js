import React from "react";
import Collection from './Collection';
import ShoppingCart from './ShoppingCart';
import Inventory from './Inventory';

class Shoppers extends React.Component {
  render(){
    return (
      <div className="shoppers">
        <div className="background">
          <div>
            <Collection />
            <ShoppingCart />
          </div>
          <Inventory />
        </div>
      </div>
    );
  }
}

export default Shoppers;
