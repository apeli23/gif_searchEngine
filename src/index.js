// React library, which gives us the code we need to create and manage components
import React from 'react';
// helps us manipulate elements within the browser.
import ReactDOM from 'react-dom';
// import searchbar component
import SearchBar from './searchBar';
// an App component that will serve as the parent for the rest of our application.

import GifList from './gifsList';

import request from 'superagent';

// import './app';

import './styles/styles.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    }
  }
  // React's render function allows us to output JSX,
  //  which is syntax falling about halfway between
  //  XML and HTML that creates JavaScript objects for us.
 
  // Add Search to the render method as a self-closing component.
  handleTermChange = (term) => {
    // const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=W9SuSA9yFgObbblbEL7aR948ckN0nN72`;
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=W9SuSA9yFgObbblbEL7aR948ckN0nN72`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
}


  render() {
      return (
      <div>
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs}/>
      </div>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
//  In the ReactDOM.render() method — not to be confused with the render() method
//  in React.Component — we link our App component  withthe empty <div id="app"></div> 
// in our index.html file.