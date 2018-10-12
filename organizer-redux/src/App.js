import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from './components/common/routes/Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Auth from './components/users/Auth';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({ loggedIn: true });
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ loggedIn: newProps.loggedIn });
  }

  render() {
    return (
      <div>
        <Header 
          loggedIn={this.state.loggedIn} />
        <div className="container margin-top-30">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
