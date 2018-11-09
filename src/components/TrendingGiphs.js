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
      offset: 0,
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
        offset: this.state.offset, //offset is set in increments of 5
      }
    })
      .then(res => {this.setState({trendingGiphs: res.data.data})})
      .catch(err => {console.log(`error retrieving giphs: ${err}`)})
  }

  handlePageClick = (data) => {
    //page is a number that corresponds to the page that is clicked
    //example: page 2 => 1 so offset is 5, meaning that the next 5 giphs are displayed
    const page = data.selected;
  	this.setState({offset: page * 5}, () => {
  	  this.getTrendingGiphs();
  	})
  }

  render() {
    const { trendingGiphs } = this.state;
    // this code runs once the state is updated with the trending giphs,
    // otherwise, nothing is rendered
    if (trendingGiphs.length) {
      return (
        <div>
          <h1>Trending Giphs</h1>
          <div className='giphs'>
            {trendingGiphs.map(giph => <Giph url={giph.images.downsized.url} title={giph.title} />)}
          </div>
          <PaginationBar handlePageClick={this.handlePageClick}/>
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

