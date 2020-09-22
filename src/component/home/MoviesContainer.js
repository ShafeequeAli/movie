import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import Nodata from "../layout/Nodata";

export class MoviesContainer extends Component {
  render() {
    const { flims } = this.props;

    let content = flims ? (
      flims.map((movie, index) => <MovieCard movie={movie} key={index} />)
    ) : (
      <Nodata />
    );

    return (
      <div>
        <div className="row">{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flims: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
