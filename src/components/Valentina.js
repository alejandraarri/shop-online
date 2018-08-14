import React from "react";
import Collection from './Collection';
import ShoppingCart from './ShoppingCart';
import Inventory from './Inventory';
import garments from '../valentina-collection';
import "../style.css";

class Valentina extends React.Component {
  state = {
    collection: garments,
    cart: {}
  };

  addItem = garment => {
    const collection = { ...this.state.collection };
    collection[`garment${Date.now()}`] = garment;
    this.setState({ collection });
  };

  addToCart = key => {
    const cart = { ...this.state.cart };
    cart[key] = cart[key] + 1 || 1;
    this.setState({ cart });
  }

  render(){
    return (
      <div className="valentina">
          <Collection collection={this.state.collection} addToCart={this.addToCart}/>
          <ShoppingCart />
          <Inventory addItem={this.addItem}/>
      </div>
    );
  }
}

export default Valentina;
