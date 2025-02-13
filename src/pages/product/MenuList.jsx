import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList, setProductFilter } from '../../store/allSlice/productSlice';

const MenuList = () => {
  const dispatch = useDispatch();
  
  // Accessing the product state from Redux
  const { product, isLoading, isError, errorMessage } = useSelector((state) => state.product);

  // State to track active category
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    dispatch(getProductList()); // Fetch all products on mount
  }, [dispatch]);

  useEffect(() => {
    dispatch(setProductFilter(product)); // Fetch all products on mount
  }, [dispatch,product]);

  const handleFilter = (category) => {
    setActiveCategory(category); // Update active category

    if (category === "all") {
      dispatch(setProductFilter(product)); // Show all products
    } else {
      const filteredData = product.filter((val) => val.category === category);
      dispatch(setProductFilter(filteredData));
    }
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <h1 className="text-center">New Arrivals</h1>
        <p className="text-center">Check out the most promising products bought by our buyers</p>
        <div className="col-lg-8 col-md-12 pb-5">
          <nav className="text-center">
            <ul className="list-unstyled d-flex justify-content-center gap-2 flex-wrap">
              {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map((category) => (
                <button 
                  key={category} 
                  className={`px-4 btn btn-outline-warning ${activeCategory === category ? "active" : ""}`} 
                  onClick={() => handleFilter(category)}
                >
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default MenuList;
