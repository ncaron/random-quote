import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import COLORS from '../colors';

function changeColor() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  document.body.style.backgroundColor = color;
  document.body.style.color = color;
  document.getElementsByClassName('newQuote')[0].style.backgroundColor = color;
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Random Quote</h1>
        <QuoteBox changeColor={ changeColor } />
        <p className="footer">By <a href="https://github.com/ncaron" target="_blank">Niko Caron</a></p>
      </div>
    );
  }
}

export default App;
