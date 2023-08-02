import React from "react";
import "./Trips.css";

export default function Trips() {
  return (
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
  );
}
