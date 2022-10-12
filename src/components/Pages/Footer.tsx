import React from "react";
import "./styleFooter.css"

const Footer=()=>{

 return(
    <div className="footer-cont">
        <div className="footer-logo">
            <p id="brand">SportsWear</p>
            <p>© 2022</p>
            <p>All Rights Reserved</p>
        </div>
        <div className="footer-about">
            <p className="footer-title">About Us</p>
            <p>About Us</p>
            <p>Location</p>
            <p>Order Tracking</p>
            <p>Contact</p>
        </div>
        <div className="footer-link">
            <p className="footer-title">Useful Links</p>
            <p>Returns</p>
            <p>Support Policy</p>
            <p>Size Guides</p>
            <p>FAQs</p>
        </div>
        <div className="footer-link">
            <p className="footer-title">Follow Us</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
        </div>
        
    </div>
 )


}

export default Footer