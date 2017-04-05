import React from 'react';
import YeomanImage from '../YeomanImage';
import '../app.css';

class HelloComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Hello {this.props.name}!
        </div>
        {/* Since the HelloComponent is linked to '/' route it is always visible
        and we need to render the children route content under it
        {this.props.children}
        */}
      </div>
    );
  }
}

HelloComponent.defaultProps = {
  name: 'Allewar'
};

export default HelloComponent;
