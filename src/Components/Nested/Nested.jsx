
import React from 'react'
import { Outlet } from 'react-router'
import { Directos, Explora, Home, Reels, Salir } from '../../Page'
import Account from './Account/Account'
// import Header from './Header/Header'
import Logo from './Logo/Logo'

// css
import './Nested.css'

function Nested() {
  return (
    <container>
         <div className='flex justify-between content-center'>
      <div className='nested w-full'>
        <div className='nested-list'>

          <Logo className='logo' />

          <div>
            <Account />
          </div>
          <ul className='nested-item'>
            <li>
              <Home />
            </li>
            <li>
              <Explora />
            </li>
            <li>
              <Directos />
            </li>
            <li>
              <Reels />
            </li>
            <li>
              <Salir />
            </li>
          </ul>
        </div>
      </div>
      <div className='w-8/12'>
        <Outlet />
      </div>
    </div>
    </container>
  )
}

export default Nested