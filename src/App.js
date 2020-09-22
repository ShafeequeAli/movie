import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/nav";
import Footer from "./component/Footer";
import Landing from "./component/home/Landing";
import store from "./store";
import { Provider } from "react-redux";
import Movie from "./component/home/Movie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
