import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className = "container">
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
