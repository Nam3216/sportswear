
import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./styleProductHome.css"

interface MockShoesOk{
    id:number,
    category:string,
    img:string,
    description:string,
    descriptionDetail:string,
    price:number,
    quantity:number,
    size:string,
    secondCategory:string,
    offer:string
 
}
const ProductsHome=()=>{
    const[list,setList]=useState<MockShoesOk[]>([])
    const[checkOnMouse,setCheckOnMouse]=useState(0)
    /*const getList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)
        })
    }*/

    const getList=async()=>{
        try{
            const items:any=await axios.get("https://sportsapi-production.up.railway.app/shirts")
            setList(items.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getList()
    },[])


    return(

        <div className="product-home">
            {list.map((item)=>{
               if(item.offer=="yes"){
                    return(
                        <div className="product-card-cont">
                            <p className="product-card-cont-p" >-20%</p>
                            <Link to={`/detail/${item.id}`}>
                            <div className="product-card"  >
                                
                                <img src={item.img} alt="loading"/>
                                
                                <p>{item.description} </p>
                            </div>
                            </Link>
                        </div>
                        )
                }
              
                
            })}
        </div>
    )
}

export default ProductsHome