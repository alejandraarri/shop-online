import React from "react";
import styled from "styled-components";

class AddItemForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  imageRef = React.createRef();

  validateItem(){
    return this.nameRef.current.value && this.priceRef.current.value && this.imageRef.current.value;
  }

  createItem = (event) => {
    event.preventDefault();
    if(this.validateItem()){
      const garment = {
        name: this.nameRef.current.value,
        price: parseFloat(this.priceRef.current.value),
        status: this.statusRef.current.value,
        image: this.imageRef.current.value
      }
      this.props.addItem(garment);
      event.currentTarget.reset();
    }
  };

  render(){
    return (
        <Form className="item__edit-form" onSubmit={this.createItem}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">In Stock</option>
            <option value="unavailable">Sold Out</option>
          </select>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
          <button type="submit">Add Garment</button>
        </Form>
    );
  }
}

const Form = styled.form`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 80vw;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 3px;
  overflow: hidden;

  input, select {
    width: 33.33%;
    background: #fff;
    border: 0;
    border-bottom: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 0;
    padding: 10px;
    font-size: 1em;
    line-height: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:nth-child(2) {
    border-right: 1px solid rgba(0, 40, 100, 0.12);
    border-left: 1px solid rgba(0, 40, 100, 0.12);
  }
  input:last-of-type {
    width: 100%;
  }
  button {
    width: 100%;
    border: 0;
    padding: .5em;

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;

export default AddItemForm;
