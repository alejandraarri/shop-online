import React from 'react';

class StoreSelector extends React.Component {

  mySelect = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.mySelect.current.value;
    this.props.history.push(`/${storeName}`);
  }

  render() {
    return (
      <div className="storeSelector">
        <h1>Shop online. Anywhere. Anytime.</h1>
        <form onSubmit={this.goToStore}>
          <label>Which store do you prefer?</label>
          <select ref={this.mySelect} required>
            <option value=""></option>
            <option value="shoppers">Shoppers</option>
            <option value="valentina">Valentina</option>
            <option value="mnml">MNML</option>
          </select>
          <button type="Submit">Continue</button>
        </form>
      </div>
    )
  }
}

export default StoreSelector;
