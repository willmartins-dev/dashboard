import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <section className='h-screen flex justify-center items-center'>
        <div className='flex flex-col p-4 bg-white/50 backdrop-blur-md rounded-md border border-slate-400 space-y-4'>
            <h1 className='flex gap-x-4 items-center justify-center font-extralight text-2xl w-90 bg-gray-400/50 backdrop-blur-md p-4 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
 Cadastro de usuário</h1>
 <form className='flex flex-col space-y-2'>
            <label>Nome completo</label>
            <input  type='text' className='bg-slate-300 p-2 border border-slate-400 rounded-md'/>
            <label>E-mail</label>
            <input  type='email' className='bg-slate-300 p-2 border border-slate-400 rounded-md'/>
            <label>Senha</label>
            <input  type='password' className='bg-slate-300 p-2 border border-slate-400 rounded-md'/>
            <label>Confirmar senha</label>
            <input  type='password' className='bg-slate-300 p-2 border border-slate-400 rounded-md'/>
            <button className='pattern-button p-3 rounded-md border border-slate-500 font-extralight text-white'>Cadastrar</button>
            <p>Já tem cadastro? Clique em <Link className='font-extrabold hover:text-fuchsia-800' to="/login">Entrar</Link></p>
        </form>
        </div>
       
    </section>
  )
}

export default Register