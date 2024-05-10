'use client'
import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { getMapDots } from '@/app/utils/DataServices';
import map from 'react-map-gl/dist/esm/components/map';

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
        const newMap = new mapboxgl.Map({
          container: 'map',
          // style: 'mapbox://styles/examples/clg45vm7400c501pfubolb0xz',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [longitude, latitude],
          zoom: 10.2,
          attributionControl: false,
        });

        newMap.on('style.load', () => {
          newMap.setConfigProperty('basemap', 'lightPreset', 'day'); // the last value can be changed to dawn, day, dusk, or night
        });

        const getData = async () => {
          const mapDots: any = await getMapDots();
          console.log(mapDots);
          return mapDots;
      }
        
        // Searchbox
        // newMap.addControl(
        //   new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,
        //     mapboxgl: mapboxgl,
        //     placeholder: 'Search for a location',
        //   }), 
        //   'top-left'  
        // );
        
        getData().then(mapDots => {
          newMap.on('load', () => {
              newMap.addSource('earthquakes', {
                  type: 'geojson',
                  // Use a URL for the value for the data property.
                  data: mapDots,
              });
  
              newMap.addLayer({
                  'id': 'earthquakes-layer',
                  'type': 'circle',
                  'source': 'earthquakes',
                  'paint': {
                      'circle-radius': 4,
                      'circle-stroke-width': 2,
                      'circle-color': 'red',
                      'circle-stroke-color': 'white'
                  }
              });
          });
        })
        //Geolocator, grabs the devices location
        newMap.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
          }),
          'bottom-right' 
        );
    
        // newMap.addControl(new mapboxgl.FullscreenControl());
        newMap.addControl(new mapboxgl.NavigationControl());
        // newMap.addControl(new mapboxgl.ScaleControl());

        
        // setMap(newMap);

        // Cleanup function
        return () => newMap.remove();
      }
      
    }
    // useEffect(() => {
    //   // Searchbox outside of the map display?
    //   if (map && geocoderContainerRef.current) {
    //       const geocoder = new MapboxGeocoder({
    //           accessToken: mapboxgl.accessToken,
    //           mapboxgl: mapboxgl,
    //           placeholder: 'Search for a location',
    //       });
    //       geocoderContainerRef.current.appendChild(geocoder.onAdd(map));
    //   }
    createMap();
  }, [ longitude, latitude]);

  return (
    <div className='relative w-full h-full map-bg'>
      {/* <Image src="/DualRing.svg" width={100} height={100} alt="Loading" style={{ display: loadingMap ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> */}
      <div id="map" style={{ width: '100%', height: '100%', position: 'relative' }} />
    </div>
    
  );
};

export default MapComponent;
