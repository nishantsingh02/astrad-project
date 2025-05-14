import React, { useEffect, useState } from 'react'

function Card() {
    const [name , setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("astradForm");
        if(storedName) {
            try {
              const parsedData = JSON.parse(storedName);
              setName(parsedData.name); // ✅ Access the name property
          } catch (error) {
            console.error("Error parsing stored data", error);
          }
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
