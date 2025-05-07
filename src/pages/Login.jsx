
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='space-y-4 p-8 w-90 bg-white/60 backdrop-blur-md rounded-md border border-slate-400'>
      <h1 className='bg-gray-400/40 p-2 rounded-md flex items-center justify-center gap-x-2 text-2xl font-extralight'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-slate-700">
  <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
</svg>
Login</h1>
<form className='flex flex-col gap-y-4'>
  <label className='flex flex-col'>
    E-mail
  <input type='text' className='bg-slate-300 rounded-md font-extralight p-2 border border-slate-400'/>
  </label>
  <label  className='flex flex-col'>
    Senha
  <input type='password' className='bg-slate-300 rounded-md font-extralight p-2 border border-slate-400'/>
  </label>
    <button className='pattern-button p-3 font-extralight text-white rounded-md border border-indigo-900 cursor-pointer'>
      Entrar
    </button>
</form>
<div className='rounded-md bg-gray-300/50 p-4 '>
        <p className='font-extralight'>Não tem cadastro? <Link className='hover:text-fuchsia-800 font-extrabold' to="/register">Registrar-se</Link></p>
      </div>
      </div>
      
    </div>
  )
}

export default Login