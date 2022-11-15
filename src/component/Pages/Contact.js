import React from 'react'
import { Grid } from "@mui/material";

import Pic3 from '../../images/for.jpg'
import { fontSize, fontWeight } from '@mui/system';
const Contact = () => {
  return (
    <>
     <Grid container sx={{ height:'90vh', width:'100%', marginLeft:'20px'  }}>
    <Grid item lg={7} sm={4} sx={{
        backgroundImage: `url(${Pic3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'pink',
        fontSize:'25px',
        fontWeight:'bold',
        fontFamily:'sans-serif',
        marginLeft:'240px'
    }}>
     <Grid><p>You don't need to contact, I am always with you and will be !!!

</p></Grid>

   
    
    
  </Grid>
  </Grid>
   
    </>
  )
}

export default Contact