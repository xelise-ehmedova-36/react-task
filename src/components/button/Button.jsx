// Bir düyməyə klikləyərək səhifənin temasını (ağ/qara) dəyişdirən bir komponent yaradın.
import React, { useState } from 'react'

function Button() {
    const[isDark,setIsDark]=useState(false)
const handleClick=()=>{
setIsDark(!isDark)
}
  return (
    <>
<button onClick={handleClick} >reng deyisdir</button>
<div       style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}></div>

    </>
  )
}

export default Button
