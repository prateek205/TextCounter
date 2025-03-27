import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './index.css';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <TextForm/>
        <About/>
      </div>
    </>
  );
}

export default App;
