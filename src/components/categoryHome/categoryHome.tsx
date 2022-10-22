
import React,{useState,useEffect} from "react"

import { Link } from "react-router-dom"
import axios from "axios"
import "./styleCategoryHome.css"

interface MockOk{
        id:number,
        img:string,
        img2:string,
        title:string,
        description:string
}
const CategoryHome=()=>{
    const[list,setList]=useState<MockOk[]>([])
    const[checkOnMouse,setCheckOnMouse]=useState(0)

    const GetList=async() =>{
        try{
            const items:any= await axios.get("https://sportsapi-production.up.railway.app/init")
            console.log(items, "items")
            setList(items.data)

        }catch(error){
            console.log(error)
        }
        
    }
 
    useEffect(()=>{
        GetList()
    },[])
  
    const handleOnMouse=(id:any)=>{
       
            setCheckOnMouse(id)
    
        
    }

    /*<div className="category-card" onMouseOver={()=>handleOnMouse(item.id)} >
                                
                                    <img src={checkOnMouse == item.id ? item.img2 : item.img} alt="loading"/>
                                    
                                    <p>{item.title} </p>*/
    return(

        <div className="category-home">
            {list.map((item)=>{
                return(
                    
                        <div className="category-card-cont"> 
                            <p className="category-card-cont-p" >New</p>
                            <p className="category-card-cont-p">%OFF</p>
                            <Link to={`/products/${item.title.toLocaleLowerCase()}`}>
                                <div className="category-card"  >
                                
                                    <img src={item.img} alt="loading"/>
                                    
                                    <p>{item.title} </p>
                                </div>
                            </Link>
                        </div>
                    
                
                )
            })}
        </div>
    )
}

export default CategoryHome