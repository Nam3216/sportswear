import React,{useState} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useContext}from "react"
import { ContextElement } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./styleCartMenu.css"



const CartMenu=()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const{listCart}=useContext(ContextElement)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div className="cart-menu">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <ShoppingCartIcon id="cart-icon"/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >{listCart.map((item)=>{

                return (
                    <Link to={"/cart"}>
                        <div className="cart-menu-cont">
                        
                                <div className="cart-menu-cont-img">
                                    <MenuItem onClick={handleClose}><img id="cart-menu-img"src={item.img} alt="loading"/> </MenuItem>
                                </div>
                                <div className="cart-menu-cont-text">
                                    <MenuItem onClick={handleClose}><p>Product: {item.category} </p></MenuItem>
                                    <MenuItem onClick={handleClose}><p>Units: {item.quantity} </p></MenuItem>
                                    <MenuItem onClick={handleClose}><p>Price: {item.price * item.quantity}</p> </MenuItem>
                                </div>
                        
                        </div>
                    </Link>



                )
            })}
                
            </Menu>
        </div>
    )
}

export default CartMenu