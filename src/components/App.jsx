import React, { useState } from "react";

function App() {

  // const [headingText, setHeadingText] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  // function handleClick() {
  //   setHeadingText("Submitted");
  // }

  function handleHover() {
    setMouseOver(true);
  }

  function removeHover() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        // onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={removeHover}>Submit</button>
    </div>
  );
}

export default App;