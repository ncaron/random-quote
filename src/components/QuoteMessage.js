import React from 'react';
import PropTypes from 'prop-types';

const QuoteMessage = ({ quoteData }) => {
  return (
    <div>
      <p className="quote">
        <i className="fa fa-quote-left" />
        {quoteData.quote}
      </p>
      <p className="author">{quoteData.author}</p>
    </div>
  );
};

QuoteMessage.propTypes = {
  quoteData: PropTypes.object.isRequired,
};

export default QuoteMessage;
