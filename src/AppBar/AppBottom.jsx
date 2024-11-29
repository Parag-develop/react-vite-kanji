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

  useEffect(() => {
    // Check if the current path is not the home route
    if (location.pathname !== '/') {
        // Get navigation entries
        const entries = performance.getEntriesByType("navigation");

        // Check if there's an entry and if it's of type "reload"
        if (entries.length > 0 && entries[0].type === "reload") {
            // Redirect to home route
            window.location.replace('/'); // This will force a redirect to home
        }
    }
}, [location.pathname]);
  
  



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