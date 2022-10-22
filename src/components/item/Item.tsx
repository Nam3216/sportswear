import React from "react"
import "./styleProductItem.css"
import {Link} from "react-router-dom"
import {useContext} from "react"
import {ContextElement} from "../../Context/Context"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ItemCount from "../ItemCount/ItemCount"
//import Button from '@mui/material/Button';

interface dataType{
    data:{
        id:number,
        category:string,
        img:string,
        description:string,
        descriptionDetail:string,
        price:number,
        quantity:number,
        size:string,
        secondCategory:string,
        offer:string ,

    },
    msg:string
}

const Item=({data,msg}:dataType)=>{
    const{id,category,img,description,descriptionDetail,price,quantity,size,secondCategory,offer}=data
    const{addCart}=useContext(ContextElement)

    const handleAdd=(quant:any,id:any)=>{
        //con el id no hago nada, pero sirve para el handleAdd de cart
        addCart(data,quant)
    }

    return(
        <>
            {msg=="category" ?(
            <Link to={`/detail/${id}`}  >
                <div className="product-card-cont" key={id} >
                    <p className="product-card-cont-p" >-20%</p>
                    <div className="product-card"  >
                                        
                        <img src={img} alt="loading"/>
                                        
                        <p>{description} </p>
                    
                    </div>
                </div>
            </Link>
            ):(
                <div className="detail-cont">
                    <div className="detail-img">
                        <img src={img}/>
                    </div>
                    <div className="detail-text">
                        <p id="detail-title">{description}</p>
                        <p id="detail-price">$ {price}</p>
                        
                        <p id="detail-description">{descriptionDetail}</p>
                        <div className="rating">
                            <StarOutlineIcon className="star"/><StarOutlineIcon className="star"/><StarOutlineIcon className="star"/><StarOutlineIcon className="star"/><StarOutlineIcon className="star"/>
                        </div>
                        <ItemCount handleAdd={handleAdd} msg={"detail"} id={id} initial={1} />
                       
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Item