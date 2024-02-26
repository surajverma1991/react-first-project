import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Header from "./Header";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const navigate = useNavigate();

  useEffect(()=> {
    if(localStorage.getItem('user-info')) {
      navigate("/add");
    }
  },[]);

  async function login () {
    console.log(email, password);

    let item = {email, password};

    let result = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });

    result = await result.json();

    localStorage.setItem('user-info', JSON.stringify(result));

    navigate("/add");
  }

  return (
    <div>
        <Header />


        <div className='col-sm-6 offset-sm-3'>
          <h1>Login Page</h1>
          <input type='text' className='form-control' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
          <br/>
          <input type='password' className='form-control' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
          <br/>
          <button onClick={login} className='btn btn-primary'>Login</button>

        </div>

    </div>
  )
}
