import React from 'react'
import { Link } from 'react-router-dom'

function Modal() {
    return (
        <div className='absolute mt-11 w-30 z-10'>
            <select class="form-select" multiple aria-label="multiple select example">
                <option value="1">
                    <div className='flex content-center justify-between'>
                        <Link to='/'>
                            <p>Galery</p>
                            <i className="fa-regular fa-image "></i>
                        </Link>
                    </div>
                </option>
                <option value="2">
                    <div className='flex content-center justify-between mt-5 mb-5 '>
                        <Link to='/'>
                            <p>Camera</p>
                            <i className="fa-solid fa-camera"></i>
                        </Link>
                    </div>
                </option>
                <option value="3">
                    <div className='flex content-center justify-between'>
                        <Link to='/'>
                            <p>File</p>
                            <i className="fa-solid fa-folder"></i>
                        </Link>
                    </div>
                </option>
            </select>
        </div>
    )
}

export default Modal