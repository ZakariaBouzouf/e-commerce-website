import { useEffect, useState } from "react"
import { retrieveUserDetails } from "../api/UserApiService"
import { useAuth } from "../security/AuthContext"


export default function Profil () {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const {userId,token} = useAuth()

  async function retieveUser(){
    try{
      const response = await retrieveUserDetails(userId,token)
      setUsername(response.data.username)
      setEmail(response.data.email)
      console.log(response)

    }catch(error){
      console.log(error)
    }
    // retrieveUserDetails(userId,token)
    //   .then(response => console.log(response))
    //   .catch(er => console.log(er))
  }

  useEffect(()=>retieveUser,[userId])


  return(
    <div>
      <button onClick={retieveUser}>clic</button>
      <h1>Profil</h1>
      <div>
      <label >Name : </label>
      <label >{username}</label>
      </div>
      <label >email : </label>
      <label >{email}</label>
    </div>
  )
}
