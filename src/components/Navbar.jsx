import React from 'react'
import { navLinks } from '../constants'

function Navbar() {
  return (
    <header className='px-8 py-4 w-full'>
        <nav className='flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold text-red-500 '>Dojo Ninja</h1>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                {navLinks.map((item)=>(
                    <li key={item.label}><a href={item.href} className='text-lg'>{item.label}</a></li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar