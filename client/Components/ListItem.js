import React from 'react';

class ListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className="ListItem mdl-list__item mdl-button--raised" >
        <div className="ComponentHeader left" >
          <div className="h6" >
            Mr. Snugglesworthington
          </div>
        </div>
        <div className="Space"></div>
        <div>Status</div>
      </li>
    );
  }
}

export default ListItem;