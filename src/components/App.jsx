import React, { useState } from "react";

function App() {

  // const [headingText, setHeadingText] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
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

    const { name, value } = event.target;

    // console.log(event.target.classList.value);

    // if (event.target.name === 'firstName') {
    //   setName({fname: event.target.value});
    // }
    // else {
    //   setName({lname: event.target.value});
    // }

    setContact((prevValue) => {
      if (name === 'firstName') {
        return ({
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        });
      }
      else if (name === 'lastName') {
        return ({
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        });
      }
      else if (name === 'email') {
        return ({
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        });
      }
    });

  }

  return (
    <div className="container">
      <h1>Hello {contact.fname} {contact.lname}</h1>
      <p>{contact.email}</p>
      <input
        name="firstName"
        onChange={handleChange}
        type="text"
        placeholder="First name"
        value={contact.fname}
      />
      <input
        name="lastName"
        onChange={handleChange}
        type="text"
        placeholder="Last name"
        value={contact.lname}
      />
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email"
        value={contact.email}
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