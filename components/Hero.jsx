import '../src/App.css'

import { useNavigate  } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/generate');
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      
      <div style={{}} className="z-[-100] absolute bg-red-50 opacity-10 w-screen h-screen rotate-animation"></div>

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
        
            <button onClick={handleClick} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-yellow-500/80 hover:bg-yellow-500 text-zinc-900 font-pixel text-lg px-8 py-6 rounded-2xl border-2 border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]">
              Generate My Character
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;