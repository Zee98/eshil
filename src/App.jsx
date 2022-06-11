import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Error from './components/Error';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={< Error/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
