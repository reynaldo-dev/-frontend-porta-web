import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const AdministrationLayout = () => {
  return (
    <div>
     <Navbar />

      <Outlet />
    </div>
  )
}
