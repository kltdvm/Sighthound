import React from 'react';
import classNames from 'classnames';

class SectionHeader extends React.Component {


  render () {
    const sectionHeaderClasses = [
      "SectionHeader"
    ];

    return (
      <div className={classNames(sectionHeaderClasses)} >
        <h5>{this.props.sectionTitle}</h5>
        <p>{this.props.sectionSubTitle}</p>
      </div>
    );
  }

}

export default SectionHeader;