import React from "react";
import img from "../../assist/images/image 24.png"

const ClientReviews = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2 className="fw-bold">Reviews</h2>
        <p className="text-muted">This is what our customers have to say</p>
      </div>
      
      <div className="d-flex justify-content-center">
        <div className="card p-4 shadow-lg rounded-4 border-0" style={{ maxWidth: "800px", display: "flex", flexDirection: "row", alignItems: "center"}}>
          {/* Profile Image Placeholder */}
          <div className="me-4">
            <img 
              src={img} 
              alt="User" 
              className="rounded-circle border"
              width="100"
              height="100"
            />
          </div>
          
          {/* Review Content */}
          <div>
            <p className="text-muted mb-2">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
            </p>
            <p className="fw-bold mb-0">Mohd Zafar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
