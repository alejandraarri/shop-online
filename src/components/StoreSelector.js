import React from 'react';
import styled from "styled-components";
import style from "../style"

class StoreSelector extends React.Component {

  mySelect = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.mySelect.current.value;
    this.props.history.push(`/${storeName}`);
  }

  render() {
    return (
      <Wrapper>
        <Overlay>
          <Heading>Shop Online. Anywhere. Anytime.</Heading>
          <Form onSubmit={this.goToStore}>
            <Label>Select the Store</Label>
            <Select innerRef={this.mySelect} required>
              <option value=""></option>
              <option value="shoppers">Shoppers</option>
              <option value="valentina">Valentina</option>
              <option value="mnml">MNML</option>
            </Select>
            <Button type="Submit">Continue</Button>
          </Form>
          <LicenseLinkCredit>
            <span>Photo by <a href="https://unsplash.com/photos/YGzEX5yLKeA" target="_blank" rel="noreferrer noopener">Chris Murray</a></span>
          </LicenseLinkCredit>
        </Overlay>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100vh;
  background-image: url('images/landing.jpg');
  background-color: ${style["colors"].neutralDark};
  background-size: cover;
  background-blend-mode: luminosity;
  font-family: ${style["fonts"].copyFontFamily};
  text-align: center;
  color: ${style["colors"].neutralXlight};
`;

const Overlay = styled.div`
  height: 100vh;
  background: #0003;
  padding: 15vh 10%;
`;

const Heading = styled.h1`
  margin-bottom: 1em;
  font-size: 2.7em;
  font-weight: 400;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 60px 6%;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin: 5px 0;
  font-size: 1.1em;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 0;
  margin: 5px 0;
  padding: .5em;
  color: ${style["colors"].neutralXdark};
  -webkit-appearance: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: ${style["colors"].neutralDark};
  border-color: ${style["colors"].neutralDark};
  padding: .5em;
  margin: 5px 0;
  color: ${style["colors"].neutralLight};
  text-transform: uppercase;
  letter-spacing: .2px;
`;

const LicenseLinkCredit = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 3px;
  font-size: .8em;
  a {
    color: ${style["colors"].neutralXlight};
  }
`;



export default StoreSelector;
