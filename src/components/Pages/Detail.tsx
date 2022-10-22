import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import MockShoesOk from "../mock/interfaceMockProducts"
import Item from "../item/Item"
import axios from "axios"


import "./styleDetail.css"

const Detail=()=>{
    const[list,setList]=useState<MockShoesOk[]>([])
    const{id}=useParams()

    const getList=async()=>{
        try{//lo pido con la ruta get id de nod
            const items=await axios.get(`https://sportsapi-production.up.railway.app/shirts/detail/${id}`)
            setList(items.data)

        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        getList()
    },[])



    return(
        <div className="detail-main-cont">
            <div className="detail-main-title"><p>SHOP PRODUCT</p></div>
        {list.map((item:any)=>{
            

            return <Item data={item} msg={"detail"}  />
      
        })}
        </div>)

}

export default Detail

