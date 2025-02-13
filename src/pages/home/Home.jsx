import React from "react";
import "./home.css";
import img from "../../assist/images/homeImg.png";
import Support from "../Support";
import SaleLayout from "../sale/Sale";
import MenuList from "../product/MenuList";
import BrandDeal from "../brand/BrandDeal";
import TradingCollection from "../trading/TradingCollection";
import ClientReviews from "../reviews/ClientReviews";

const Home = () => {
  return (
     <>
       <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          {/* Left Content */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="pe-lg-5">
              <h6 className="text-uppercase text-muted mb-3 tracking-wider">TRENDING COLLECTION</h6>
              <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: "1.2" }}>
                Explore Summer Collection
              </h1>
              <button
                className="btn btn-success btn-lg px-4 py-2 rounded-pill"
                style={{ backgroundColor: "#004D40", borderColor: "#004D40" }}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-7 position-relative">
            <div
              className="position-relative"
              style={{
                backgroundImage: `url(${img})`,  // ✅ Correct way to use imported image
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
                minHeight: "500px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
    <Support/>
    <SaleLayout/>
    <MenuList/>
    <BrandDeal/>
    <TradingCollection/>
    <ClientReviews/>
     </>
  );
};

export default Home;
