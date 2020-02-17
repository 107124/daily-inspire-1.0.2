import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from "./QuotesDatabase";
import "./styles.css";

let randomIndex = () => {
  let startWith = Math.floor(Math.random() * quotes.length);
  return startWith;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[randomIndex()].quote,
      author: quotes[randomIndex()].author
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 1);
  }

  // changeImage(category) {
  //   document.getElementById("quote").style.backgroundImage =
  //     'url("https://source.unsplash.com/320x240/?' + category + '")';
  // }

  handleClick = () => {
    this.shuffleQuotes(quotes);
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
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
