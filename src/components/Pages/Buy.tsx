
import React,{useState} from "react";
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./styleBuy.css"

const Buy=()=>{
    const[infoBuy,setInfoBuy]=useState({name:"",email:"",card:""})

    const handleInput=(e:any)=>{
        e.preventDefault()
        setInfoBuy({...infoBuy,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(infoBuy)
    }

    return(
        <div className="buy">
            <p id="buy-title">FINISH YOUR TRANSACTION</p>
            <div className="buy-split">
                <div className="buy-info">
                    <div className="buy-info-text">
                        <LocalPhoneIcon/>
                        <p>54-9-1111556699</p>
                    </div>
                    <div className="buy-info-text">
                        <EmailIcon/>
                        <p>email@email.com</p>
                    </div>
                    <div className="buy-info-text">
                        <HomeIcon/>
                        <p>Evergreen st. 123</p>
                    </div>
                    <div className="buy-info-follow">
                        
                        <p id="buy-follow">FOLLOW</p>
                        <div className="follow-icon">
                            <InstagramIcon/><TwitterIcon/><FacebookIcon/>
                        </div>
                    </div>

                </div>
            <div>
               
                <form className="buy-form" onSubmit={handleSubmit}>
                    <p id="form-title">ONLY CREDIT CARDS ACCEPTED</p>
                    <img id="cards-img" src={"https://basyspro.com/wp-content/uploads/2017/02/Credit-Card-Logos.jpg"}/>
                    <p>Write your name</p>
                    <input type="text" name="name" placeholder="Name" onChange={handleInput} />
                    <p>Write your email</p>
                    <input type="text" name="email" placeholder="Email" onChange={handleInput}/>
                    <p>Write your credit card number</p>
                    <input type="text" name="card" placeholder="Credit Card" onChange={handleInput}/>
                    
                    <Button variant="outlined" type="submit"><p>Send</p></Button>

                    
                </form>
            </div>
        </div>
        </div>
    )

}

export default Buy