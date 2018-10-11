import React, { Component } from 'react';
import './App.css';

import Routes from './components/common/routes/Routes';
import Navbar from './components/common/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <header className='jumbotron text-center margin-bottom-0'>
          <h1>Todo App Project</h1>
          <p>Created by Willbe.S</p>
        </header>
        <Navbar />
        <div className="container margin-top-30">
          <Routes />
        </div>

        <footer className='jumbotron text-center margin-bottom-0 margin-top-30'>
          <p>Footer</p>
        </footer>
      </div>

    );
  }
}

export default App;
