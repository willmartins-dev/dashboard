import React, { useState } from 'react'

function MobileMenu() {
    const [activeMenu, setActiveMenu] = useState();
    const nav = document.querySelector(".nav-mobile");
    const handleClick = () =>{
        
        setActiveMenu(true);        
        nav.classList.remove("hidden");
        

    }
    const handleClose = () =>{
        setActiveMenu(false);
        nav.classList.add("hidden");
        
    }
  return (
    <header className='relative flex justify-between items-center lg:hidden bg-white/60 backdrop-blur-md w-full p-4 border-b border-gray-500'>
        <button onClick={handleClick} className='border border-gray-400 p-2 rounded-md hover:bg-gray-400/50 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</button>
<h1 className='text-slate-900 font-semibold text-2xl'>Dashboard</h1>
<nav className="hidden nav-mobile p-4 absolute top-0 left-0 w-full h-screen bg-white/80 backdrop-blur-2xl">
<button onClick={handleClose} className='cursor-pointer hover:bg-slate-400 rounded-md border border-slate-700 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
    <ul className='space-y-4 p-4'>
        <li className='text-2xl bg-slate-300 p-4 rounded-md font-extralight'>Home</li>
        <li className='text-2xl bg-slate-300 p-4 rounded-md font-extralight'>Cadastrar Produto</li>
        <li className='text-2xl bg-slate-300 p-4 rounded-md font-extralight'>Configurações</li>
    </ul>
</nav>
      </header>
  )
}

export default MobileMenu