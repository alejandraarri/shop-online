import React from "react";
import { formatPrice } from "../utils";
import styled from "styled-components";
import style from "../style";

class Garment extends React.Component {
  render(){
    const { image, name, status, price } = this.props.details;
    const isAvailable = status === 'available';
    const filterVal = isAvailable ? 1 : 0.5;

    return (
      <GarmentItem name={this.props.name} opacity={filterVal}>
        <ImgWrapper>
          <img src={image} alt={name} />
          <Button name={this.props.name} disabled={!isAvailable}
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
    padding-bottom: ${props => {
      return props.name === "shoppers" ? "25px" : "0";
    }};
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: ${props => {
    return props.name === "valentina" ? "none" : "block";
    }};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: .5em;
  background: ${props => style[props.name].primaryBtnBg};
  border-color: ${props => style[props.name].primaryBtnBorder};
  color: ${props => style[props.name].primaryBtnColor};
  font-size: ${props => style[props.name].primaryBtnFontSize};
  text-transform: ${props => {
    return props.name === "shoppers" ? "uppercase" : "none";
    }};
  -webkit-appearance: none;

  &:hover {
    background: ${props => style[props.name].primaryBtnBgHover};
    border-color: ${props => style[props.name].primaryBtnBorderHover};
    border-width: ${props => {
      return style[props.name].primaryBtnBorderWidthHover ? style[props.name].primaryBtnBorderWidthHover : '1px';
    }};
    color: ${props => style[props.name].primaryBtnColorHover};
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
