
import React from 'react'
import {  Avatar, Stack } from '@mui/material'

// css
import './Profile.css'

export function Profile() {
    return (
        <div>
            <h2 className='historias mt-8 mb-4'>Historias</h2>
            <Stack direction="row" spacing={2}>
                <Avatar className='mr-8'>H</Avatar>
                <Avatar className='mr-8'>N</Avatar>
                <Avatar className='mr-8'>O</Avatar>
                <Avatar className='mr-8'>P</Avatar>
                <Avatar className='mr-8'>Q</Avatar>
                <Avatar className='mr-8'>R</Avatar>
                <Avatar className='mr-8'>T</Avatar>
                <Avatar className='mr-8'>H</Avatar>
                <Avatar className='mr-8'>N</Avatar>
                <Avatar className='mr-8'>O</Avatar>
                <Avatar className='mr-8'>P</Avatar>
                <Avatar className='mr-8'>Q</Avatar>
                <Avatar className='mr-8'>R</Avatar>
                <Avatar>T</Avatar>
            </Stack>
        </div>
    )
}

// export default Profile