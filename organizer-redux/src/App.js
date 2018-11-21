import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from './components/common/routes/Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { requestAuthentication } from './actions/authActions';
import { fetchAll } from './actions/listActions';


class App extends Component {
  componentDidMount() {
    this.props.isAuthenticated();
    this.props.fetchAllLists();
  }

  render() {
    return (
      <div>
        <Header
          loggedIn={this.props.loggedIn} />
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
    remoteList: state.list.remote, //will use those when making preloader
    errorList: state.list.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isAuthenticated: () => dispatch(requestAuthentication()),
    fetchAllLists: () => dispatch(fetchAll()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
