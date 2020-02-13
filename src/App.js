import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from "./QuotesDatabase";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // changeImage(category) {
  //   document.getElementById("quote").style.backgroundImage =
  //     'url("https://source.unsplash.com/320x240/?' + category + '")';
  // }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes);
    // this.changeImage("nature");
  };

  render() {
    return (
      <div className="page-container">
        <div className="title">Daily Inspire</div>
        <QuoteAndAuthor handleClick={this.handleClick} {...this.state} />
        {/* <button onclick={this.changeImage('fire')}>Fire</button> */}
      </div>
    );
  }
}

export default App;
