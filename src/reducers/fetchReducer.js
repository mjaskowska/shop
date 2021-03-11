// import {FETCH_ITEMS} from '../actions/types'

const FETCH_ITEMS = "FETCH_ITEMS"

const initialState = {
    items: [],
    item: {}
}

const fetchReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            }
       default:
           return state;

    }
}

export default fetchReducer