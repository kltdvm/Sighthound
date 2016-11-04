import React from 'react';
import ListComponent from './ListComponent';
import ListHeader from './ListHeader';

class CaseList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="CaseList mdl-cell mdl-cell--12-col" >
        <ListHeader />
        <ListComponent />
      </div>
    );
  }
}

export default CaseList;