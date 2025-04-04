import React from 'react'
import { createContext,useState } from 'react'
import Child from './Child';

export const myContext=createContext(null);

const Parent = () => {
const [name,setName]=useState("david rai") 
    return (
<>
<myContext.Provider value={name}> 
<main className='h-screen w-full flex flex-col justify-center items-center bg-cyan-300'>
    <input type="text" placeholder='enter your name' onChange={(e)=> setName(e.target.value)}/>
<Child />
</main>
</myContext.Provider>
</>
  )
}

export default Parent