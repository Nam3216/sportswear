import React,{useState,useEffect} from "react"
import {useContext} from "react"
import { ContextElement } from "../../Context/Context"
import ItemCount from "../ItemCount/ItemCount"
import Button from '@mui/material/Button';
import "./styleCart.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const Cart=()=>{
    const[priceOk,setPriceOk]=useState(0)
    const {addCart,listCart,deleteProduct,price,totalPrice,emptyCart}=useContext(ContextElement)
    const Navigate=useNavigate()


    const handleAdd=(quant:any,id:any)=>{
  
        let check=listCart.filter(item=>item.id==id)
        if(check.length>0){
            //addCart(check[0],quant)
            check[0].quantity=quant
           // modify(check[0],quant)
           setPriceOk(check[0].price*check[0].quantity)//si dejo esto aca se cambia en el momento el precio si hago modify, no se porque pero funciona
        }
       
        
       
    }

    useEffect(()=>{
        totalPrice(1)
    },[handleAdd])

    return(
        <>
        <p id="cart-titleOk">CART</p>
        {listCart.length>0 ? (
        <div className="cart-cont">
           
            <div className="cart-title">
                <div className="cart-title-product">Product</div>
                <div className="cart-title-description">Description</div>
                <div className="cart-title-units">Units</div>
                <div className="cart-title-price">Price</div>            
                <div className="cart-title-modify">Remove Item</div>
            </div>
            {listCart.map((item:any)=>{
                return(
                    <div className="cart-product">
                        <div className="cart-product-product"><img src={item.img} alt="loading"/></div>
                        <div className="cart-product-description">{item.description}</div>
                        <div className="cart-product-units"><ItemCount handleAdd={handleAdd} msg={"cart"} id={item.id} initial={item.quantity} /></div>
                        <div className="cart-product-price">{item.price * item.quantity} </div>                   
                        <div className="cart-product-modify"><Button variant="outlined" onClick={()=>deleteProduct(item.id)} >Delete</Button></div>
                    </div>





                )
            })}
            <div className="price-cont">
                <p>Total Price: $ {price}</p>
                <Button variant="outlined" onClick={emptyCart} >Empty Cart</Button>
                <Modal data={"cart"}/>
            </div>
            
            
        </div>
        ):(<p id="cart-empty">There are no products in your Cart. Go and pick some!</p>)}
        </>
    )
}

export default Cart