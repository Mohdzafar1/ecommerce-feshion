import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProductList } from '../../store/allSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../product/ProductCart'

const TradingCollection = () => {
  const[page,setPage]=useState(6)  
  const dispatch = useDispatch();
    
  // Accessing the product state from Redux
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
      dispatch(getProductList()); // Dispatch the async thunk
  }, [dispatch]);

  const showMore=()=>{
    return setPage(page + 6)
  }

  const showLess=()=>{
    return setPage(page - 6)
  }
    

  return (
     <div className='container'>
           <div className='row pb-5'>
          <div className='text-center py-3'>
          <h3>Trending Collection</h3>
          <p>Check out most promising product bought by our buyers</p>
          </div>
       {product.slice(0,page).map((item)=>{
         return(
             <div className='col-lg-2 g-3'>
             <ProductCard item={item}/>
             </div>
         ) 
         
       })}
 </div>
     
 <button  className="btn btn-success btn-lg px-4 py-2 rounded-pill align-items-center"
    style={{ backgroundColor: "#004D40", borderColor: "#004D40" }} onClick={showMore}>Show More</button>

  {
    (page>7) && (
        <button  className="btn btn-danger btn-lg px-4 py-2 rounded-pill align-items-center mx-3"
     onClick={showLess}>Show More</button>
    )
  }
</div>
  )
}

export default TradingCollection
