import React from "react";
import Collection from './Collection';
import ShoppingCart from './ShoppingCart';
import Inventory from './Inventory';

class Valentina extends React.Component {
  render(){
    return (
      <div className="valentina">
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

export default Valentina;
