import React from 'react';
import Hamburger from './Hamburger';
import UserAcct from './UserAcct';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="NavBar mdl-layout__header">
        <header className="mdl-layout__header-row mdl-color--cyan" >
          <Hamburger />
          <h2><a href="/">Sighthound</a></h2>
          <UserAcct />
        </header>
      </div>
    );
  }
}

export default NavBar;