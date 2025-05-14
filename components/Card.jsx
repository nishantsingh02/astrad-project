import React, { useEffect, useState } from 'react'

function Card() {
    const [name , setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if(storedName) {
            setName(storedName);
        }
    },[]);

  return (
     <div>
      <div className='leftCard bg-yellow-300 w-[60%] h-screen overflow-hidden'>
        <h1>Hello, {name || "Guest"} 👋</h1>
      </div>
      <div className='rightCard'></div>
    </div>
  )
}

export default Card
