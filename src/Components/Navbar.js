import React from 'react';
import { data } from '../data';
import {addMovieToList, handleAddToMovies } from '../actions'

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: ''
    };
  }

  handleAddToMovies = (movie) =>{
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults:false
    })
  }

  handleSearch = () =>{
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText))
  };

  handleChange = (e) =>{
    this.setState({
      searchText:e.target.value
    });
  };

    render(){
      return (
          <div className="nav">
            <div className="search-container">
              <input/>
              <button id="search-btn">Search</button>
            </div>
          </div>
    );
  }
}

export default Navbar;

