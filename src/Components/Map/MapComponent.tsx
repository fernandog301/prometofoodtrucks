'use client'
import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

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
          // style: 'mapbox://styles/examples/clg45vm7400c501pfubolb0xz',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [longitude, latitude],
          zoom: 10.2,
          attributionControl: false,
        });

        map.on('style.load', () => {
          map.setConfigProperty('basemap', 'lightPreset', 'day'); // the last value can be changed to dawn, day, dusk, or night
        });
    
        
        // Searchbox
        map.addControl(
          new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Search for a location',
          }), 
          'top-left'  
        );
    
        //Geolocator, grabs the devices location
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
          }),
          'bottom-right' 
        );
    

        map.addControl(new mapboxgl.NavigationControl());

          // On click Event
        // map.on('click', (event) => {
        //   const features = map.queryRenderedFeatures(event.point, {
        //     layers: ['chicago-parks']
        //   });
        //   if (!features.length) {
        //     return;
        //   }
        //   const feature = features[0];
    
        //   const popup = new mapboxgl.Popup({ offset: [0, -15] })
        //     .setLngLat(feature.geometry.coordinates)
        //     .setHTML(
        //       `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        //     )
        //     .addTo(map);
        // });

        // Fake Data
        // map.on('load', () => {
        //   map.addSource('earthquakes', {
        //     type: 'geojson',
        //     data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        //   })
        //   map.addLayer({
        //     'id': 'earthquakes-layer',
        //     'type': 'circle',
        //     'source': 'earthquakes',
        //     'paint': {
        //         'circle-radius': 4,
        //         'circle-stroke-width': 2,
        //         'circle-color': 'red',
        //         'circle-stroke-color': 'white'
        //     }
        // });
        // })

        



        // Cleanup function
        return () => map.remove();
      }
    }
    createMap();
  }, [longitude, latitude]);

  return (
    <div className='relative w-full h-full map-bg'>
      {/* <Image src="/DualRing.svg" width={100} height={100} alt="Loading" style={{ display: loadingMap ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> */}
      <div id="map" style={{ width: '100%', height: '100%', position: 'relative' }} />
    </div>
    
  );
};

export default MapComponent;
