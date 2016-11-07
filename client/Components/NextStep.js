import React from 'react';

class NextStep extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.nextStep(this.props.newCase.currentStep);
  }

  render () {
    return (
      <div className="NextStep margin-top-large">
        <div className="mdl-button mdl-js-button mdl-button--colored mdl-button--raised" onClick={this.handleClick} >Next</div>
      </div>
    );
  }
}

export default NextStep;