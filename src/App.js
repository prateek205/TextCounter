import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light Mode")
  const [showBtn, setShowBtn] = useState("Dark Mode")

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode("light")
      setShowBtn("Dark Mode")
      document.body.style.backgroundColor = "white"
    }
    else{
      setMode("dark")
      setShowBtn("Light Mode")
      document.body.style.backgroundColor = "grey"
    }
  }



  return (
    <>
      <Router>
        <Navbar mode={mode} showBtn={showBtn} title="TextCounter" homeLink="Home" aboutLink="About" toggleMode={toggleMode}/>
        <Alerts/>
        <div className="container">
          <Routes>
            <Route mode={mode} path="/about" element=<About heading="About Us" /> />
            <Route mode={mode} path="/" element=<TextForm heading="TextCounter | WordCounter Character Counter" /> />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
