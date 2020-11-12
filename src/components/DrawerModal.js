import React from 'react';
import MapContainer from './MapContainer';

const DrawerModal  = (props) => {

    return (
        <div className='mapView'>
                <MapContainer 
                    lng={props.lng}
                    lat={props.lat}
                />
                <div className='restaurantMainInfo'>
                    <p className='name'>{props.name}</p>
                    <p className='category'>{props.category}</p>
                </div>
                <p className='address'>{props.address}</p>
                <p className='stateZip'>{props.stateZip}</p>
                <p className='phone'>{props.phone}</p>
                { props.twitter ? <a className='twitter' href={`http://twitter.com/${props.twitter}`} target='_blank' rel='noopener noreferrer'>@{props.twitter}</a> : '' }
        </div>
    )
}

export default DrawerModal