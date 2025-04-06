import React from 'react'
import { Outlet } from 'react-router-dom'
import {Link } from 'react-router-dom'

const About = () => {
  return (
<>
<div>About page</div>
<Link to='admin' className="btn">Admin</Link>
<Link to='user' className="btn">users</Link>
<Outlet />
</>
  )
}

export default About