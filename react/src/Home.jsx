import React from 'react'
import Nav from './components/Nav'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate=useNavigate()
const handleNavigate=()=>{
navigate('/price',{replace:true})
}

  return (
 <main className='h-screen w-full bg-slate-200'>
    <Nav />
    <h1>This the home page</h1>
    <button onClick={handleNavigate} className='btn'>Navigate</button>
   </main>
  )
}

export default Home