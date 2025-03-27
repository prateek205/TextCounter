import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
  };

  const handleTxtCpy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };

  const handleTxtClr = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="mb-3 my-2">
          <h2>{props.heading}</h2>
        <textarea
          className="form-control my-2"
          id="myText"
          rows="5"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleTxtCpy}
        >
          TextCopy
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleTxtClr}
        >
          TextClear
        </button>
      </div>
      <div>
        <h2>Summary</h2>
        <p>
          <strong>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
          </strong>
          Words and <strong> {text.length} </strong> Characters
        </p>
        <p>
          <strong>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </strong>
          minute for reading
        </p>
      </div>
      <div>
        <h2 className="pt-2">Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
