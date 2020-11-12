import React, { useEffect } from 'react'
import { getRestaurants} from '../actions/actions'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { Alert } from '@material-ui/lab';
import RestaurantCard from './RestaurantCard'

const MainContainer = () => {

    useEffect(() => {
        getRestaurants()
     },[])

    const restaurants = useSelector(appstate => appstate.restaurants)
    const error = useSelector(appstate => appstate.error)
 
    return (

      <div >
        {
            !error ?
                <Grid
                    container
                    spacing={2}
                    style={{padding: '24px'}}
                >
                {restaurants.map((restaurant, i) =>
                    <Grid
                        item
                        xs={12} sm={6} md={4} lg={4} xl={3}
                        key={'restaurant - ' + i} 
                    >
                        <RestaurantCard
                            name={restaurant.name}
                            category={restaurant.category}
                            img={restaurant.backgroundImageURL}
                            address={restaurant.location.address}
                            stateZip={restaurant.location.formattedAddress ? restaurant.location.formattedAddress[1] : ''}
                            phone={restaurant.contact ? restaurant.contact.formattedPhone : ''}
                            twitter={restaurant.contact ? restaurant.contact.twitter : ''}
                            lat={restaurant.location.lat}
                            lng={restaurant.location.lng}
                        />
                    </Grid>
                )}
                </Grid>
                : <Alert variant='outlined' severity='error'>
                    <strong>
                        Error fetching the restaurant data: {error.message}
                    </strong>
                </Alert>
        }
      </div>
    )
}

export default MainContainer;