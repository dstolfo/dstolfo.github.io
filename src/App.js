import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import MapWithPNG from './components/MapWithPNG';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <CssBaseline />
      {/* Box container to ensure the full-page layout */}
      <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
        <MapWithPNG />
        <ProfileCard />
      </Box>
    </>
  );
}

export default App;
