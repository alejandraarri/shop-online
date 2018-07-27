import React from 'react';

class StoreSelector extends React.Component {
  render() {
    return (
      <div className="storeSelector">
        <h1>Shop online. Anywhere. Anytime.</h1>
        <form>
          <label>Which store do you prefer?</label>
          <select required>
            <option value=""></option>
            <option value="store1">Shoppers</option>
            <option value="store2">Valentina</option>
            <option value="store3">MNML</option>
          </select>
          <button type="Submit">Continue</button>
        </form>
      </div>
    )
  }
}

export default StoreSelector;
