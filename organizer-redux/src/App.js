import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from './components/common/routes/Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    if (localStorage.authToken) {
      this.setState({ loggedIn: true });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loginSuccess) {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} />
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
    loginSuccess: state.login.success,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
