import React from 'react'
import {  Button } from '@mui/material'

// css
import './Header.css'

export function Header() {
  {/* <i class="fa-solid fa-magnifying-glass"></i> */}

  return (
        <div className='header'>
          <input className='header-inp rounded-lg ml-12' type="text" placeholder='Buscar' />
          <Button variant='contained'>
            Rasm
          </Button>
        </div>
  )
}

// export default Header