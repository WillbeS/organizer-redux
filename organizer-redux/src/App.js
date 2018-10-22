import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from './components/common/routes/Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { requestAuthentication } from './actions/authActions';

class App extends Component {
  componentWillMount() {
    this.props.isAuthenticated();
  }

  render() {
    return (
      <div>
        <Header 
          loggedIn={this.props.loggedIn} />
        <div className="container margin-top-30">
          <Routes onEnter={this.onRouterEnter} someProp='Some prop!' />
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
    isAuthenticated: () => dispatch(requestAuthentication()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
