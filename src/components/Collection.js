import React from "react";
import Garment from './Garment';
import styled from "styled-components";
import style from "../style"

class Collection extends React.Component {

  render(){
    return (
      <Wrapper>
        <Heading name={this.props.name}>{this.props.name}</Heading>
        <Tagline name={this.props.name}>{this.props.name === "valentina"? "S/S ": "A/W "}Collection 2018</Tagline>
        <List className="garment__list">
          {this.props.collection.map((item, key) => (
            <Garment
              key={key}
              index={key}
              details={item}
              name={this.props.name}
              addToCart={this.props.addToCart}
            />
          ))}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 50%;
  max-height: 90vh;
  overflow: scroll;
`;

const Heading = styled.h1`
  font-family: ${props => style[props.name].mainHeadingFontFamily};
  font-weight: normal;
  text-transform: ${props => {
    return style[props.name].mainHeadingTextTransform ? style[props.name].mainHeadingTextTransform : 'none';
  }};
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
