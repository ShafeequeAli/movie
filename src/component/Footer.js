import React from "react";

function Footer() {
  return (
    <div className="container-flex">
      <div className="card bg-secondary text-white ">
        <div className="card-body nav justify-content-center">
          <p className="card-text">
            For further supporting info about movies arround the world and
            getting the premium access to the movie world you can make a little
            pressure on text you see in blue color
          </p>
          <a
            href="https://www.imdb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
