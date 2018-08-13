import React from "react";

class AddItemForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createItem = (event) => {
    event.preventDefault();
    const garment = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    this.props.addItem(garment);
    event.currentTarget.reset();
  };

  render(){
    return (
        <form className="item__edit-form" onSubmit={this.createItem}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">In Stock</option>
            <option value="unavailable">Sold Out</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" ></textarea>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
          <button type="submit">Add Garment</button>
        </form>
    );
  }
}

export default AddItemForm;
