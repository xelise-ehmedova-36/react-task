import React, { useState } from 'react'

function OpenClose() {
    const[isVisible,setIsVisible]=useState(false)
    const handleClick=()=>{
        setIsVisible(!isVisible)
    }
  return (
    <>
 <button onClick={handleClick}>{isVisible?"Goster":"Gizlet"}</button>
{isVisible&& <p>Bu panel aciqdir</p>}
    </>
  )
}

export default OpenClose