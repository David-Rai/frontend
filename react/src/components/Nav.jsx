import React from 'react'
import { memo } from 'react'

const Nav = ({name}) => {
console.log("nav bar rendered")

  return (
    <div>this is a {name} nav bar</div>
  )
}

export default memo(Nav)