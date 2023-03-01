import React from 'react'
import { Link } from 'react-router-dom'

function Directos() {
  return (
    <Link to = 'directos' className='page-item'>
        <i className="fa-regular fa-paper-plane icon"></i>
        <h3 className='page-title'>Directos</h3>
    </Link>
  )
}

export default Directos