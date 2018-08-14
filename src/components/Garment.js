import React from "react";
import { formatPrice } from "../utils"

class Garment extends React.Component {
  render(){
    const { image, name, status, price } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className={isAvailable ? "garment__item" : "garment__item garment__item--disabled"}>
        <div className="garment__imgWrapper">
          <img src={image} alt={name} />
          <button className="garment__cta" disabled={!isAvailable}
            onClick={() => this.props.addToCart(this.props.index)}>Add To Cart</button>
        </div>
        <h3 className="garment__heading">{name}
        </h3>
        <p className="garment__price">{formatPrice(price)}</p>
      </li>
    );
  }
}

export default Garment;
