import React from 'react'

function AsideMenu() {
  return (
    <aside className='w-72 relative bg-white/30 backdrop-blur-md h-screen top-0 left-0 border border-gray-400 hidden lg:inline-block'>
      <div className='w-full border-b-gray-400 border-b p-4'>
        <h1 className='font-bold text-gray-950/40 text-2xl'>Dashboard</h1>
      </div>
      <nav>
        <ul className='p-4 space-y-4'>
          <li className='cursor-pointer hover:bg-gray-800/40 hover:text-white font-semibold bg-gray-400/50 backdrop-blur-sm p-2 rounded-md'>Home</li>
          <li>Home</li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideMenu