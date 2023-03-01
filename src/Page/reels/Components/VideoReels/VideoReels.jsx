import React from 'react'

import videoimg from './img/QLqNalPe0RA.png'


import './Video.css'


function VideoReels() {
  return (
    <div  className='mt-6'>
        <ul className='reels-item'>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>
            <li className='m-5'>
                <img src={videoimg} width='300' height='500' alt="videoimg" />
            </li>

        </ul>
    </div>
  )
}

export default VideoReels