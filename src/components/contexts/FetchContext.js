import React, {useState, createContext} from 'react'

export const FetchContext = createContext()

export function FetchContextProvider({children}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [cart, setCart] = useState([])


    const fetchItems = async () => {
        await fetch(`https://fakestoreapi.com/products/`)
          .then((res) => res.json())
          .then(
            (data) => {
                setItems(data)                             
            }
          ).catch(()=> {
              console.log('fetching error')
              setFetchError(true)
          })
          setIsLoading(false)
      };

    const addToCart = (id1) => {

        const data = items.find(item => {
            return item.id === parseInt(id1)
        })


        if(cart.filter(el => el.id === parseInt(id1)).length > 0){
            setCart([...cart])
        } else {
            setCart([...cart, data])
        }

       
        
    }
   
    const value={
        items, 
        isLoading,
        fetchError,
        fetchItems,
        cart,
        setCart,
        addToCart,
    }


    return (
        <FetchContext.Provider value={value}>
            {children}
        </FetchContext.Provider>
    )

}