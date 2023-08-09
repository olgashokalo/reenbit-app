import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Field for a city */}
      <div className="city--input">
        <label htmlFor="city" className="form-label">
          <sup>*</sup>City
        </label>

        <input
          {...register("name")}
          id="country"
          type="text"
          className="form-control"
          placeholder="Please select a city"
        />
      </div>
      {/* Field for start date */}
      <div className="startDate--input">
        <label htmlFor="startDate" className="form-label">
          <sup>*</sup>Start date
        </label>
        <input
          {...register("start")}
          id="start-date"
          type="text"
          className="form-control"
          placeholder="Select date"
        />
        {/* Field for the end date */}
      </div>
      <div className="endDate--input">
        <label htmlFor="endDate" className="form-label">
          <sup>*</sup>End date
        </label>

        <input
          {...register("end")}
          id="endDate"
          type=""
          className="form-control"
          placeholder="Select date"
        />
      </div>
      {/* Save button */}
      <hr />
      <div className="formButtons">
        <button type="submit" className="formCancelButton">
          {" "}
          Cancel{" "}
        </button>
        <button type="submit" className="formSaveButton">
          {" "}
          Save{" "}
        </button>
      </div>
    </form>
  );
};
export default Form;
