import React from 'react'
import Navbar from '../pages/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className='min-h-screen flex flex-col bg-slate-50'>
            <Navbar />
            <main className='flex flex-col items-center'>
                <Outlet />
            </main>
        </div>
    )
}

export default UserLayout
