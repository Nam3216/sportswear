import React,{useState} from "react"
import Button from '@mui/material/Button';
import "./styleItemCount.css"

interface DataOk{
 
        handleAdd:(count:any,id:any)=>any,
        msg:string,
        id:number,
        initial:number
   
}

const ItemCount=({handleAdd,msg,id,initial}:DataOk)=>{
    const[count,setCount]=useState(initial)

    const add=(count:any)=>{
        setCount(count+1)
    }

    const substract=(count:any)=>{
        if(count>0){
            setCount(count-1)
        }
  
    }
//{msg=="detail" ?"itemcount" :"itemcount-cart" }
//{msg=="detail" ?"itemcount1" :"itemcount1-cart"}
    return(
        <div className="itemcount-cont">
       
        <div className={msg=="detail" ?"itemcount" :"itemcount-cart" } >
            <div className={msg=="detail" ?"itemcount1" :"itemcount1-cart"} >
                <p onClick={()=>substract(count)  }id={msg=="detail" ?"substract" :"substract-cart" }>-</p>
                <p id="count" >{count} </p>
                <p onClick={()=>add(count) } id={msg=="detail" ?"add" :"add-cart" }>+</p>
            </div>
           
        </div>

        {msg== "detail" ? (
            <div className="detail-button">
                <Button variant="outlined" onClick={()=>handleAdd(count,id)} ><p>Add Cart</p> </Button>
            </div>
        ):(
            <div className="detail-button-cart">
                <Button variant="outlined" onClick={()=>handleAdd(count,id)} ><p>Modify</p></Button>
            </div>
        )}
        
      </div>
    )

}

export default ItemCount

/* <div className="detail-button">
            <Button variant="outlined" onClick={()=>handleAdd(count,id)} >{msg=="detail" ?<p>Add Cart</p> : <p>Modify</p> } </Button>
        </div>*/