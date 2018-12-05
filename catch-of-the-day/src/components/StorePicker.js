import React from 'react';

class StorePicker extends React.Component{
  render() {
    return (
      // { /* outsite comment !!!! */ }
      <form className="store-selector">
        { /* a comment inside html */ }
        <h3>Please enter a store</h3>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store ➤</button>
      </form>
    )
  }
}

export default StorePicker;
