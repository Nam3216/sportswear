import React,{useState,useEffect} from "react";
import { createContext } from "react";


const contextType={
    getObject:(object:any)=>object,
    object:{},
    addCart:(object:any,quant:any)=>object,
    listCart:[{id:1,
        category:"",
        img:"",
        description:"",
        descriptionDetail:"",
        price:1,
        quantity:1,
        size:"",
        secondCategory:"",
        offer:""}],
        deleteProduct:(id:any)=>id,
        emptyCart:(id:any)=>id,
        price:0,
        totalPrice:(id:any)=>id
}
const ContextElement=createContext(contextType)

interface Child{
    children:React.ReactNode
}
const Context=({children}:Child)=>{
    const[object,setObject]=useState({})
    const[listCart,setListCart]=useState<any[]>([])
    const[price,setPrice]=useState(0)


    const getObject=(object:any)=>{
      
        setObject(object)
    }

    const addCart=(object:any,quant:any)=>{
        object.quantity=quant
        let checkItem=false

        for(const item of listCart){
            if(item.id==object.id){
                item.quantity=object.quantity 
                checkItem=true
            }   
        }

        if(checkItem==false){
            setListCart([...listCart, object])
        }

       
    }

    console.log(listCart)

    const deleteProduct=(id:any)=>{
        let check=listCart.filter(item=>item.id!=id)
        setListCart(check)

    }

    const emptyCart=()=>{
        setListCart([])
    }

    const totalPrice=()=>{
        let total=0
        for (const item of listCart){
            total=total+item.price*item.quantity
        }

        setPrice(total)
    }

    useEffect(()=>{
        totalPrice()
    },[addCart,emptyCart])

   



    const dataContext={getObject,object,addCart,listCart,deleteProduct, emptyCart,price,totalPrice}

    return(
        <ContextElement.Provider value={dataContext} >
            {children}


        </ContextElement.Provider>

        
    )

}

export default Context
export {ContextElement}