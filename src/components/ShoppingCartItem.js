import React from "react";
import { formatPrice } from "../utils"

class ShoppingCartItem extends React.Component {
  renderPrice(){
    const garment = this.props.collection[this.props.index];
    const count = this.props.cart[this.props.index];
    const isAvailable = garment.status === 'available';
    if(!isAvailable) {
      return <div>Sold out</div>;
    }
    return (
      <div>
        <span className="shoppingCart__itemCount">{count}{count === 1 ? " unit" : " units"}</span>
        <span className="shoppingCart__itemPrice">{formatPrice(count * garment.price)}</span>
      </div>
    );
  }
  render(){
    const garment = this.props.collection[this.props.index];
    return (
     <li className="shoppingCart__item">
        <div className="shoppingCart__itemImgWrapper">
          <img src={garment.image} alt={garment.name} />
        </div>
        <div className="shoppingCart__itemDetails">
          <span className="shoppingCart__itemName">{garment.name}</span>
          {this.renderPrice()}
        </div>
      </li>
    );
  }
}

export default ShoppingCartItem;
