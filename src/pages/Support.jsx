"use client"

import {FaTruck, FaGift, FaCreditCard, FaHeadset } from "react-icons/fa"
import { Link } from "react-router-dom"

const Support=()=> {
  return (
    <>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <div className="d-flex align-items-center justify-content-center flex-column text-center">
              <FaTruck className="text-success mb-2" size={24} />
              <h6 className="mb-1">Free Shipping</h6>
              <small className="text-muted">Orders over $100</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex align-items-center justify-content-center flex-column text-center">
              <FaGift className="text-success mb-2" size={24} />
              <h6 className="mb-1">Smart Gift Card</h6>
              <small className="text-muted">Buy $1000 to get card</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex align-items-center justify-content-center flex-column text-center">
              <FaCreditCard className="text-success mb-2" size={24} />
              <h6 className="mb-1">Quick Payment</h6>
              <small className="text-muted">100% secure payment</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex align-items-center justify-content-center flex-column text-center">
              <FaHeadset className="text-success mb-2" size={24} />
              <h6 className="mb-1">24/7 Support</h6>
              <small className="text-muted">Quick support</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support

