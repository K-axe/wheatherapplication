import React, { useState } from 'react';
import  axios from "axios";
import AuthForm from '../../component/AuthForm';
const AuthPage = () => {
    const API = axios.create({ baseURL: 'http://localhost:3000' });
    const handleCheck = async()=>{
        try {
            const res = await API.get("/home");
            console.log(res.data);
            setIsTrue(true);
            setData(res.data.message);
         
        } catch (error) {
            console.log("Error while fetching");
        }
       
    };
    const [isTrue,setIsTrue] = useState(false);
    const [data,setData] = useState("");
  return (

    
    <div>
        <h1>{isTrue?data:"AuthPage"}</h1>
        <AuthForm />
        <button onClick={handleCheck}>Click</button>
    </div>
  )
}

export default AuthPage;