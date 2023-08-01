import React from "react";
import "./Trips.css";

export default function Trips() {
  return (
    <section className="grid grid-4-columns trips">
      <div className="trips--city">
        <ul>
          <li>Berlin</li>
          <li>Date</li>
        </ul>
      </div>
      <div className="trips--city">
        <ul>
          <li>Tokyo</li>
          <li>Date</li>
        </ul>
      </div>
      <div className="trips--city">
        <ul>
          <li>Barcelona</li>
          <li>Date</li>
        </ul>
      </div>
      <div className="trips--city">
        <ul>
          <li>+</li>
          <li>Add Trip</li>
        </ul>
      </div>
    </section>
  );
}
