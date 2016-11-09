import React from 'react';
import classNames from 'classnames';

class ListHeader extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const inputGroupClasses = [
      "ListHeader",
      "ComponentHeader",
      this.props.classes
    ];

    return (
      <div className={classNames(inputGroupClasses)}>
        <h4>List Header</h4>
      </div>
    );
  }
}

export default ListHeader;