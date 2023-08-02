import React from "react";
import "./Trips.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Trips() {
  return (
    <div className="Trips">
      <form className="Trips--SearchForm">
        <button type="submit" className="submitButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input type="search" placeholder="Search your trip" />
      </form>
      <div className="grid grid-4-columns">
        <div className="trips--city">
          <ul className="trips--description">
            <li>image</li>
            <li>Berlin</li>
            <li>Date</li>
          </ul>
        </div>
        <div className="trips--city">
          <ul className="trips--description">
            <li>image</li>
            <li>Tokyo</li>
            <li>Date</li>
          </ul>
        </div>
        <div className="trips--city">
          <ul className="trips--description">
            <li>image</li>
            <li>Barcelona</li>
            <li>Date</li>
          </ul>
        </div>
        <div className="trips--city">
          <ul className="trips--description">
            <li>+</li>
            <li>Add Trip</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
