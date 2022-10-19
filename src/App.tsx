import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Slider from './components/slider/Slider';
import Home from './components/Pages/Home';
import Footer from './components/Pages/Footer';
import Products from './components/Pages/Products';
import Detail from "./components/Pages/Detail"
import Cart from './components/Pages/Cart';
import Context from './Context/Context';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';

//context entre app y content
function App() {
  return (
    <div className="App">
      <Context>
      <div className="content">
      <BrowserRouter>
     
        <Navbar/>


     
      
      <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:category" element={<Products/>}/>
           <Route path="/detail/:id" element={<Detail/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/aboutus" element={<About/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      
      
      
      </BrowserRouter>
      </div>
      </Context>
    </div>
  );
}

export default App;
