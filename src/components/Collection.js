import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Garment from "./Garment";
import style from "../style"

class Collection extends React.Component {
  render(){
    const { name, collection, addToCart } = this.props;
    console.log("props", this.props);
    return (
      <Wrapper>
        <Heading name={name}>{name}</Heading>
        <Tagline name={name}>
          {name === "valentina"? "S/S ": "A/W "}
Collection 2018
        </Tagline>
        <List className="garment__list">
          {collection.map((item, key) => (
            <Garment
              key={key}
              index={key}
              details={item}
              name={name}
              addToCart={addToCart}
            />
          ))}
        </List>
      </Wrapper>
    );
  }
}

Collection.propTypes = {
  name: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  max-height: 90vh;
  overflow: scroll;
`;

const Heading = styled.h1`
  font-family: ${props => style[props.name].mainHeadingFontFamily};
  font-weight: normal;
  text-transform: ${props => style[props.name].mainHeadingTextTransform ? style[props.name].mainHeadingTextTransform : "none"};
`;

const Tagline = styled.p`
  text-transform: uppercase;
  font-weight: ${props => style[props.name].taglineFontWeight};
  letter-spacing: .2px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default Collection;
