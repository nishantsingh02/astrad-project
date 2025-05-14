import { useState } from "react";
import "./App.css";
import "./index.css";

import Generate from "./components/generate";

function App() {
  return (
    <div className="">
      <Generate/>
      <div className="text-xl">Astrad</div>
      <div className="p-10">
        <h1>What if your <span className="text-yellow-500">birth chart</span></h1>
        <h1>made you a <span className="text-yellow-500">here</span>?</h1>
      </div>
      <div>
        <button className="border-2 font border-yellow-400 p-4 rounded-full bg-yellow-600 text-white shadow-md hover:shadow-yellow-500 hover:scale-105 transition duration-300">
  Generate My Character
</button>
      
      </div>

    </div>
  );
}

export default App;
