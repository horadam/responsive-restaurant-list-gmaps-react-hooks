import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../config/config';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapContainer = (props) => {
  
    const restaurants = useSelector(appstate => appstate.restaurants);

    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
        setSelected(item);
    }

    const centerLat = Object.keys(selected).length > 1 ? selected.location.lat : props.lat;
    const centerLng = Object.keys(selected).length > 1 ? selected.location.lng : props.lng;

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: centerLat, 
                    lng: centerLng
                }}
        zoom={18}
      >
        {
            restaurants.map(restaurant => {
              return (
              <Marker 
                key={restaurant.name} 
                position={{ 
                    lat: Number(`${restaurant.location.lat}`),
                    lng: Number(`${restaurant.location.lng}`)
                }}
                onClick={() => onSelect(restaurant)}
                />
              )
            })
         }
         {
            selected.name && 
            (
              <InfoWindow
              position={{ 
                lat: Number(`${selected.location.lat}`),
                lng: Number(`${selected.location.lng}`)
                }}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
                <div>
                    <p>{selected.name}</p>
                    <p>{selected.contact ? selected.contact.formattedPhone : ''}</p>
                </div>
            </InfoWindow>
            )
         }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;