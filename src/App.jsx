import React from 'react'
import './App.css'
import Home from './pages/Home'
import AsideMenu from './components/AsideMenu'
import MobileMenu from './components/MobileMenu'

function App() {

  return (
    <>
    <MobileMenu/>
    <div className='w-full flex'>
    <AsideMenu/>
    <Home/>
    </div>
    </>
  )
}

export default App
