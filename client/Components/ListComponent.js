import React from 'react';
import ListItem from './ListItem';

class ListComponent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul className="ListComponent mdl-list" >
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

export default ListComponent;