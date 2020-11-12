const initialState = {
    restaurants: [],
    error: ''
  }

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RESTAURANTS':
            return { ...state, error: '', restaurants: action.payload.restaurants }
        case 'GET_RESTAURANTS_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
  }
}