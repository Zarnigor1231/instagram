import React from 'react'

// img
import PublicacionesImg from './img/happy-excited-young-woman-with-dark-hair-and-opened-mouth-in-gray-tshirt-looks-amazed-using-and-pointing-at-mobile-phone-over-yellow-wall 1.png'


// css
import './Video.css'

export function Video() {
  return (
        <div className='mt-8'>
            <h2 className='mt-8 pub-title'>Publicaciones</h2>
            <ul className='flex pub-list mt-5'>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'> 
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
                <li className='pub-item mr-5 mb-5'>
                    <img src={PublicacionesImg} width='243' height='169' alt="PublicacionesImg" />
                </li>
            </ul>
        </div>
  )
}

// export default Video