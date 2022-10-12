import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Slider from './components/slider/Slider';
import Home from './components/Pages/Home';
import Footer from './components/Pages/Footer';

//context entre app y content
function App() {
  return (
    <div className="App">
      <div className="content">
      <BrowserRouter>
     
        <Navbar/>


     
      
      <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/running" element={<div>running</div>}/>
            <Route path="/football" element={<div>football</div>}/>
            <Route path="/tennis" element={<div>tennis</div>}/>
            <Route path="/hockey" element={<div>hockey</div>}/>
            <Route path="/boxing" element={<div>boxing</div>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      
      
      
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
