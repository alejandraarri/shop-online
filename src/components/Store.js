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
    const collection = this.state.collection.slice();
    const lastIndex = collection.slice(-1)[0].id + 1;
    collection.push({ id: lastIndex, ...garment });
    this.setState({ collection });
  };

  addToCart = key => {
    const cart = { ...this.state.cart };
    cart[key] = cart[key] + 1 || 1;
    this.setState({ cart });
  };

  saveShopName = name => {
    const savedName = localStorage.getItem("shoponline.name");
    if(!savedName || savedName !== name) {
      localStorage.setItem("shoponline.name", name);
    }
  };

  getShopName(){
    return localStorage.getItem("shoponline.name");
  };

  componentWillMount(){
    var that = this;
    that.saveShopName(that.props.name);
    const collectionUrl = "http://"+ window.location.hostname +":3001/"+ that.getShopName();
    fetch(collectionUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log("Collection successfully loaded");
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
          <ShoppingCart collection={this.state.collection} cart={this.state.cart} name={this.props.name}/>
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
