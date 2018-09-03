import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";

class Inventory extends React.Component {
  render(){
    const { addItem } = this.props;
    return (
      <Fragment>
        <Checkbox type="checkbox" id="inventory-toggle" />
        <Wrapper>
          <Toogle htmlFor="inventory-toggle" />
          <Heading>Inventory</Heading>
          <AddItemForm addItem={addItem} />
        </Wrapper>
      </Fragment>
    );
  }
}

Inventory.propTypes = {
  addItem: PropTypes.func.isRequired
};

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
