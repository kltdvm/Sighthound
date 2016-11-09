import React from 'react';
import NavBar from './NavBar';
import NewCaseButton from './NewCaseButton';
import CaseList from './CaseList';

class Dashboard extends React.Component {

  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" >
        <NavBar />
        <NewCaseButton />
        <div className="mdl-grid Body" >
        </div>
      </div>
    );
  }

}

export default Dashboard;