import { useState } from "react";
import { useAuth } from "../security/AuthContext";
import { apiClient } from "../api/ApiClient";

export function SignIn() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [message,setMessage] = useState('')

  const {isAuthenticated,login} = useAuth();

  function emailHandler(e){
    setEmail(e.target.value)
  }
  function passwordHandler(e){
    setPassword(e.target.value)
  }
  async function backendTest(){
    const response = await apiClient.get("/auth")
    setMessage(response.data);
  }

  async function onSubmit(e){
    e.preventDefault();
   console.log(e)
    const response = await login(email,password)
    console.log(response)
  }

  return (
    <div>
      <button onClick={backendTest}>check</button>
      {message}
    <form
      onSubmit={onSubmit}
    >
      <label>
        Email
        <input name="email" type="email" onChange={emailHandler}/>
      </label>
      <label>
        Password
        <input name="password" type="password" onChange={passwordHandler}/>
      </label>
      <button type="submit">Sign In</button>
    </form>
    </div>
  )
}
