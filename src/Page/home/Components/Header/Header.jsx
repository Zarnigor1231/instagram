import React from 'react'
import ModalHook from './Modal/ModalHook'

// css
import './Header.css'
import './Modal/Modal.css'
import Modal from './Modal/Modal'

export function Header() {
  const {toggle , isopen} = ModalHook()
  {/* <i class="fa-solid fa-magnifying-glass"></i> */ }

  return (
    <div className='header relative'>
      <input className='header-inp rounded-lg ml-12' type="text" placeholder='Buscar' />
      <div variant='contained'>
        {isopen ? <Modal /> : ''}
        <button className='modal-btn relative ' onClick={toggle}>
          <i className="fa-solid fa-circle-plus absolute icon left-0 p-1 modal-icon"></i>
          <p className='modal-text'>Anadir foto</p>
        </button>
      </div>
    </div>
  )
}

// export default Header