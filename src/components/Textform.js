import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase.", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.", "success");
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared.", "success");
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard.", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed.", "success");
  };
  return (
    <>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          <h2
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.heading}
          </h2>
        </label>
        <textarea
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          placeholder='Enter your text here...'
          className='form-control'
          id='myBox'
          rows='8'
        ></textarea>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleUpperClick}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleLowerClick}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className='container'
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above box to preview it here."}
        </p>
      </div>
    </>
  );
}
