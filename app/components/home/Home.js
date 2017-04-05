import React from 'react';
import {Link} from 'react-router';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="header-text">GitHub Battle</div>
        <p className="lead normal-text">Some fancy motto</p>
        <Link to='/playerOne'>
          <button className="btn btn-lg btn-success" type='button'>Get Started</button>
        </Link>
      </div>
    )
  }
}

export default HomeComponent;
