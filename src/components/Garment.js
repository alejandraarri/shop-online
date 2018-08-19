import React from "react";
import { formatPrice } from "../utils";
import styled from "styled-components";

class Garment extends React.Component {
  render(){
    const { image, name, status, price } = this.props.details;
    const isAvailable = status === 'available';
    const filterVal = isAvailable ? 1 : 0.5;

    return (
      <GarmentItem opacity={filterVal}>
        <ImgWrapper>
          <img src={image} alt={name} />
          <Button disabled={!isAvailable}
            onClick={() => this.props.addToCart(this.props.index)}>Add To Cart</Button>
        </ImgWrapper>
        <Heading>{name}</Heading>
        <p>{formatPrice(price)}</p>
      </GarmentItem>
    );
  }
}

const GarmentItem = styled.li`
  width: 50%;
  padding: 1em;
  filter: opacity(${props => props.opacity});
  img {
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: .5em;
  background-color: #bfa678;
  border-color: #bfa678;
  color: #f3f0eb;
  font-size: .9em;
  -webkit-appearance: none;

  &:hover {
    background-color: #d1bf9e;
    border-color: #d1bf9e;
    color: #ffffff;
  }
  ${GarmentItem}:hover & {
    display: ${props => props.disabled ? 'none' : 'block'};
  }
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  letter-spacing: .2px;
`;

export default Garment;
