import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")

  return (
    <>
      <Router>
        <Navbar mode={mode} title="TextCounter"/>
        <div className="container">
          <Routes>
            <Route path="/about" element=<About /> />
            <Route path="/" element=<TextForm heading="TextCounter | WordCounter Character Counter" /> />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
