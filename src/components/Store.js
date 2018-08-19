import React from "react";
import Collection from './Collection';
import ShoppingCart from './ShoppingCart';
import Inventory from './Inventory';
import styled from "styled-components";
import style from "../style";

class Store extends React.Component {
  state = {
    collection: [],
    cart: {},
    hasData: false
  };

  addItem = garment => {
    const collection = { ...this.state.collection };
    collection[`garment${Date.now()}`] = garment;
    this.setState({ collection });
  };

  addToCart = key => {
    const cart = { ...this.state.cart };
    cart[key] = cart[key] + 1 || 1;
    this.setState({ cart });
  };
  componentWillMount(){
    var that = this;
    fetch("http://localhost:3002/"+ that.props.name)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        that.setState({ collection:myJson, hasData:true });
      });
  };

  render(){
    if (!this.state.hasData) {
      return (<div>Loading...</div>);
    }
    return (
      <Wrapper name={this.props.name}>
          <Collection collection={this.state.collection} addToCart={this.addToCart} name={this.props.name}/>
          <ShoppingCart collection={this.state.collection} cart={this.state.cart}/>
          <Inventory addItem={this.addItem}/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${props => style[props.name].copyFontFamily};
  text-align: center;
`;

export default Store;
