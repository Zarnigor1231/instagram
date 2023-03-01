import React from 'react'
import { Link } from 'react-router-dom'

// img
import instagaramLogo from './instagaramLogo.svg'

function Logo() {
  return (
    <Link to='/'>
      <img src={instagaramLogo}  alt="Instagram logo" />
    </Link>
  )
}

export default Logo