import React, { Fragment } from "react";
import AddItemForm from './AddItemForm';
import styled from "styled-components";

class Inventory extends React.Component {
  render(){
    return (
      <Fragment>
        <InventoryCheckbox type="checkbox" id="inventory-toggle" />
        <InventoryWrapper>
          <InventoryToogle htmlFor="inventory-toggle"></InventoryToogle>
          <InventoryHeading>Inventory</InventoryHeading>
          <AddItemForm addItem={this.props.addItem}/>
        </InventoryWrapper>
      </Fragment>
    );
  }
}

const InventoryCheckbox = styled.input`
  display: none;
`;

const InventoryWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 70px;
  background-color: #f8f9fa;
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  text-align: center;
  transition: max-height 0.5s ease-out;

  ${InventoryCheckbox}:checked + & {
    max-height: 500px;
    transition: max-height 0.5s ease-out;
  }
`;

const InventoryToogle = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  font-size: 1.5em;
  color: #777;
  cursor: pointer;
  transform:rotate(-90deg);

  &::before {
    content: '\00bb';
  }

  ${InventoryCheckbox}:checked + ${InventoryWrapper} & {
    transform:rotate(90deg);
  }
`;

const InventoryHeading = styled.h2`
  font-weight: 500;
`;
export default Inventory;
