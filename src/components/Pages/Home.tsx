import React from "react"
import Slider from "../slider/Slider"
import CategoryHome from "../categoryHome/categoryHome"
import ProductsHome from "../productsHome/productsHome"
import "./styleHome.css"

const Home=()=>{
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
            <div className="category-card-container">
                <h3>Categories</h3>
                <CategoryHome/>        
            </div>
            <div className="products-card-container">
                <h3>New Arrivals</h3>
                <ProductsHome/>        
            </div>
           
        </div>
    )
}

export default Home