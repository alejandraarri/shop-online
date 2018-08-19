import React, { Fragment } from "react";
import AddItemForm from './AddItemForm';
import styled from "styled-components";

class Inventory extends React.Component {
  render(){
    return (
      <Fragment>
        <Checkbox type="checkbox" id="inventory-toggle" />
        <Wrapper>
          <Toogle htmlFor="inventory-toggle"></Toogle>
          <Heading>Inventory</Heading>
          <AddItemForm addItem={this.props.addItem}/>
        </Wrapper>
      </Fragment>
    );
  }
}

const Checkbox = styled.input`
  display: none;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 70px;
  background-color: #f8f9fa;
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  text-align: center;
  transition: max-height 0.5s ease-out;

  ${Checkbox}:checked + & {
    max-height: 500px;
    transition: max-height 0.5s ease-out;
  }
`;

const Toogle = styled.label`
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

  ${Checkbox}:checked + ${Wrapper} & {
    transform:rotate(90deg);
  }
`;

const Heading = styled.h2`
  font-weight: 500;
`;
export default Inventory;
