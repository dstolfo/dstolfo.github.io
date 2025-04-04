import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithPNG = () => {
  const mapRef = useRef(null);
  const resetFlag = useRef(false); // Ref to keep track of resetting state

  useEffect(() => {
    if (mapRef.current) {
      const position = [35.3847, -82.7501]; // Default webmap coordinates
      const zoom = 16;                      // Default zoom
      // Define the bounds to restrict map dragging
      const bounds = [
        [35.365171, -82.780510], // South-West corner (latitude, longitude)
        [35.404256, -82.7197766], // North-East corner (latitude, longitude)
      ];

      // Initialize the map with zoom and drag restrictions
      const map = L.map(mapRef.current, {
        attributionControl: false, // Disable Leaflet attribution control
        scrollWheelZoom: false,    // Disable scroll wheel zoom
        doubleClickZoom: false,    // Disable double click zoom
        touchZoom: false,          // Disable pinch zoom on touch devices
        zoomControl: false,        // Disable zoom control buttons
        maxBounds: bounds,         // Restrict dragging within the bounds
        maxBoundsViscosity: 1.0    // Optional: makes the boundaries sticky (helps prevent the map from jumping)
      }).setView(position, zoom); // Set the initial view

      // Function to load and handle PNG data
      const loadPNG = () => {
        const pngUrl = process.env.PUBLIC_URL + '/images/20250321_4326.png';  // This works both locally and when deployed

        // Define the bounds (coordinates for the image's corners)
        const overlayBounds = [
          [35.4064273, -82.7838841], // Upper Left corner (latitude, longitude)
          [35.3629998, -82.7164025], // Lower Right corner (latitude, longitude)
        ];

        // Add the PNG image as an image overlay
        L.imageOverlay(pngUrl, overlayBounds, {
          opacity: 1.0,
        }).addTo(map);
      };

      // Call the function to load and display the PNG
      loadPNG();

      // SnapBackMap functionality - listen to moveend event
      map.on('moveend', () => {
        if (resetFlag.current) return; // Prevent recursive reset
        resetFlag.current = true; // Set flag to prevent recursion
        map.setView(position, map.getZoom()); // Reset map view to the original position
        resetFlag.current = false; // Reset the flag after the map reset
      });

      // Cleanup when component unmounts
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <div ref={mapRef} style={{ height: '100%' }} />
    </Box>
  );
};

export default MapWithPNG;
