import React from 'react'
import iconMap from '../assets/icon_map@2x.png'

const Header = () => {

    return (
        <div className='header'>
            <h3 className='headerText'>Lunch Tyme</h3>
            <img id='iconMap' src={iconMap} alt=''/>
        </div>
    )
}

export default Header;