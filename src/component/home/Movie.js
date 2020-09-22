import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Nodata from "../layout/Nodata";
import { fetchMovie, setLoading } from "../../actions/searchActions";

// we can <React.Fragment>...........</React.Fragment>

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="col m-4 row">
        <div className="card">
          <img src={movie.Poster} className="card-img-top" alt="Poster" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p>Description:{movie.Plot}</p>
          <table className="table">
            <tr>
              <th scope="col">Year: {movie.Year}</th>
            </tr>
            <tr>
              <th scope="col">imdbRating: {movie.imdbRating}</th>
            </tr>
            <tr>
              <th scope="col">Type: {movie.Type}</th>
            </tr>
            <tr>
              <th scope="col">Language: {movie.Language}</th>
            </tr>
            <tr>
              <th scope="col">Released: {movie.Released}</th>
            </tr>
            <tr>
              <th scope="col">Actors: {movie.Actors}</th>
            </tr>
            <tr>
              <th scope="col">Awards: {movie.Awards}</th>
            </tr>
            <tr>
              <th scope="col">BoxOffice: {movie.BoxOffice}</th>
            </tr>
            <tr>
              <th scope="col">Country: {movie.Country}</th>
            </tr>
            <tr>
              <th scope="col">DVD: {movie.DVD}</th>
            </tr>
            <tr>
              <th scope="col">Director: {movie.Director}</th>
            </tr>
            <tr>
              <th scope="col">Genre: {movie.Genre}</th>
            </tr>

            <tr>
              <th scope="col">Metascore: {movie.Metascore}</th>
            </tr>

            <tr>
              <th scope="col">Production: {movie.Production}</th>
            </tr>
            <tr>
              <th scope="col">Rated: {movie.Rated}</th>
            </tr>

            <tr>
              <th scope="col">Runtime: {movie.Runtime}</th>
            </tr>

            <tr>
              <th scope="col">Website: {movie.Website}</th>
            </tr>
            <tr>
              <th scope="col">Writer: {movie.Writer}</th>
            </tr>

            <tr>
              <th scope="col">imdbVotes: {movie.imdbVotes}</th>
            </tr>
          </table>
        </div>
      </div>
    );
    let data = movie ? movieInfo : <Nodata />;
    let content = loading ? <Spinner /> : data;
    return (
      <div className="container  justify-content-center">
        {content}
        <div>
          <Link className="btn btn-secondary text-warning mb-5 ml-5" to="/">
            Back To Search
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
