import React, { useState } from "react";

function App() {

  // const [headingText, setHeadingText] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

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
    // console.log(event.target.classList.value);
    if (event.target.classList.value === 'firstName') {
      setFname(event.target.value);
    }
    else {
      setLname(event.target.value);
    }

  }

  return (
    <div className="container">
      <h1>Hello {fname + ' ' + lname}</h1>
      <input
        className="firstName"
        onChange={handleChange}
        type="text"
        placeholder="First name"
        value={fname} />
      <input
        className="lastName"
        onChange={handleChange}
        type="text"
        placeholder="Last name"
        value={lname} />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        // onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={removeHover}>Submit</button>
    </div>
  );
}

export default App;