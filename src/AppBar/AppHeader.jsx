import { AppBar, Box, Button, Toolbar, Typography, LinearProgress, Grid2, MenuItem, ListItemIcon } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";

//Drawer imports
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { KanjiContext, KanjiProvider } from '../Context/KanjiProvider';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const [progress,setProgress] = useState(0); 
  const [open, setOpen] = useState(false);
  const {grade, setGrade} = useContext(KanjiContext);
  const navigate = useNavigate();
  // const [selectedGrade, setSelectedGrade] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY; // Amount scrolled
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollProgress = (scrolled / totalHeight) * 100; // Calculate percentage
      setProgress(scrollProgress); // Update progress state
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleGrade = (num) =>{
    setGrade(num);
    console.log(num);
    navigate('/')
  }

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
    { label: 'Grade 1', num: 1 },
    { label: 'Grade 2', num: 2 },
    { label: 'Grade 3', num: 3 },
    { label: 'Grade 4', num: 4 },
    { label: 'Grade 5', num: 5 },
    { label: 'Grade 6', num: 6 }
].map(({label, num}) => (
          <ListItem 
          key={label} >
            <ListItemButton>
              <ListItemText primary={label} onClick={()=>handleGrade(num)} />
            </ListItemButton>
            <ListItemIcon>
            {grade === num && <IoIosCheckmarkCircle style={{ fontSize: '20px' }} />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
 

  return (
    <div>
        
        <AppBar position="fixed" sx={{
          backgroundColor : "white",
          color : "black",
          
          // padding: "15px",
           
        }}
          elevation={0}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

              <Typography variant="subtitle1">
                Z E N
              </Typography>
              
              <CiCircleChevDown onClick={toggleDrawer(true)} style={{ fontSize: '25px',  color: '#656565' }} />

             
        
            </Toolbar>
            

           
        
            
        <LinearProgress variant="determinate" color="inherit" value={progress} />
      </AppBar>
      {/* Bottom Drawer */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>


      {/* {showOptions && <Options onClose={handleCloseOptions} />} */}
          
    </div>
  )
}

export default AppHeader