import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <header>
      <div className='header'>
        Squares.io
      </div>
    </header>
  )
}


const Footer = (props) => {
  return (
    <footer>
      Lauren | Syed | Abrian
    </footer>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <Footer />
      </div>
    );
  }
}

export default App;
