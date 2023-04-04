import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Appart from "./pages/Appart";
// import About from "./pages/About";

import './assets/css/index.css';
// import logo from './logo.svg';

function App() {
    return (
      <div className="App">        
      <Routes>
        <Route path="/" element={<Home />} />            
        <Route path="*" element={<NotFound />} />        
      </Routes>    
      </div>
  );
}

export default App;

// Routes à développer
// <Route path="/About" element={<About />} />
// <Route path="/Appart/:id" element={<Appart />} />