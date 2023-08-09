import React, { useState } from "react";
import "./Modal.css";
import Form from "./Form";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = function () {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn--modal" onClick={toggleModal}>
        <p>+ </p>
        <br />
        <p>Add trip</p>
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            {" "}
          </div>
          <div className="modal--content">
            <p className="modal--content__description">Create trip</p>
            <hr />
            <Form />
            <button className="close--modal" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
