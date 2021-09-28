import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CredentialsContext } from './App';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
const handleErrors = async (response) => {
  if(!response.ok){
    const {message} = await response.json();
    throw Error(message);
  }
  return response.json();
}
function Login(){
  const history = useHistory()
  const [username, setusername]=useState("");
  const [userid, setuserid]=useState("");
  const [password, setpassword]=useState("");
  const [,setcredentials] = useContext(CredentialsContext);
  const [error,setError]=useState("");
  const login=(e)=>{
    e.preventDefault();
    fetch(`https://servervishnu.herokuapp.com/login`,{
      method: 'POST',
      headers: {"Content-Type":"application/json",
    },
    body: JSON.stringify({
      username,
      userid,
      password,
    }),
  })
  .then(handleErrors)
  .then(()=>{
    setcredentials({username,userid,password})
    history.push("/inbox");
  })
  .catch((error)=>{
    console.log(error);
    setError(error.message);
  })
};
  return(
    <Container>
    <div class="center">
    <h1>Login</h1>
    <p style={{textAlign:'center',marginTop:'10px'}}>{error}</p>
    <form onSubmit={login}>
      <br />

      <TextField id="outlined-basic fname" label="Enter Full Name" name='uname' type='text' variant="outlined" onChange={(e)=>setusername(e.target.value)} style={{width:"100%"}} required/>
      <br />
        <br />

      <TextField id="outlined-basic" label="Enter Email id" type='email' variant="outlined" onChange={(e)=>setuserid(e.target.value)} style={{width:"100%"}} required/>
      <br />
        <br />

      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" onChange={(e)=>setpassword(e.target.value)} style={{width:"100%"}} required/>
      <br />
        <br />
        <br/>

      <input type="submit" value="Login" />
      <br />

    </form>
    <div class="signup_link">
          Not Registered? <Link style={{textDecoration:'none',cursor:'pointer'}} to='/register'><a>Signup</a></Link>
        </div>
    </div>
    </Container>
    )
}

export default Login;

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(120deg,#2980b9, #8e44ad);
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    .center{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background: white;
      border-radius: 10px;
      box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
      border: 6px solid yellow;
    }
    .center h1{
      text-align: center;
      padding: 20px 0;
    }
    .center form{
      padding: 0 40px;
      box-sizing: border-box;
    }
    .center h1{
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid silver;
    }
    .signup_link{
      margin: 30px 0;
      text-align: center;
      font-size: 16px;
      color: #666666;
    }
    .signup_link a{
      color: #2691d9;
      text-decoration: none;
    }
    .signup_link a:hover{
      text-decoration: underline;
    }

    input[type="submit"]{
      width: 100%;
      height: 50px;
      border: 1px solid;
      background: #5C7AEA;
      border-radius: 25px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
    }
    input[type="submit"]:hover{
      background:#14279B;
      transition: .5s;
    }

`
