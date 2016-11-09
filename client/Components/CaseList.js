import React from 'react';
import ListComponent from './ListComponent';
import ListHeader from './ListHeader';

class CaseList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="CaseList" >
        <ListHeader classes={"left"} />
        <ListComponent />
      </div>
    );
  }
}

export default CaseList;