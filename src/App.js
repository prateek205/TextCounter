import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [showBtn, setShowBtn] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setShowBtn("Light Mode");
      document.body.style.backgroundColor = "#27354a";
      showAlert("Dark Mode!", "success");
    } else {
      setMode("light");
      setShowBtn("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          showBtn={showBtn}
          title="TextCounter"
          homeLink="Home"
          aboutLink="About"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element=<TextForm
                heading="TextCounter | WordCounter Character Counter"
                mode={mode}
                showAlert={showAlert}
              />
            />
            <Route
              exact
              path="/about"
              element=<About heading="About Us" mode={mode} />
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
