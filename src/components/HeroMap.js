import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HeroMap = () => {
  const mapRef = useRef(null);
  const resetFlag = useRef(false);

  useEffect(() => {
    if (mapRef.current) {
	  const tileUrl = process.env.PUBLIC_URL + '/0dfd74ecae59cb2a05c41f451302c3db-tiles/{z}/{x}/{y}.png';

      const position = [35.3971, -82.5278]; // new center
      const zoom = 20;

      const bounds = [
        [35.395625, -82.53070825], // Southwest
        [35.398283, -82.52598475], // Northeast
      ];

      const map = L.map(mapRef.current, {
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        zoomControl: false,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0
      }).setView(position, zoom);

      L.tileLayer(tileUrl, {
        tms: true,
        opacity: 0.7,
        attribution: '',
        minZoom: 20,
        maxZoom: 20
      }).addTo(map);

      map.on('moveend', () => {
        if (resetFlag.current) return;
        resetFlag.current = true;
        map.setView(position, map.getZoom());
        resetFlag.current = false;
      });

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

export default HeroMap;
