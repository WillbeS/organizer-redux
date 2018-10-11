import React, { Component } from 'react';
import './App.css';

import Routes from './components/common/routes/Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container margin-top-30">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
