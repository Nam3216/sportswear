import React,{useState,useEffect} from "react"
import Button from '@mui/material/Button';
import axios from "axios"
import {useContext} from "react"
import { ContextElement } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import "./styleUsers.css"

const Register=()=>{
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
            const items=await axios.post("https://sportsapi-production.up.railway.app/users",{username:info.username,password:info.password})
            console.log(items, "usr")
          let checkOk=items.data
          if(checkOk[0]=="u"){
            setCheckReturnGood(false)
            setCheckReturnError(true)
          }else{
            setCheckReturnGood(true)
            setCheckReturnError(false)
          }

        }catch(error){
            console.log(error)
        }

    }




    return(
    <div className="login-cont">
        <div className="form-user">
            <p id="user-title">REGISTER</p>
            <form className="users" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insert your name" name="username" onChange={handleData}/>
                <input type="text" placeholder="Insert your password" name="password" onChange={handleData}/>
                <Button variant="outlined" type="submit">Register</Button>
            </form>
        </div>
        <div className="msg-cont">
                {checkReturnError && <p>This username already exists. Please log in or select another username</p>}
                {checkReturnError && checkContinueAsGuest && <Button variant="outlined" id="continue-as-guest" onClick={()=>Navigate("/buy")} >Continue As Guest</Button>}
                {checkReturnGood && <p>Success! you are now loged in</p>}
        </div>
            
    </div>
    )



}

export default Register