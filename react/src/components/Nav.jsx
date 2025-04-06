import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-[10%] bg-blue-300 flex items-center justify-start px-10'>
      <ul className='flex justify-evenly capitalize'>
<Link to="/" className='pl-2'>Home</Link>
<Link to="/about" className='pl-6'>about</Link>
<Link to="/price" className='pl-6'>price</Link>
<Link to="/categories/" className='pl-6'>categories</Link>
      </ul>
    </nav>
  )
}

export default Nav