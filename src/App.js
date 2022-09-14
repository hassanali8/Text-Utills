// import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type,
      },
      setInterval(() => {
        setAlert(null);
      }, 2000)
    );
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title='Text-Utils'
        home='Home'
        about='About Us'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className='container'>
        <Textform
          heading='Enter the text to Analyze.'
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
