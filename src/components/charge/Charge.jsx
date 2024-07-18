import React, { useState } from 'react'

function Charge() {
    const[color,setColor]=useState("yellow")
     const handleClick=()=>{
        setColor(!color)
        
     }
  return (
    <>
<button onClick={handleClick}>Rengi deyisdir</button>
<p style={{color:color?"red":"blue"}}>her tikladiginda rengi deyisdir</p>
    </>
  )
}

export default Charge