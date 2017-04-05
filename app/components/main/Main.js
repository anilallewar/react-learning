import React from 'react';

class MainComponent extends React.Component {
  render () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}

export default MainComponent;
