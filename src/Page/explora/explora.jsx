import React from 'react'
import { Link } from 'react-router-dom'

function Explora() {
  return (
    <Link to = 'explora' className='page-item'>
        <i className="fa-solid fa-globe icon"></i>
        <h3 className='page-title'>Explora</h3>
    </Link>
  )
}

export default Explora