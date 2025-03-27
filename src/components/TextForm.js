import React from "react";

const TextForm = (props) => {
  return (
    <>
      <div className="mb-3 my-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control my-2"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <div>
        <button type="button" className="btn btn-primary mx-1 my-1">
          UpperCase
        </button>
        <button type="button" className="btn btn-primary mx-1 my-1">
          LowerCase
        </button>
        <button type="button" className="btn btn-primary mx-1 my-1">
          TextCopy
        </button>
        <button type="button" className="btn btn-primary mx-1 my-1">
          TextClear
        </button>
      </div>
      <div>
        <h2 className="pt-3">Summary</h2>
        <p>0 words 0 characters</p>
        <p>0 minute for reading</p>
      </div>
      <div>
        <h2 className="pt-2">Text Preview</h2>
        <p>No Text Preview!</p>
      </div>
    </>
  );
};

export default TextForm;
