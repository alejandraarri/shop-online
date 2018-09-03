import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
import { formatPrice } from "../utils";

class ShoppingCart extends React.Component {
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
      <Wrapper>
        <Heading>My Cart</Heading>
        {this.renderCart()}
      </Wrapper>
    );
  }
}

ShoppingCart.propTypes = {
  collection: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  width: 45%;
  max-height: 90vh;
  margin-left: 5%;
  padding: 1.5em 2em;
  border-left: 1px solid #eee;
  overflow: scroll;
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
