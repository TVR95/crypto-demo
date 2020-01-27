import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/fonts.css"
import './styles/styles.css';

import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/crypto-demo" component = { Home } />
        <Route path="/stocks" component= { Stocks } />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
