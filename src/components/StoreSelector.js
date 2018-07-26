import React, { Fragment } from 'react';

class StoreSelector extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>Shop online. Anywhere. Anytime.</h2>
        <form className="store-selector">
          <label>Which store do you prefer?</label>
          <select required>
            <option value=""></option>
            <option value="store1">Shoppers</option>
            <option value="store2">Valentina</option>
            <option value="store3">MNML</option>
          </select>
          <button type="Submit">Continue</button>
        </form>
      </Fragment>
    )
  }
}

export default StoreSelector;
