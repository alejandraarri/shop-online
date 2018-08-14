import React from "react";
import Garment from './Garment';

class Collection extends React.Component {
  render(){
    return (
      <div className="collection">
        <h1 className="valentina__heading">Valentina</h1>
        <p className="valentina__tagline">S/S Collection 2018</p>
        <ul className="garment__list">
          {Object.keys(this.props.collection).map(key => (
            <Garment
              key={key}
              index={key}
              details={this.props.collection[key]}
              addToCart={this.props.addToCart}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Collection;
