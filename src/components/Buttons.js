import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onBtnClick, twitterLink }) => {
  return (
    <div>
      <button
        className="newQuote"
        onClick={ onBtnClick }>New Quote</button>
      <a
        className="tweet"
        href={ twitterLink }
        target="_blank">
        <i className="fa fa-twitter-square" />
      </a>
    </div>
  );
};

Buttons.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  twitterLink: PropTypes.string.isRequired
};

export default Buttons;
