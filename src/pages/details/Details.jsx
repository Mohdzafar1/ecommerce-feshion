import React, { useEffect } from "react";
import { FaStar, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../store/allSlice/productSlice";
import { addToCart } from "../../store/allSlice/cartSlice";
import { showSuccessToast } from "../../helper/toast";

const Detail = () => {
    const { singleProduct, isLoading, isError, errorMessage } = useSelector((state) => state.product);
    const { addCart} = useSelector((state) => state.cart);
    console.log("addCart",addCart) 

     const dispatch=useDispatch()
    const {id}= useParams()
    

    useEffect(()=>{
      dispatch(getSingleProduct(id))
    },[isFinite,dispatch])

    const handleAddToCart=(item)=>{
      dispatch(addToCart(item))
      showSuccessToast("Product into cart")
    }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side - Image Gallery */}
        <div className="col-md-6">
          <div className="d-flex flex-column">
          
              <img src={singleProduct.image} className="img-thumbnail mb-2" alt="product" style={{width:"100%",height:"50%"}} />
           
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="col-md-6">
          <h3>{singleProduct.title}</h3>
          <p className="text-success">{singleProduct.stock}</p>
          <h4 className="text-primary">${singleProduct.price}</h4>
          <div className="d-flex align-items-center mb-2">
            <FaStar className="text-warning me-1" />
            <span className="fw-bold">{singleProduct?.rating?.rate}</span>
            <span className="text-muted ms-2">({singleProduct?.rating?.count} reviews)</span>
          </div>
          <p>{singleProduct?.description}</p>


          {/* Quantity and Buttons */}
          <div className="d-flex align-items-center mb-3">
            {/* <button className="btn btn-outline-secondary">-</button>
            <span className="mx-2">2</span>
            <button className="btn btn-outline-secondary">+</button> */}
          </div>
          <button className="btn btn-danger me-2" onClick={()=>handleAddToCart(singleProduct)}>
            <FaShoppingCart className="me-2" /> Add to Cart
          </button>
          <button className="btn btn-outline-secondary">❤️</button>

          {/* Delivery & Returns */}
          <div className="mt-4 p-3 border">
            <p className="mb-1"><FaTruck className="me-2" /> Free Delivery</p>
            <p className="mb-1 text-muted">Enter your postal code for delivery availability</p>
            <p className="mb-1"><FaUndo className="me-2" /> Return Delivery</p>
            <p className="text-muted">Free 30 Days Delivery Returns. <a href="#">Details</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
