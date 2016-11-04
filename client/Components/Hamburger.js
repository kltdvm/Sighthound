import React from 'react';

class Hamburger extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="Hamburger" >
        <i className="material-icons">menu</i>
      </div>
    );
  }
}

export default Hamburger;