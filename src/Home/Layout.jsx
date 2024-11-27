import React from 'react'
import AppHeader from '../AppBar/AppHeader'
import AppBottom from '../AppBar/AppBottom'

import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from '../Context/FavoritesProvider';
import { KanjiProvider } from '../Context/KanjiProvider';

const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppBottom />
    </>


  )
}

export default Layout