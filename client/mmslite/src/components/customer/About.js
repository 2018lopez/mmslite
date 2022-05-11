import * as React from 'react';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FlagIcon from '@mui/icons-material/Flag';
import InfoIcon from '@mui/icons-material/Info';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };

const About = ()=>{

    return(
        <div>
            <Header/>
            <h1>About Us</h1>
            <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: '#fff' }}
            >
           
            <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
            
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <FlagIcon sx={{ fontSize: 40 }} color='success'/>
                        <Typography variant="h3" sx={{ my: 5 }}>
                            MMS-Lite
                        </Typography>
                        <Typography variant="h5">
                            {
                            'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                            }

                            {
                            ', go for a mini-vacation just a few subway stops away from your home.'
                            }
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                        <InfoIcon sx={{ fontSize: 40 }} color='success'/>
                        <Typography variant="h3" sx={{ my: 5 }}>
                            Goal
                        </Typography>
                        <Typography variant="h5">
                            {
                            'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                            }

                            {'your Sundays will not be alike.'}
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                        <DataUsageIcon sx={{ fontSize: 40 }} color='success'/>
                        <Typography variant="h3" sx={{ my: 5 }}>
                            Mission
                        </Typography>
                        <Typography variant="h5">
                            {'By registering, you will access specially negotiated rates '}
                            {'that you will not find anywhere else.'}
                        </Typography>
                        </Box>
                    </Grid>
                    </Grid>
            </Container>
            </Box>
             <Footer/>
        </div>
       
    );

};

export default About;