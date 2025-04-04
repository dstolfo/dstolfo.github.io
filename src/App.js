import React from 'react';
import { CssBaseline, Box, Card, CardContent, Typography } from '@mui/material';
import MapWithPNG from './components/MapWithPNG';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon

function App() {
  return (
    <>
      <CssBaseline />
      {/* Box container to ensure the full-page layout */}
      <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
        <MapWithPNG />

        {/* Floating content box using MUI Card */}
        <Card
          sx={{
            position: 'absolute',
            top: '50%', // Vertically center the box
            right: '15%', // Slightly off the right edge of the screen
            transform: 'translateY(-50%)', // Correct for centering
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background for visibility
            borderRadius: '15px', // Rounded corners
            padding: '10px', // Some padding inside the box
            color: 'white', // Text color
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Optional shadow for the box
            zIndex: 1000, // Ensure the box is on top of the map
            width: '25%', // Set the width for the box
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
              <br /><br />
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
      </Box>
    </>
  );
}

export default App;
