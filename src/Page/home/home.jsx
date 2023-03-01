import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to='/' iv className='page-item'>
      <i className="fa-solid fa-house icon"></i>
      <h3 className='page-title'>Home</h3>
    </Link>
  )
}

export default Home