
import React,{useState,useEffect} from "react"
import Mock from "../mock/mockInit"
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

    const getList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(Mock)
        })
    }

    useEffect(()=>{
        getList().then((list:any)=>{
            setList(list)
        })
    },[])

    const handleOnMouse=(id:any)=>{
       
            setCheckOnMouse(id)
    
        
    }
    return(

        <div className="category-home">
            {list.map((item)=>{
                return(
                    <div className="category-card-cont"> 
                        <p className="category-card-cont-p" >New</p>
                        <p className="category-card-cont-p">%OFF</p>
                    <div className="category-card" onMouseOver={()=>handleOnMouse(item.id)} >
                       
                        <img src={checkOnMouse == item.id ? item.img2 : item.img} alt="loading"/>
                        
                        <p>{item.title} </p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryHome