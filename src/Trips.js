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
    </div>
  );
}
