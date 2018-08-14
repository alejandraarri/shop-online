import React, { Fragment } from "react";
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {
  render(){
    return (
      <Fragment>
        <input type="checkbox" id="inventory-toggle"/>
        <div className="inventory">
          <label className="inventory__toggle" htmlFor="inventory-toggle"></label>
          <h2 className="inventory__heading">Inventory</h2>
          <AddItemForm addItem={this.props.addItem}/>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
