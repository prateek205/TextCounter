# 🗒️ Text Counter Application
This Application is design for the Text Utility in which we can modify the text with various features like upperCase, lowerCase, copyText, savedText, show the number of character and an words and also display the reading per minute it can also be display in `dark` and `light` mode using `toggle mode`. As it is build by HTML, CSS and JavaScript Technology with responsive.

# 🚀 Technology Used
- HTML,
- CSS,
- JavaScript,
- React.js

# 💻 Features
- Easy to use with responsive Small devices.
- It can be toggle in Dark and Light Mode.
- It can be modify in `upperCase`, `lowerCase`, `copyText`, `savedText`, `clearText` etc.
- Display the Number of words and characters also in minute of reading.

# 📸 Screenshot
#### 1. Light Mode
![Demo_Screenshot](https://github.com/prateek205/TextCounter/blob/046858234104faa44d6b693a6015c3d1ecef73e0/public/asset/images/textCounter_01.png)

#### 2. Dark Mode
![Demo_Screenshot](https://github.com/prateek205/TextCounter/blob/046858234104faa44d6b693a6015c3d1ecef73e0/public/asset/images/textCounter_02.png)

#### 3. Responsive Devices
![Demo_Screenshot](https://github.com/prateek205/TextCounter/blob/046858234104faa44d6b693a6015c3d1ecef73e0/public/asset/images/textCounter_03.png)

# 📽️ Demo
You can see Live Demo: https://text-counter-eta.vercel.app/

# 🛠️ Example of Code (React.js)
#### 1. Index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
#### 2. App.js
```
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

```
# 🛠️ Clone Repository
```
git remote add origin https://github.com/prateek205/TextCounter.git
cd TextCounter
```
# 📦 Deployment
- Netlify
- Vercel
- Render
- Github Page

# 📂 Folder Structure
```
├── Counter Project
├── public/
│   ├── asset/
│   │   └── image
│   └── index.html
├── src/
│   ├── Components
│   ├── App.js
│   └── Index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
