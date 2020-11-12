import store from '../store'
import Axios from 'axios'

export function getRestaurants() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
    Axios.get(proxyurl + url)
    .then(resp => {
        store.dispatch({
            type: 'GET_RESTAURANTS',
            payload: resp.data
        })
    }).catch(err => {
        store.dispatch({
            type: 'GET_RESTAURANTS_ERROR',
            payload: err
        })
    })
}