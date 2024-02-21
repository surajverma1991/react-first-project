import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

export default function Register() {

  useEffect(()=> {
    if(localStorage.getItem('user-info')) {
      navigate("/add");
    }
  },[]);


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  async function signUp() {
    let item = {name, password, email};

    let result = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.log(result);

    localStorage.setItem('user-info', JSON.stringify(result));

    navigate("/add");

  }

  return (
    <>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
          <h1>User Sign Up</h1>
          <input type='text' className='form-control' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
          <br></br>
          <input type='text' className='form-control' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <br></br>
          <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <br/>
          <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
      </div>
    </>
  )
}
