import { Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import './banner.css'
const Banner = () => {
    const history=useHistory()
    return (
        <Box sx={{
            display:'flex',
            alignItems:'center',
            padding:'50px'
           
        }}
        className='banner'
        >
         
            <Box sx={{my:'40px'}}>
               <p style={{
                   fontSize:'50px',fontWeight:'500',color:'pink'
                   }}>Trust us, we’re professionals</p>
               <p style={{fontSize:'80px',fontWeight:'900',color:'white'}}>Your Journey <br /> Begins Now</p>
               <Button  variant='outlined' color='secondary'>Our Services</Button>
            </Box>
           
        </Box>
    );
};

export default Banner;