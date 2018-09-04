import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatPrice } from "../utils";

class ShoppingCartItem extends React.Component {
  renderPrice(){
    const { collection, index, cart } = this.props;
    const garment = collection[index];
    const count = cart[index];
    const isAvailable = garment.status === "available";
    if(!isAvailable) {
      return <div>Sold out</div>;
    }
    return (
      <div>
        <span>
          {count}
          {count === 1 ? " unit" : " units"}
        </span>
        <Price>{formatPrice(count * garment.price)}</Price>
      </div>
    );
  }
  render(){
    const { collection, index} = this.props;
    const garment = collection[index];
    return (
      <Item>
        <ImgWrapper>
          <img src={garment.image} alt={garment.name} />
        </ImgWrapper>
        <Details>
          <Name>{garment.name}</Name>
          {this.renderPrice()}
        </Details>
      </Item>
    );
  }
}

ShoppingCartItem.propTypes = {
  collection: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired
};

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: .8em 0;
  border-bottom: 1px solid #eee;
`;

const ImgWrapper = styled.div`
  max-width: 20%;
  img {
    width: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  position: relative;
  max-width: 80%;
  padding-left: 1em;
  text-align: left;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  letter-spacing: .2px;
`;

const Price = styled.div`
  float: right;
`;

export default ShoppingCartItem;
