import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/about" element=<About /> />
            <Route path="/" element=<TextForm /> />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
