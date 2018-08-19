import React from "react";
import Garment from './Garment';
import styled from "styled-components";

class Collection extends React.Component {

  render(){
    return (
      <Wrapper>
        <Heading>{this.props.name}</Heading>
        <Tagline>S/S Collection 2018</Tagline>
        <List className="garment__list">
          {this.props.collection.map((item, key) => (
            <Garment
              key={key}
              index={key}
              details={item}
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
  font-family: "Libre Baskerville", Times, serif;
  font-weight: normal;
`;

const Tagline = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default Collection;
