import { AppBar, Backdrop, Button, CircularProgress, Divider, Grid2, Paper, Toolbar, Typography } from '@mui/material';
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import React, { useEffect, useState } from 'react'


const AppBottom = () => {
  const location = useLocation();

  
  



  return (
    <Box >
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
        <BottomNavigation>

          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction
              value="home"
              icon={location.pathname === '/' ?
                <GoHomeFill style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} /> :
                <GoHome style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} />}
            />
          </Link>

          <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction 
            value="favorites"
            icon={location.pathname === '/favorites' ?
              <GoHeartFill style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} /> :
              <GoHeart style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} />}
           />
          </Link>

          <Link to="/info" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction 
            value="info"
            icon={location.pathname === '/info' ?
              <IoIosInformationCircle style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} /> :
              <IoIosInformationCircleOutline style={{ fontSize: '20px', paddingTop: '10px', color: '#656565' }} />}
           />
          </Link>

        </BottomNavigation>


      </Paper>
    </Box>
    
  )
}


export default AppBottom