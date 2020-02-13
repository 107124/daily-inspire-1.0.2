import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const html = document.documentElement;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div className="fadeIn" key={Math.random()}>
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button id="newquote" onClick={this.props.handleClick}>
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;
