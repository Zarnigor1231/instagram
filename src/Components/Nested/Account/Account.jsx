import React from 'react'

// img
import myAccount from './account.svg'

// css
import './Account.css'

function Account() {
  return (
    <div className='account'>
        <button className='account-btn'>
            <img className='account-img' src={myAccount} width ='80' height='80' alt="myAccount" />
        </button>
        <h2 className='account-title'>Zarnigor</h2>
        <p className='account-nike'>@zarnigor</p>
          <ul className='account-list'>
            <li className='account-item'>
              <strong className='account-number'>148</strong>
              <p className='account-text'>Publicaciones</p>
            </li>
            <li className='account-item'>
              <strong className='account-number'>15K</strong>
              <p className='account-text'>Seguidores</p>
            </li>
            <li className='account-item'>
              <strong className='account-number'>1K</strong>
              <p className='account-text'>Seguidos</p>
            </li>
          </ul>
    </div>
  )
}

export default Account