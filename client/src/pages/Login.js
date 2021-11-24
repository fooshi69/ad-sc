import React, { useState } from "react";

function App() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()
   
    const response = await fetch('http://localhost:1337/api/login', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
     },
     body: JSON.stringify({email,password})
    })
    const data = await response.json()
if(data.user){
localStorage.setItem('token',data.user) 
alert('login successfull')
window.location.href = '/dashboard'
}else{
  alert('Please check your Username or Password')
}  }
  return (
  <div className="">
<h1>Login scanup</h1>

<form  onSubmit={loginUser}>
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/><br/>
  <input  value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="password"/><br/>
<input type="submit" value="Connexion"/>

</form>

  </div>)
}

export default App;
