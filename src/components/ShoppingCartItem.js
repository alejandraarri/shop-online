import React from "react";
import { formatPrice } from "../utils";
import styled from "styled-components";

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
        <span>{count}{count === 1 ? " unit" : " units"}</span>
        <Price>{formatPrice(count * garment.price)}</Price>
      </div>
    );
  }
  render(){
    const garment = this.props.collection[this.props.index];
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
