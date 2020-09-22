import React from "react";
import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="#">
          Movies Spark
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  nav justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" tos="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" tos="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" tos="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                tos="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default nav;
