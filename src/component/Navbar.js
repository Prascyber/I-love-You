import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <Box sx={{flexGrow:1}}>
       <AppBar position='static' color='secondary'>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                FOREVER  (I LOVE YOU PRIYAL)
            </Typography>
            <Button component={NavLink} to = '/' style={({isActive})=>{return{backgroundColor: isActive ? '#6C4AB6' : ''}}} sx={{color:"white", textTransform:'none', textTransform: 'none'}}>Together</Button>
            <Button component={NavLink} to = '/about' style={({isActive})=>{return{backgroundColor: isActive ? '#6C4AB6' : ''}}} sx={{color:"white", textTransform:'none', textTransform: 'none'}}>World</Button>
            <Button component={NavLink} to = '/contact' style={({isActive})=>{return{backgroundColor: isActive ? '#6C4AB6' : ''}}} sx={{color:"white", textTransform:'none',textTransform: 'none'}}>My SecondHalf</Button>
            <Button component={NavLink} to = '/login' style={({isActive})=>{return{backgroundColor: isActive ? '#6C4AB6' : ''}}} sx={{color:"white", textTransform:'none',textTransform: 'none'}}>You & Me</Button>
        </Toolbar>
       </AppBar>
    </Box>
    </>
  )
}

export default Navbar