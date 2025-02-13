import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { getProductList } from '../../store/allSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {
  const dispatch = useDispatch();
    
  // Accessing the product state from Redux
  const { filterData } = useSelector((state) => state.product);
  console.log("productfefsdf",filterData)
  useEffect(() => {
      dispatch(getProductList()); // Dispatch the async thunk
  }, [dispatch]);

    

  return (
    <div className='row pb-5'>
       
          {filterData.map((item)=>{
            return(
                <div className='col-lg-2 g-3'>
                <ProductCart item={item}/>
                </div>
            ) 
            
          })}
          
      
    </div>
  )
}

export default ProductList
