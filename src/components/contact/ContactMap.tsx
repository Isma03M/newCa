import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Convertir las coordenadas de grados/minutos/segundos a decimales
  // 38°15'27.5"N 122°07'41.7"W
  const lat = 38.25764;  // 38 + 15/60 + 27.5/3600
  const lng = -122.12825; // -(122 + 7/60 + 41.7/3600)

  useEffect(() => {
    console.log("Initializing map...");
    if (!mapContainer.current) {
      console.log("Map container not found");
      return;
    }

    try {
      // Initialize map
      mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHM0Z2V2NW0wMGRqMmtvNTU4ZnBxb2NrIn0.Ac1m2F7QDNd8pJB2_kbadg';
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: 13
      });

      console.log("Map initialized successfully");

      // Agregar marcador
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map.current);

      // Agregar controles de navegación
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        console.log("Map loaded completely");
      });

    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      if (map.current) {
        console.log("Cleaning up map");
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] relative mb-20">
      <div 
        ref={mapContainer} 
        className="absolute inset-0 bg-gray-100"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ContactMap;