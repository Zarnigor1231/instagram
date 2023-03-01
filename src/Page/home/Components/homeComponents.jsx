import React from 'react'
import { Header} from './Header/Header'
import { Profile} from './Profile/Profile'
import { Video} from './Video/Video'

function homeComponents() {
    return (
        <div>
            <Header />
            <Profile />
            <Video />
        </div>
    )
}

export default homeComponents