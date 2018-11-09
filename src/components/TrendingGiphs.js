import React, { Component } from 'react';
import axios from 'axios';
import api_key from '../../config.js';

class TrendingGiphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingGiphs: []
    };
  }

  componentDidMount() {
    this.getTrendingGiphs();
  }

  getTrendingGiphs = () => {
    axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: api_key
      }
    })
      .then(res => {this.setState({trendingGiphs: res.data.data})})
      .catch(err => {console.log(`error retrieving giphs: ${err}`)})
  }

  render() {
    if (this.state.trendingGiphs.length) {
      return (
        <div>
          <h1>Trending Giphs</h1>
          <img src={this.state.trendingGiphs[0].images.downsized.url} />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default TrendingGiphs;

