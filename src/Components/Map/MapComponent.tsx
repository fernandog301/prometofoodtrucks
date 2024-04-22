'use client'
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG9nMzAxIiwiYSI6ImNsdGdncnd2ZjExamgyanNiZXQ0NTRmcmsifQ.Hsv6Ht580GomA2oEK5ZMeQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/examples/clg45vm7400c501pfubolb0xz',
      center: [-87.661557, 41.893748],
      zoom: 10.7
    });

    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['chicago-parks']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    });

    // Cleanup function
    return () => map.remove();
  }, []);

  return (
    <div className='w-full h-full'>
    <div id="map" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MapComponent;
