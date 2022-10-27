import React,{useState,useEffect} from "react"
import Button from '@mui/material/Button';
import axios from "axios"
import "./styleUsers.css"

const Login=()=>{
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

    return(
        <div className="login-cont">
            <div className="form-user">
                <p>LOG IN</p>
                <form className="users" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Insert your name" name="username" onChange={handleData}/>
                    <input type="text" placeholder="Insert your password" name="password" onChange={handleData}/>
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
                
            </div>
            <div className="msg-cont">
                {checkReturnError && <p>Your username or password is wrong. Please try again or register</p>}
                {checkReturnGood && <p>Success! you are now loged in</p>}
            </div>
        </div>
    )



}

export default Login