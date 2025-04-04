import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon

const ProfileCard = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect after the component mounts
  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in state change
  }, []);

  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: {
          xs: '50%',
          sm: '50%',
          md: '70%',
        },
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '15px',
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        width: {
          xs: '90%',
          sm: '80%',
          md: '25%',
        },
        maxWidth: '400px',
        padding: {
          xs: '20px',
          sm: '15px',
          md: '10px',
        },
        opacity: fadeIn ? 1 : 0, // Control opacity for fade-in effect
        transition: 'opacity 1s ease-in-out', // Smooth fade-in transition
      }}
    >
      <CardContent sx={{ '&:last-child': { paddingBottom: '16px' } }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom>
          DAVID STOLFO
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Raleway", sans-serif', paddingBottom: '10px' }}>
          <strong>Mapping Progress, Creating Solutions</strong>
          <br /><br />
          David is a geospatial information scientist focused on reality capture, multispectral imaging, and photogrammetry. His work aims to make society more efficient by using technology to drive better decisions and sustainable solutions.
          {/*David holds a Part 107 drone pilot certification and is the owner of Blue Ridge Aerial Mapping LLC, a company founded to provide agricultural and industrial mapping services to the Western Carolina community.*/}
          {/*David holds a Part 107 drone pilot and HAM radio license, allowing him to engage in aerial data collection to create detailed spatial models through advanced mapping techniques. */}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', paddingBottom: '0px' }}>
          <a href="https://www.linkedin.com/in/david-stolfo-3697a055" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ color: 'white', fontSize: 40 }} />
          </a>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
