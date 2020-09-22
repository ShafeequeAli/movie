import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    let data = (
      <div className="mt-5 row ">
        <div className="card ">
          <img className="w-50 " src={movie.Poster} alt="movie cover"></img>
          <div className="card-body">
            <h4 className="card-title">{movie.Title} </h4>
            <p>The content type: {movie.Type}</p>
            <p>The Year of developed: {movie.Year}</p>

            <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
              More
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    );
    return <div>{data}</div>;
  }
}

export default connect()(MovieCard);
