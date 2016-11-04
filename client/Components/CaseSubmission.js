import React from 'react';
import NavBar from './NavBar';
import SubNav from './SubNav';
import Wizard from './Wizard';

class CaseSubmission extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    console.log('state from component', this.props);
    
    
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" >
        <NavBar />
        <SubNav {...this.props} />
        <div className="mdl-grid Body" >
          <Wizard {...this.props} />
        </div>
      </div>
    );
  }

}

export default CaseSubmission;