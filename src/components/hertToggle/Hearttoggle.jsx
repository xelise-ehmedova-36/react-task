import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


function Hearttoggle() {
    const [isFavorite,setIsFavorite]=useState(false)
    const toggleFavorite=()=>{
        setIsFavorite(!isFavorite)
    }
  return (
    <div>
        <button onClick={toggleFavorite}>{isFavorite?<CiHeart />:<FaHeart />}
 </button>
    </div>
  )
}

export default Hearttoggle