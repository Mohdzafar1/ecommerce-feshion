import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import img1 from "../../assist/images/boy.png"
import img2 from "../../assist/images/child.png"
import img3 from "../../assist/images/men_small 1.png"



const SaleLayout = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-3  text-white rounded text-center d-flex" style={{backgroundColor:"#58C4E4"}}>
             <div className="pt-5">
             <h4>Collection For Girls</h4>
            <p>Up To <strong className="text-warning">40% Off</strong></p>
            <button className="btn btn-light">
              <FaShoppingBag /> Shop Now
            </button>
             </div>
             <div className="pt-2">
             <img src={img1} alt="Collection For Girls" className="img-fluid " />
             </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3  text-white rounded text-center d-flex" style={{backgroundColor:"#FFE14B"}}>
             <div className="pt-5">
             <h4>Collection For Mens</h4>
            <p>Up To <strong className="text-warning">40% Off</strong></p>
            <button className="btn btn-light">
              <FaShoppingBag /> Shop Now
            </button>
             </div>
             <div className="pt-2">
             <img src={img3} alt="Collection For Girls" className="img-fluid " />
             </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3 g-3">
  <div className="col-12 bg-light p-4 rounded position-relative" style={{ backgroundColor: "#ECF0F3" }}>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
      
      {/* Left Side - Text Content */}
      <div className="text-start text-md-left flex-grow-1">
        <div className="sale-banner position-absolute" 
          style={{ top: "50px", left: "50px", background: "yellow", padding: "15px", textAlign: "center", fontWeight: "bold", fontSize: "1.5rem", transform: "skew(-10deg)" }}>
          SALE! <br /> 07 to 14 February
        </div>
        <h3 className="display-4 fw-bold mb-4" style={{ lineHeight: "1.2" }}>Baby & Kids Fashion</h3>
        <button  className="btn btn-success btn-lg px-4 py-2 rounded-pill"
                style={{ backgroundColor: "#004D40", borderColor: "#004D40" }}>
          <FaShoppingBag /> Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="text-center">
        <img src={img2} alt="Baby & Kids Fashion" className="img-fluid mb-3 rounded" style={{ maxWidth: "100%", height: "auto" }} />
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default SaleLayout;
