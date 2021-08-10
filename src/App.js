import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhNGM0NzA4MG0yb210enlhOWkxaHkifQ.GEhDTku0VpkCA5wdnwDBvA';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(44.9778);
  const [lng, setLng] = useState(-93.265);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <main>
      <h1>Mapbox GL JS React</h1>
      <div ref={mapContainer} className="map-container" />
    </main>
    
  );
}

export default App;
