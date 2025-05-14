import { useState } from 'react'

function Generate() {

  return (
    <>
    <div>
        <div className='text-center mb-8'>
            <h1 className='text-3xl font-pixel text-yellow-400 mb-2'>Character Creation</h1>
            <p className='text-zinc-300'>Enter your cosmic details to reveal your destiny</p>
        </div>
        <div className='relative rounded-2xl overflow-hidden p-6 md:p-8'>
            <div className='absolute inset-0 bg-zinc-800/30 backdrop-blur-md border border-yellow-500/20 rounded-2xl'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent rounded-2xl'></div>
            <div className='relative z-10'>
                <form className="space-y-6">
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-yellow-400 flex items-center' for='name'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                 Name
                            </label>
                            <input className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800/50 border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl" id="name" required="" placeholder="Enter your name" value="" name="name"></input>
                        </div>
                        <div className="relative p-[2px] rounded-2xl overflow-hidden mt-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-2xl opacity-70 animate-border-flow"></div>
                            <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div><div className="relative z-10 rounded-2xl overflow-hidden h-full"><button className="gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-yellow-500/80 hover:bg-yellow-500 text-zinc-900 font-pixel text-lg py-6 rounded-xl flex items-center justify-center" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles mr-2 h-5 w-5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Reveal My Character</button></div></div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default Generate;
