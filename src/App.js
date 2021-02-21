import './App.css';
import React, {useEffect, useState} from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
// import Login from './components/Login'

function App() {
const [items, setItems] = useState([])
const [isLoading, setIsLoading]=useState(true)
const [fetchError, setFetchError] = useState(null)

  useEffect(()=>{
    const fetchItems = async() => {
      await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        (data) => {
          setItems(data)
          setIsLoading(false)
        },
        (error) => {
          setFetchError(error)
          setIsLoading(false)
        }

      );
    }
    fetchItems()
  },[])

  
  return (
   <>
   <Nav />
   <Hero />
   <Featured items={items} isLoading={isLoading}/>
   {/* <Footer /> */}
   
   </>
  );
}

export default App;
