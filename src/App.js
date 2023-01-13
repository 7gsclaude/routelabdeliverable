import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Stock from './pages/Stock';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* //i need a slash here becasue it acts like express where it will read another symbols that come after it  */}
     
      {/* route will be accepting a variable with the symbol   */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        {/* //just like in ejs anything that is refered to as an id must go last */}
           <Route path="/:symbol" element={<Stock />} />
      </Routes>      
  </div>
  );
}

export default App;