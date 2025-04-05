import React from 'react'
import { useState,useEffect,useReducer } from 'react'

const reducer=(state,action)=>{
switch(action.type){
case "+":
  return {count:state.count + 1}
case "-":
  return {count:state.count -1}
  default:
    return state
}
}

const App = () => {
const [state,dispatch]=useReducer(reducer,{count:0})


  return (
  <main className='h-screen w-screen bg-slate-400 flex items-center justify-center flex-col'>
    <h1 className='text-5xl'>{state.count}</h1>
    <button onClick={()=> dispatch({type:"+"})} className='btn'>+</button>
    <button onClick={()=> dispatch({type:"-"})} className='btn bg-green-600'>-</button>
  </main>
  )
}

export default App