import React, { Component } from 'react';
import Giph from './Giph';
import PaginationBar from './PaginationBar';
import axios from 'axios';
import api_key from '../../config.js';

class TrendingGiphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingGiphs: [],
    };
  }

  componentDidMount() {
    this.getTrendingGiphs();
  }

  getTrendingGiphs = () => {
    axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: api_key,
        limit: 5,
      }
    })
      .then(res => {this.setState({trendingGiphs: res.data.data})})
      .catch(err => {console.log(`error retrieving giphs: ${err}`)})
  }

  render() {
    const { trendingGiphs } = this.state;
    // this code runs once the state is updated with the trending giphs,
    // otherwise, nothing is rendered
    if (trendingGiphs.length) {
      return (
        <div>
          <h1>Trending Giphs</h1>
          {trendingGiphs.map(giph => <Giph url={giph.images.downsized.url} />)}
          <PaginationBar />
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

