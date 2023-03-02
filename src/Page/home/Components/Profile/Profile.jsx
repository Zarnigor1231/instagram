
import React from 'react'
import {  Avatar, Stack } from '@mui/material'

// css
import './Profile.css'

export function Profile() {
    return (
        <div>
            <h2 className='historias mt-8 mb-4'>Historias</h2>
            <Stack direction="row" spacing={2}>
                <Avatar className='mr-8 avatar-profile'>H</Avatar>
                <Avatar className='mr-8 avatar-profile'>N</Avatar>
                <Avatar className='mr-8 avatar-profile'>O</Avatar>
                <Avatar className='mr-8 avatar-profile'>P</Avatar>
                <Avatar className='mr-8 avatar-profile'>Q</Avatar>
                <Avatar className='mr-8 avatar-profile'>R</Avatar>
                <Avatar className='mr-8 avatar-profile'>T</Avatar>
                <Avatar className='mr-8 avatar-profile'>H</Avatar>
                <Avatar className='mr-8 avatar-profile'>N</Avatar>
                <Avatar className='mr-8 avatar-profile'>O</Avatar>
                <Avatar className='mr-8 avatar-profile'>P</Avatar>
                <Avatar className='mr-8 avatar-profile'>Q</Avatar>
                <Avatar className='mr-8 avatar-profile'>R</Avatar>
                <Avatar>T</Avatar>
            </Stack>
        </div>
    )
}

// export default Profile