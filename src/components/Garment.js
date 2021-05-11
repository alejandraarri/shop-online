import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatPrice } from "../utils";
import style from "../style";

class Garment extends React.Component {
  render() {
    const {
      details, index, addToCart, name: storeName
    } = this.props;
    const {
      image, name, status, price
    } = details;
    const isAvailable = status === "available";
    const filterVal = isAvailable ? 1 : 0.5;

    return (
      <GarmentItem name={name} opacity={filterVal}>
        <ImgWrapper>
          <img src={image} alt={name} />
          <Button
            name={storeName}
            disabled={!isAvailable}
            onClick={() => addToCart(index)}>
            Add To Cart
          </Button>
        </ImgWrapper>
        <Heading>{name}</Heading>
        <p>{formatPrice(price)}</p>
      </GarmentItem>
    );
  }
}

Garment.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};

const GarmentItem = styled.li`
  width: 100%;
  padding: 1em;
  filter: opacity(${(props) => props.opacity});
  img {
    width: 100%;
    padding-bottom: ${(props) => (props.name === "shoppers" ? "25px" : "0")};
  }
  @media screen and (min-width: 425px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: ${(props) => (props.name === "valentina" ? "none" : "block")};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: .5em;
  background: ${(props) => style[props.name].primaryBtnBg};
  border-color: ${(props) => style[props.name].primaryBtnBorder};
  border-style: unset;
  color: ${(props) => style[props.name].primaryBtnColor};
  font-size: ${(props) => style[props.name].primaryBtnFontSize};
  text-transform: ${(props) => (props.name === "shoppers" ? "uppercase" : "none")};
  -webkit-appearance: none;

  &:hover {
    background: ${(props) => style[props.name].primaryBtnBgHover};
    border-color: ${(props) => style[props.name].primaryBtnBorderHover};
    border-width: ${(props) => (style[props.name].primaryBtnBorderWidthHover ? style[props.name].primaryBtnBorderWidthHover : "1px")};
    color: ${(props) => style[props.name].primaryBtnColorHover};
  }
  ${GarmentItem}:hover & {
    display: ${(props) => (props.disabled ? "none" : "block")};
  }
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8em;
  letter-spacing: .2px;
`;

export default Garment;
