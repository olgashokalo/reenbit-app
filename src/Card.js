import React from "react";
import "./Card.css";
import Modal from "./Modal";

export default function Card(props) {
  return (
    <div className="cards">
      {" "}
      <div className="card--container">
        <img
          className="card--image"
          src="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Card"
        />
        <h3 className="card--city">{props.city}</h3>
        <p className="card--date"> {props.date}</p>
      </div>
      <div className="card--container">
        <div className="addTripButton">
          <Modal />
        </div>
      </div>
    </div>
  );
}
