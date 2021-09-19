import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
// import quotes from '../reducers/quotes';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((q, i) => <QuoteCard  key={i} upvoteQuote={this.props.upvoteQuote} 
      downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} quote={q} />)
   
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            
               {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  quotes: state.quotes
})
const mapDispatchToProps = dispach => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  } ,dispach)
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
