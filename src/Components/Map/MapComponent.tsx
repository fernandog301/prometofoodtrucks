'use client'
import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image'

const MapComponent = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [loadingMap, setLoadingMap] = useState(true);

  const location = async () => {
    const promise = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=5affdbac674e47b0977a8f4bba6b9ea2`);
    const data = await promise.json();

    setLongitude(data.location.longitude);
    setLatitude(data.location.latitude);
  }
  
  useEffect(() => {
    
    const createMap = async () => {
      await location();
      mapboxgl.accessToken = await 'pk.eyJ1IjoiZmVybmFuZG9nMzAxIiwiYSI6ImNsdGdncnd2ZjExamgyanNiZXQ0NTRmcmsifQ.Hsv6Ht580GomA2oEK5ZMeQ';
      if (longitude !== null && latitude !== null) {
        setLoadingMap(false);
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/examples/clg45vm7400c501pfubolb0xz',
          center: [longitude, latitude],
          zoom: 10.7,
          attributionControl: false
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
      }
    }
    createMap();
  }, [longitude, latitude]);

  return (
    <div className='relative w-full h-full map-bg'>
      <Image src="/DualRing.svg" width={100} height={100} alt="Loading" style={{ display: loadingMap ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div id="map" style={{ width: '100%', height: '100%', position: 'relative' }} />
    </div>
  );
};

export default MapComponent;
