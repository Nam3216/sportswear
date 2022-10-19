import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import MockShoesOk from "../mock/interfaceMockProducts"
import MockShoes from "../mock/mockShoes"
import Item from "../item/Item"


import "./styleDetail.css"

const Detail=()=>{
    const[list,setList]=useState<MockShoesOk[]>([])
    const{id}=useParams()

    const getList=async ()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockShoes)   
        })

    }

    const getList2=async()=>{
        try{
            const items:any=await getList()
            setList(items)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getList2()
    },[])
    
    return(
        <div className="detail-main-cont">
            <div className="detail-main-title"><p>SHOP PRODUCT</p></div>
        {list.map((item:any)=>{
            if(item.id==id){

            return <Item data={item} msg={"detail"}  />
        }
        })}
        </div>)

}

export default Detail