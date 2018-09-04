import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
import { formatPrice } from "../utils";
import style from "../style";

class ShoppingCart extends React.Component {
  showBadge(){
    const { cart, collection, name: storeName } = this.props;
    const cartIds = Object.keys(cart);
    const itemsCount = cartIds.reduce((prevTotal, key) => {
      const garment = collection[key];
      const count = cart[key];
      const isAvailable = garment && garment.status === "available";
      if(isAvailable) {
        return prevTotal + count;
      }
      return prevTotal;
    }, 0);
    if (itemsCount > 0) {
      return(
        <Badge
          name={storeName}>
          {itemsCount}
        </Badge>
      );
    }
  }
  renderCart(){
    const { cart, collection } = this.props;
    const cartIds = Object.keys(cart);
    const total = cartIds.reduce((prevTotal, key) => {
      const garment = collection[key];
      const count = cart[key];
      const isAvailable = garment && garment.status === "available";
      if(isAvailable) {
        return prevTotal + (count * garment.price)
      }
      return prevTotal;
    }, 0);
    if (total === 0) {
      return (
        <EmptyCart>
          <p>Your Shopping Cart is empty.</p>
          <p>Let's start shopping!</p>
        </EmptyCart>
      );
    }
    return (
      <Fragment>
        <ul>
          {Object.keys(cart).map(key => (
            <ShoppingCartItem
              key={key}
              index={key}
              collection={collection}
              cart={cart}
              details={collection[key]}
            />
          ))}
        </ul>
        <Total>
          <span>Total: </span>
          <span>{formatPrice(total)}</span>
        </Total>
      </Fragment>
    );
  }
  render(){
    return (
      <Fragment>
        <Checkbox type="checkbox" id="cart-toggle" />
        <Wrapper>
          <Toogle htmlFor="cart-toggle">
            {this.showBadge()}
          </Toogle>
          <Heading>My Cart</Heading>
          {this.renderCart()}
        </Wrapper>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  collection: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

const Checkbox = styled.input`
  display: none;
`;

const Toogle = styled.label`
  position: absolute;
  top: 0;
  left: -40px;
  background-color: #fff;
  background-image: url('images/shopping-cart.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  border: 1px solid #eee;
  padding: .8em;
  font-size: 1.5em;
  color: #777;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  top: .1rem;
  right: .1rem;
  width: 1rem;
  height: 1rem;
  background: ${props => style[props.name].primaryBtnBg};
  border-radius: 50%;
  font-size: .5em;
  color: #fff;
`;

const Wrapper = styled.div`
  position: fixed;
  right: -85%;
  width: 85%;
  height: 100vh;
  background-color: #ffffff;
  padding: 1.5em 2em;
  border-left: 1px solid #eee;
  overflow: visible;
  transition: right 0.5s ease-out;

  @media screen and (min-width: 768px) {
    right: -45%;
    width: 45%;
  }

  ${Checkbox}:checked + & {
    right: 0px;
    transition: right 0.5s ease-out;
  }
`;

const Heading = styled.h2`
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: .2px;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .5em 0;
  font-size: 1.2em;
`;

export default ShoppingCart;
