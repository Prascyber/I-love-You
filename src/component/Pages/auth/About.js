import React from 'react'
import { Grid } from "@mui/material";
import PicLove2 from '../../../images/L.svg'
import Pic5 from '../../../images/pic4.png'
const About = () => {
  return (
    <>
    <Grid container sx={{ height:'84vh', width:'140%', marginLeft:'70px' }}>
    <Grid item lg={3} sm={6} sx={{
        backgroundImage: `url(${Pic5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
       
    }}>
        <Grid container sx={{height:'84vh', width:'80%',marginLeft:'90px', fontWeight:'bold'}}> <p>“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” ---
        <Grid sx={{color:'#8D72E1', fontWeight:'bold', fontFamily:'sans-serif', fontSize:'30px', marginTop:'10px'}}><p>I Love You</p></Grid>
</p>
</Grid>

<Grid item lg={6} sm={3} sx={{
     backgroundImage: `url(${PicLove2})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
}}></Grid>   
    </Grid>
  </Grid>
    </>
  )
}

export default About