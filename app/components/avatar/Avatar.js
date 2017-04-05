import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './avatar.cssmodule.css';

class ProfilePic extends React.Component {
  render() {
    return (<img alt="user" src={this.props.imageUrl} className="image"/>);
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

class Avatar extends React.Component {

  render() {
    return (
      <div className="index" styleName="avatar-component">
        <ProfilePic imageUrl={this.props.user.imageUrl}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
}

Avatar.displayName = 'Avatar';
Avatar.propTypes = {};
Avatar.defaultProps = {};

export default Avatar;
