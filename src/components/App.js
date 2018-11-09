import React, { Component } from 'react';
import axios from 'axios';
import Trending from './Trending';
import api_key from '../../config.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    }
  }

  getTrending = () => {
    axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: api_key
      }
    })
      .then(res => {this.setState({trending: res.data.data})});
  }

  handleClick = () => {
    this.getTrending();
  }

  render() {
    return (
      <div>
        <Trending 
          handleClick={this.handleClick}
          trending={this.state.trending}
        />
      </div>
    );
  }
}

export default App;
