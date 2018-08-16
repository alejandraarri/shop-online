import React, { Fragment } from "react";
import ShoppingCartItem from './ShoppingCartItem';
import { formatPrice } from "../utils"

class ShoppingCart extends React.Component {
  renderCart(){
    const cartIds = Object.keys(this.props.cart);
    const total = cartIds.reduce((prevTotal, key) => {
      const garment = this.props.collection[key];
      const count = this.props.cart[key];
      const isAvailable = garment && garment.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * garment.price)
      }
      return prevTotal;
    }, 0);
    if (total === 0) {
      return (
        <div className="shoppingCart__emptyCartContainer">
          <p>Your Shopping Cart is empty.</p>
          <p>Let's start shopping!</p>

        </div>
      );
    }
    return (
      <Fragment>
        <ul className="shoppingCart__list">
          {Object.keys(this.props.cart).map(key => (
            <ShoppingCartItem
              key={key}
              index={key}
              collection={this.props.collection}
              cart={this.props.cart}
              details={this.props.collection[key]}
            />
          ))}
        </ul>
        <div className="shoppingCart__total">
          <span>Total: </span>
          <span>{formatPrice(total)}</span>
        </div>
      </Fragment>
    );
  }
  render(){
    return (
      <div className="shoppingCart">
          <h2 className="shoppingCart__heading">My Cart</h2>
          {this.renderCart()}
        </div>
    );
  }
}

export default ShoppingCart;
