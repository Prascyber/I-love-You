import React from 'react'
import { Grid } from "@mui/material";
import PicLove from '../../images/Love.svg'


import Pic6 from '../../images/me.jpg'
const Home = () => {
  return (
    <>
     <Grid container sx={{ height:'84vh', width:'140%' }}>
    <Grid item lg={3} sm={6} sx={{
        backgroundImage: `url(${Pic6})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontWeight:'bold',
        marginTop: '20px',
        borderRadius:'20px',
        color:'',
        marginLeft:'15px',
        fontSize:'30px',
        fontFamily:'sans-serif',
        textShadow:'inherit'
        
       
    }}>
      <p sx={{color:'#F8FFDB'}}>   ❤️ HEY BEAUTIFUL GIRL ❤️

</p>

    </Grid>

    <Grid item lg={6} sm={3} sx={{
      backgroundImage: `url(${PicLove})`,
      backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}></Grid>
        
    


  </Grid>
    
    </>
  )
}

export default Home