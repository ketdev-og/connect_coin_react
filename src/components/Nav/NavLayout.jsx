import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Navlayout = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default Navlayout