import React,{useEffect,useState} from "react"
import Slider from "../slider/Slider"
import CategoryHome from "../categoryHome/categoryHome"
import ProductsHome from "../productsHome/productsHome"
import "./styleHome.css"
import { Check } from "@mui/icons-material"

const Home=()=>{
    const[checkCategory,setCheckCategory]=useState(false)
    const[checkProducts,setCheckProducts]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

        return ()=> window.removeEventListener("scroll",handleScroll)

    },[])

    const handleScroll=()=>{
      
        if(document.querySelector(".products-contOk")!.getBoundingClientRect().top<window.innerHeight){
            setCheckProducts(true)
        }else{
            setCheckProducts(false)
        }
        if(document.querySelector(".category-contOk")!.getBoundingClientRect().top<window.innerHeight){
            setCheckCategory(true)
        }else{
            setCheckCategory(false)
        }
    }


//<Slider/>
    return(
        <div className="home-container">
            <div>
            <Slider/>
            </div>
            <div className="support-img">
                <div className="support-img-free">
                    <img src="free.png"/>
                    <p className="img-text">Free Shipping</p>
                    <p>Free Shipping on all order</p>
                </div>
                <div className="support-img-free">
                    <img src="support.png"/>
                    <p className="img-text">Support 24/7</p>
                    <p>Online contact center</p>
                </div>
                <div className="support-img-free">
                    <img src="money.png"/>
                    <p className="img-text">Money Return</p>
                    <p>Your money is safe</p>
                </div>
                <div className="support-img-free">
                    <img src="offer.png"/>
                    <p className="img-text">Special Discount</p>
                    <p>Incredible Offers!</p>
                </div>
                
            </div>
            <div className={checkCategory ?"category-card-container" :"category-contOk" }>
                <h3>Categories</h3>
                <CategoryHome/>        
            </div>
            <div className={checkProducts ? "products-card-container" :"products-contOk" } >
                <h3>New Arrivals</h3>
                <div className={checkProducts ? "products-card-container2" :"products-contOk2" }>
                <ProductsHome/>        
                </div>
            </div>
           
        </div>
    )
}

export default Home