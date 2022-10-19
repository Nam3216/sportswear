import React,{useState,useEffect} from "react"
import MockShoesOk from "../mock/interfaceMockProducts"
import MockShoes from "../mock/mockShoes"
import {useParams} from "react-router-dom"
import Item from "../item/Item"
import "./styleProducts.css"


const Products=()=>{
    const[list,setList]=useState<MockShoesOk[]>([])
    const{category}:any=useParams()

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
    <div className="product-main-cont">
        <div><p id="product-main-title">{category.toUpperCase()} </p></div>
        {list.map((item)=>{
            if(category==item.category){
                if(item.size=="S"){
                return(
                    <Item data={item} msg="category"/ >
                )
                }
            }
        })}

    </div>
    
    )
}

export default Products