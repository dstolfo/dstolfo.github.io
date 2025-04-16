import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import HeroMap from './components/HeroMap';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <CssBaseline />
      {/* Box container to ensure the full-page layout */}
      <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
        <HeroMap />
        <ProfileCard />
      </Box>
    </>
  );
}

export default App;
