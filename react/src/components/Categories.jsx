import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {
const params=useParams()

  return (
    <div>Categories of {params.id}</div>
  )
}

export default Categories