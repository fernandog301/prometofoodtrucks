'use client'

import { useEffect, useState } from 'react';

import Image from 'next/image'
import { getMapDots } from '@/app/utils/DataServices';


import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';



const MapComponent = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [loadingMap, setLoadingMap] = useState(true);
  const [stringArray, setStringArray] = useState('')


  const location = async () => {
    const promise = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=5affdbac674e47b0977a8f4bba6b9ea2`);
    const data = await promise.json();

    setLongitude(data.location.longitude);
    setLatitude(data.location.latitude);
  }

  useEffect(() => {

    const createMap = async () => {
      await location();
      mapboxgl.accessToken = await process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';
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


        getData().then(mapDots => {
          newMap.on('load', () => {
              newMap.addSource('FoodTruck', {
                  type: 'geojson',
                  // Use a URL for the value for the data property.
                  data: mapDots,
              });
  
              newMap.addLayer({
                  'id': 'FoodTruck',
                  'type': 'circle',
                  'source': 'FoodTruck',
                  'paint': {
                      'circle-radius': 6,
                      'circle-stroke-width': 2,
                      'circle-color': 'red',
                      'circle-stroke-color': 'white'
                  }
                  
              });
              const popup = new mapboxgl.Popup({
                closeButton: true,
                closeOnClick: true
            });
              
              
              newMap.on('click', 'FoodTruck', (e: any) => {
                  newMap.getCanvas().style.cursor = 'pointer';
      
      
                  // Copy coordinates array.
                  const coordinates: any = e?.features?.[0]?.geometry?.coordinates?.slice();
                  const Address = e?.features?.[0]?.properties?.address;
                  const Category  = e?.features?.[0]?.properties?.category;
      
                  const City = e?.features?.[0]?.properties?.city;
                  const Description = e?.features?.[0]?.properties?.description;
                  const Image = e?.features?.[0]?.properties?.image;
                  const Name = e?.features?.[0]?.properties?.name; 
                  const Schedule = e?.features?.[0]?.properties?.schedule;
                  const Rating = e?.features?.[0]?.properties?.rating;
                  const State = e?.features?.[0]?.properties?.state;
                  const ZipCode = e?.features?.[0]?.properties?.zipCode;
      
      
                  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180){
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                  }
      // 
                  const popupContent = `<div className="overflow-hidden"><strong>${Name}</strong><br><p>${Address} ${City}, ${State} ${ZipCode}</p><p>Image: ${Image}</p><p>Schedule: ${Schedule}</p><p>Description: ${Description}</p><p>Category: ${Category}</p><p>Rating: ${Rating}</p></div>`;
      
                  popup.setLngLat(coordinates).setHTML(popupContent).addTo(newMap);
      
              })
      
          });
          
        })


        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
      });
        newMap.on('mouseenter', 'FoodTruck', (e: any) => {
        // Change the cursor style as a UI indicator.
        newMap.getCanvas().style.cursor = 'pointer';


        const coordinates: any = e?.features?.[0]?.geometry?.coordinates?.slice();
        const Address = e?.features?.[0]?.properties?.address;
        const City = e?.features?.[0]?.properties?.city;
        const State = e?.features?.[0]?.properties?.state;
        const ZipCode = e?.features?.[0]?.properties?.zipCode;        
        const Name = e?.features?.[0]?.properties?.name;
        const Img = e?.features?.[0]?.properties?.image;
        const Schedule = e?.features?.[0]?.properties?.schedule;
        const Description = e?.features?.[0]?.properties?.description;
        const Category = e?.features?.[0]?.properties?.category;
        const Rating = e?.features?.[0]?.properties?.rating;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      const popupContent = `<div><strong>${Name}</strong><br><p>${Address} ${City}, ${State} ${ZipCode}</p><p>Img: ${Img}</p><p>Schedule: ${Schedule}</p><p>Description: ${Description}</p><p>Category: ${Category}</p><p>Hours of Operation: ${Rating}</p></div>`;

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(popupContent).addTo(newMap);
  });


  newMap.on('mouseleave', 'FoodTruck', () => {
    newMap.getCanvas().style.cursor = '';
    popup.remove();
});

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
    <div className='relative w-full h-full map-bg overflow-hidde'>
      {/* <Image src="/DualRing.svg" width={100} height={100} alt="Loading" style={{ display: loadingMap ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> */}
      <div id="map"  style={{ width: '100%', height: '100%', position: 'relative' }} />
    </div>
    
  );
};

export default MapComponent;
