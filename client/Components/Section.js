import React from 'react';
import classNames from 'classnames';

class Section extends React.Component {


  render () {
    const sectionClasses = [
      "Section"
    ];

    return (
      <section className={classNames(sectionClasses)} >
        {this.props.children}
      </section>
    );
  }

}

export default Section;