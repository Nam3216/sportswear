import React,{useState,useEffect} from "react"
import MockShoesOk from "../mock/interfaceMockProducts"
import {useParams} from "react-router-dom"
import Item from "../item/Item"
import axios from "axios"
import "./styleProducts.css"


const Products=()=>{
    const[list,setList]=useState<MockShoesOk[]>([])
    const{category}:any=useParams()

  
    
    const getList=async()=>{
        try{
            const items:any=await axios.get(`https://sportsapi-production.up.railway.app/shirts/category/${category} `)
            setList(items.data)

        }catch(error){
            console.log(error)
        }
    }
   

    useEffect(()=>{
        getList()
    },[category])//cada vez q cambia category que se ejecute el axios, si lo ponia [] no andaba si cambia cat estando en otra cat


    return(
    <div className="product-main-cont">
        <div><p id="product-main-title">{category.toUpperCase()} </p></div>
        {list.map((item)=>{
           
                if(item.size=="S"){
                return(
                    <Item data={item} msg="category"/ >
                )
                
            }
        })}

    </div>
    
    )
}

export default Products

/* {list.map((item)=>{
            if(category==item.category){
                if(item.size=="S"){
                return(
                    <Item data={item} msg="category"/ >
                )
                }
            }
        })}*/