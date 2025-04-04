import React from 'react'
import { useContext } from 'react'
import { myContext } from './Parent'

const Child = () => {
    const value=useContext(myContext)

  return (
    <h1 className='bg-red-200 mt-10'>your name is {value}</h1>
  )
}

export default Child