import React from 'react';

class NewCaseButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="NewCase">
        <a href="/new" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-color--green-600" >+ Create New Case</a>
      </div>
    );
  }
}

export default NewCaseButton;