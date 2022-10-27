import React,{useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/navbar';
import Home from './components/Pages/Home';
import Footer from './components/Pages/Footer';
import Products from './components/Pages/Products';
import Detail from "./components/Pages/Detail"
import Cart from './components/Pages/Cart';
import Context from './Context/Context';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Buy from './components/Pages/Buy';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';

//context entre app y content
function App() {

  useEffect(()=>{
    document.title="SportsWear Online Sports Clothing"
  },[])
  return (
    <div className="App">
      <Context>
      <div className="content">
      <BrowserRouter>
     
        <Navbar/>


     
      
      <main>
        <Routes>
        <Route path={"/sportswear"} element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:category" element={<Products/>}/>
           <Route path="/detail/:id" element={<Detail/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/aboutus" element={<About/>}/>
           <Route path="/buy" element={<Buy/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
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
