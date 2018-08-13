import React from "react";
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {
  render(){
    return (
      <div className="inventory">
        <h2 className="inventory__heading">Inventory</h2>
        <AddItemForm />
      </div>
    );
  }
}

export default Inventory;
