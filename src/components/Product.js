// import React, { useContext, useEffect, useState} from "react";
// import { FetchContext } from "./contexts/FetchContext";
// import "./styles/Product/Product.css";
// import Arrow from "../assets/long-arrow-alt-left-solid.svg";
// import {Link, useParams, useRouteMatch } from 'react-router-dom'

// const Product = ({item}) => {
//   const { items } = useContext(FetchContext);
//   const { isLoading } = useContext(FetchContext);
//   const { fetchError } = useContext(FetchContext);
//   const { fetchItems } = useContext(FetchContext);
//   const [singleItem, setSingleItem] = useState({})
//   let {id} = useParams()
//   const {url} = useRouteMatch()
//   console.log(item)

// const currentId = parseInt(id)

//   useEffect(() => {
//     fetchItems()
    
//   }, []);


//   return (
//       <> 
             

//       <button className="back-btn"><Link to="/products"><img src={Arrow} alt=""></img></Link></button>
//     <section className="product">
//       {fetchError ? <p className="info">Sorry, something went wrong</p> : ""}
//       {isLoading ? (
//         <p className="info">Loading...</p>
//       ) : (
//         <section>
//           {items.slice(1,2).map((item) => (


//             <div key={item.id} className="single-item">
//             <p className="item-title">{item.title}</p>
//                <div className="item-content">
//                  <img className="item-image" src={item.image} alt=""></img>

//                  <div className="item-inner">
//                      <div class="buy">
//                      <p className="item-price">${item.price}</p>
//                      <button className="add-btn">ADD TO BASKET</button>
//                      </div>

//                     <p className="item-description">{item.description}</p>

//                  </div>
//                </div>
//              </div>

// ))}
          
//         </section>
//       )}
//     </section>
//     </>
//   );
// };

// export default Product;
