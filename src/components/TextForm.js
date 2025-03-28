import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Upper-Case!", "success");
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Lower-Case!", "success");
  };

  const handleTxtCpy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!", "success");
  };

  const handleTxtClr = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-1">
          <textarea
            className="form-control"
            id="myText"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#27354a" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
      </div>

      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpCase}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#1a2f32",
          color: props.mode === "dark" ? "white" : "rgb(15 32 38)",
        }}
      >
        UpperCase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={handleLoCase}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#1a2f32",
          color: props.mode === "dark" ? "white" : "rgb(15 32 38)",
        }}
      >
        LowerCase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={handleTxtCpy}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#1a2f32",
          color: props.mode === "dark" ? "white" : "rgb(15 32 38)",
        }}
      >
        TextCopy
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={handleTxtClr}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#1a2f32",
          color: props.mode === "dark" ? "white" : "rgb(15 32 38)",
        }}
      >
        TextClear
      </button>

      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Summary</h2>
        <p>
          <strong>
            {
              text.split(/\n+/).filter((element) => {
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
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2 className="pt-1">Text Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
};

export default TextForm;
