import React from 'react'
import { Link } from 'react-router-dom'

function Reels() {
  return (
      <Link to='/reels' className='page-item'>
        <i className="fa-solid fa-tachograph-digital icon"></i>
        <h3 className='page-title'>Reels</h3>
      </Link>
  )
}

export default Reels