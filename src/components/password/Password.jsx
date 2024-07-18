
import React, { useState } from 'react'

function Password() {
const[password,setPassword]=useState("");
const[showPassword,setShowPassword]=useState(false)

 const toggleShowPassword=()=>{
    setShowPassword(!showPassword)
 }

  return (

    <>
<input  placeholder='enter your password'
type={showPassword?"text":"password"}
value={password} 
onChange={(e)=>setPassword(e.target.value)}  />
<button onClick={toggleShowPassword}>
    {showPassword?"gizlet":"goster"} 

</button>
    </>
  )
}

export default Password