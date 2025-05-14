import { useState } from "react";
import "./App.css";
// import "./index.css";

function App() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      
      <div style={{}} className="z-[100] absolute bg-red-50 opacity-10 w-200 h-900 rotate-animation"></div>

      <div className="z-0 text-center">
        <div className="text-xl">Astrad</div>
        <div className="p-10">
          <h1>
            What if your <span className="text-yellow-500">birth chart</span>
          </h1>
          <h1>
            made you a <span className="text-yellow-500">here</span>?
          </h1>
        </div>
        <div>
          <button className="border-2 font border-yellow-400 p-4 rounded-full bg-yellow-600 text-white shadow-md hover:shadow-yellow-500 hover:scale-105 transition duration-300">
            Generate My Character
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
