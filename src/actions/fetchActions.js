// import {FETCH_ITEMS} from '../types.js'

const FETCH_ITEMS = "FETCH_ITEMS"

export const fetchItems = () => dispatch => {
    console.log('fetching')
    
       fetch(`https://fakestoreapi.com/products/`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
              type: FETCH_ITEMS,
              payload: data
          })
  
        })
    //     .catch(() => {
    //       console.log("fetching error");
    //       setFetchError(true);
    //     });
    //   setIsLoading(false);
     
}