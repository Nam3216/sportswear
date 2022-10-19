
import React,{useState} from "react";
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./styleContact.css"

const Contact=()=>{
    const[info,setInfo]=useState({name:"",email:"",text:""})

    const handleInput=(e:any)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(info)
    }

    return(
        <div className="contact">
            <p id="contact-title">CONTACT US</p>
            <div className="contact-split">
                <div className="contact-info">
                    <div className="contact-info-text">
                        <LocalPhoneIcon/>
                        <p>54-9-1111556699</p>
                    </div>
                    <div className="contact-info-text">
                        <EmailIcon/>
                        <p>email@email.com</p>
                    </div>
                    <div className="contact-info-text">
                        <HomeIcon/>
                        <p>Evergreen st. 123</p>
                    </div>
                    <div className="contact-info-follow">
                        
                        <p id="contact-follow">FOLLOW</p>
                        <div className="follow-icon">
                            <InstagramIcon/><TwitterIcon/><FacebookIcon/>
                        </div>
                    </div>

                </div>
            <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <p>Write your name</p>
                <input type="text" name="name" placeholder="Name" onChange={handleInput} />
                <p>Write your email</p>
                <input type="text" name="email" placeholder="Email" onChange={handleInput}/>
                <p>Send us your comments</p>
                <input name="text"  onChange={handleInput} id="contact-form-textarea"/>
                <Button variant="outlined" type="submit"><p>Send</p></Button>

                
            </form>
            </div>
        </div>
        </div>
    )

}

export default Contact