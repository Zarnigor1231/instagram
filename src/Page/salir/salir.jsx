import React from 'react'
import { Link } from 'react-router-dom'

function Salir() {
  return (
    <Link to='salir' className='page-salir'>
      <hr className='page-line' />
      <div className='page-item'>
        <i className="fa-solid fa-arrow-right-to-bracket icon"></i>
        <h3 className='page-title'>Salir</h3>
      </div>

    </Link>
  )
}

export default Salir