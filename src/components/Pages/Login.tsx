import React,{useState,useEffect} from "react"
import {useContext} from "react"
import { ContextElement } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios"
import "./styleUsers.css"

const Login=()=>{
    const[info,setInfo]=useState({username:"",password:""})
    const[checkReturnError,setCheckReturnError]=useState(false)
    const[checkReturnGood,setCheckReturnGood]=useState(false)
    const{checkContinueAsGuest,setCheckContinueAsGuest}=useContext(ContextElement)
    const Navigate=useNavigate()

    const handleData=(e:any)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try{
            const items=await axios.post("https://sportsapi-production.up.railway.app/users/login",{username:info.username,password:info.password})
            console.log(items.data, "usr")
            let returnOk=items.data
            if(returnOk[0]=="e"){
                setCheckReturnError(true)
               setCheckReturnGood(false)
            }
            else{
                setCheckReturnError(false)
                setCheckReturnGood(true)
            }
           /* .then(function(response){
                console.log(response)
            })*/

        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        if(checkReturnGood==true){
            setTimeout(()=>{
                window.location.replace("/buy");
            },3000)
          
        }
    },[checkReturnGood])
    console.log(checkContinueAsGuest,"guest")

  

    return(
        <div className="login-cont">
            <div className="form-user">
                <p id="user-title">LOG IN</p>
                <form className="users" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Insert your name" name="username" onChange={handleData}/>
                    <input type="text" placeholder="Insert your password" name="password" onChange={handleData}/>
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
                
            </div>
            <div className="msg-cont">
                {checkReturnError  && <p>Your username or password is wrong. Please try again, register or continue as guest</p>}
                {checkReturnError && checkContinueAsGuest && <Button variant="outlined" id="continue-as-guest" onClick={()=>Navigate("/buy")} >Continue As Guest</Button>}
                {checkReturnGood && <p>Success! you are now loged in</p>}
            </div>
          
        </div>
    )



}

export default Login