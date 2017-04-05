import React from 'react';
import PromptComponent from '../components/prompt/Prompt'

class PromptContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: props.username
    }
  }

  handleUpdateUser(e) {
    this.setState ({
      username: e.target.value
    });
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username:''
    })

    if (this.props.routeParams.playerOne) {
      // route parameter called playerOne exists which means we are at player two and
      // need to go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    } else {
      //currently at player one, go to player 2
      this.context.router.push('/playerTwo/' + username)
    }
  }

  render() {
    return (
      <PromptComponent
        onUpdateUser={this.handleUpdateUser.bind(this)}
        onSubmitUser={this.handleSubmitUser.bind(this)}
        username={this.state.username}
        header={this.props.route.header}/>
    )
  }
}

PromptContainer.defaultProps = {
  username: 'anilallewar'
};

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer;
