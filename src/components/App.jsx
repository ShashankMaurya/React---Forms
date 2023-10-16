import React, { useState } from "react";

function App() {

  // const [headingText, setHeadingText] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });
  // const [lname, setLname] = useState("");

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

    // if (event.target.name === 'firstName') {
    //   setName({fname: event.target.value});
    // }
    // else {
    //   setName({lname: event.target.value});
    // }

    setName((prevValue) => {
      if (event.target.name === 'firstName') {
        return ({
          fname: event.target.value,
          lname: prevValue.lname
        });
      }
      else {
        return ({
          fname: prevValue.fname,
          lname: event.target.value
        });
      }
    });

  }

  return (
    <div className="container">
      <h1>Hello {name.fname + ' ' + name.lname}</h1>
      <input
        name="firstName"
        onChange={handleChange}
        type="text"
        placeholder="First name"
      // value={name.fname}
      />
      <input
        name="lastName"
        onChange={handleChange}
        type="text"
        placeholder="Last name"
      // value={name.lname}
      />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        // onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={removeHover}>Submit</button>
    </div>
  );
}

export default App;