import React from "react";
import axios from "axios";

export default function Search() {
  return (
    <div className="search">
      <form className="search-city">
        <input type="text" placeholder="Search city" id="search-city" />
        <input className="search-button" type="submit" value="Let's go!" />
      </form>
      <button className="current-location-button">
        Current location
        <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  );
}
