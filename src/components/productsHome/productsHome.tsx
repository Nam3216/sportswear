
import React,{useState,useEffect} from "react"
import MockShoes from "../mock/mockShoes"
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
    const getList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)
        })
    }

    useEffect(()=>{
        getList().then((list:any)=>{
            setList(list)
        })
    },[])


    return(

        <div className="product-home">
            {list.map((item)=>{
               if(item.offer=="yes"){
                    return(
                        <div className="product-card-cont">
                            <p className="product-card-cont-p" >-20%</p>
                            <div className="product-card"  >
                                
                                <img src={item.img} alt="loading"/>
                                
                                <p>{item.description} </p>
                            </div>
                        </div>
                        )
                }
              
                
            })}
        </div>
    )
}

export default ProductsHome