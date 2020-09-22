import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";

export class Search extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <div className="m-5">
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for movies,tv shows"
            aria-label="Search"
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.movies,
});

export default connect(mapStatesToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(Search);
