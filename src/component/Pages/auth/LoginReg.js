import React from 'react'
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic1 from '../../../images/LOVE.jpg'
const LoginReg = () => {
  return (
    <>
     <Grid container sx={{ height:'80vh' }}>
    <Grid item lg={7} sm={4} sx={{
        backgroundImage: `url(${Pic1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color:'#FF7D7D',
        fontWeight:'bold',
        fontFamily:'sans-serif',
        fontSize:'15px'
        
        

        

        


    }}>
 <p>You make me feel like I can do anything and I am so happy to be with you. Thank you for being the wonderful, amazing person that you are. You surprise me every day and you warm my heart every night. I am the person I am today because you’ve loved me and helped me, love</p>

    </Grid>

    <h1 sx={{}}>Hey, Priyal Gupta !!</h1>
    {/* <p>You make me feel like I can do anything and I am so happy to be with you. Thank you for being the wonderful, amazing person that you are. You surprise me every day and you warm my heart every night. I am the person I am today because you’ve loved me and helped me, love</p> */}
  </Grid>

    </>
  )
}

export default LoginReg