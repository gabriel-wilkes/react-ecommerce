import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  //constructor() {
  //  super();
  //  this.goToStore = this.goToStore.bind(this);
  //}

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`);
    //second we're going to transition from / to /store/:storeId
    this.props.history.push(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* JSX special comment format */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
}

export default StorePicker;