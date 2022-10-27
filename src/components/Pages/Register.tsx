import React,{useState,useEffect} from "react"
import Button from '@mui/material/Button';
import axios from "axios"
import "./styleUsers.css"

const Register=()=>{
    const[info,setInfo]=useState({username:"",password:""})
    const[checkReturnError,setCheckReturnError]=useState(false)
    const[checkReturnGood,setCheckReturnGood]=useState(false)

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
            <p>REGISTER</p>
            <form className="users" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insert your name" name="username" onChange={handleData}/>
                <input type="text" placeholder="Insert your password" name="password" onChange={handleData}/>
                <Button variant="outlined" type="submit">Register</Button>
            </form>
        </div>
        <div className="msg-cont">
                {checkReturnError && <p>This username already exists. Please log in or select another username</p>}
                {checkReturnGood && <p>Success! you are now loged in</p>}
        </div>

    </div>
    )



}

export default Register