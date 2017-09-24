import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchQuote } from '../actions/index';
import QuoteMessage from '../components/QuoteMessage';
import Buttons from '../components/Buttons';

class QuoteBox extends Component {
  constructor(props) {
    super(props);

    this.onBtnClick = this.onBtnClick.bind(this);
    this.getTwitterLink = this.getTwitterLink.bind(this);
    this.props.fetchQuote();
  }

  componentWillUpdate() {
    this.props.changeColor();
  }

  onBtnClick() {
    this.props.fetchQuote();
  }

  getTwitterLink() {
    const { quote, author } = this.props.quoteData;
    const twitterText = `"${quote}" - ${author}`;

		return `https://www.twitter.com/home?status=${encodeURIComponent(twitterText)}`;
  }

  render() {
    return (
      <div className="quoteBox">
        <QuoteMessage quoteData={ this.props.quoteData } />
        <Buttons
          onBtnClick={ this.onBtnClick }
          twitterLink={ this.getTwitterLink() } />
      </div>
    );
  }
}

QuoteBox.propTypes = {
  quoteData: PropTypes.object.isRequired,
  fetchQuote: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired
};

function mapStateToProps({ quoteData }) {
  return { quoteData };
}

export default connect(mapStateToProps, { fetchQuote })(QuoteBox);
