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
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stock />} />
      {/* route will be accepting a variable with the symbol   */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard/>}/> 
      </Routes>      
  </div>
  );
}

export default App;