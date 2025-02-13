import React from "react";
import img1 from "../../assist/images/image 18.png"
import img2 from "../../assist/images/image 19.png"
import img3 from "../../assist/images/image 20.png"
import img4 from "../../assist/images/image 21.png"
import img5 from "../../assist/images/image 7.png"



const BrandDeal = () => {
  return (
    <div className="container py-4">
      <div className=" text-white text-center p-4 rounded" style={{backgroundColor:"#004743"}}>
        <h2 className="fw-bold">Top Brands Deal</h2>
        <p className="mb-4">
          Up To <span className="fw-bold text-warning">60%</span> off on brands
        </p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <div className="bg-white p-3 rounded shadow">
            {/* <FaNike size={50} className="text-dark" /> */}
            <img src={img1} alt="img"/>
          </div>
          <div className="bg-white p-3 rounded shadow">
          <img src={img2} alt="img"/>

          </div>
          <div className="bg-white p-3 rounded shadow">
          <img src={img3} alt="img"/>

          </div>
          <div className="bg-white p-3 rounded shadow">
          <img src={img4} alt="img"/>

          </div>
          <div className="bg-white p-3 rounded shadow">
          <img src={img5} alt="img"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDeal;
