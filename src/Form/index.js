import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    setButtonName("Done");
    onSubmit(event);
  }
  const [disabled, setDisabled] = useState(false);
  const [buttonName, setButtonName] = useState("Submit");
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name Of Website</label>
        <input className="form-control" id="nameOfWebsite" />
      </div>
      <div className="form-group">
        <label htmlFor="email">URL address</label>
        <input
          type="url"
          className="form-control"
          id="email"
          placeholder="https://www.google.com/"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Your Name </label>
        <input className="form-control" id="yourName" />
      </div>
      <div className="form-group">
        <button
          disabled={disabled}
          className="form-control btn btn-primary"
          type="submit"
        >
          {buttonName}
        </button>
      </div>
    </form>
  );
};
export default Form;
