import React, { useEffect, useContext} from 'react'
import Hero from "./Hero";
import Featured from "./Featured";
import {FetchContext} from './contexts/FetchContext'

const Home = () => {
    
    const {fetchItems} = useContext(FetchContext)
  
    useEffect(() => {
      fetchItems();
    }, []);
  
    return (
        <div>
        <Hero />
        {/* <Featured/> */}
        </div>
    )
}

export default Home
