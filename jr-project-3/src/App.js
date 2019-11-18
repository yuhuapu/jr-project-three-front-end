import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Navigation from './UI/Navigation';
import Footer from "./UI/Footer";
import Routes from './routes/Routes';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
