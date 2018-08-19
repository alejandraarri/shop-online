import React, { Fragment } from "react";
import ShoppingCartItem from './ShoppingCartItem';
import { formatPrice } from "../utils";
import styled from "styled-components";

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
        <EmptyCart>
          <p>Your Shopping Cart is empty.</p>
          <p>Let's start shopping!</p>

        </EmptyCart>
      );
    }
    return (
      <Fragment>
        <ul>
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
