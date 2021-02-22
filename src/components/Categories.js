import React, {useContext} from 'react'
import { FetchContext } from './contexts/FetchContext'

const Categories = () => {
    const {setQuery, items} = useContext(FetchContext)

    const handleShowAllCategories = () => {
setQuery("")
    }

    return (
        
        <div>
            <ul>
                <li onClick={handleShowAllCategories}>All</li>
                {items}.map((item) => (<li>{item}</li>
                )
                
                )
             
            </ul>
        </div>
    )
}

export default Categories
