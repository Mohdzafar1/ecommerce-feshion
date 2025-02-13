"use client"

import { FaSearch, FaShoppingBag, FaRegHeart, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar=()=> {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fw-bold text-dark">Fashion</span>
          <span className="fw-bold text-warning">Era</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/men">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kids">
                Kids
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/winter">
                Winter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifestyle">
                Lifestyle
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3 flex-grow-1 mx-lg-4">
            <div className="input-group">
              <input
                type="search"
                className="form-control border-end-0 bg-light"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light border border-start-0" type="submit">
                <FaSearch className="text-muted" />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/wishlist" className="text-dark position-relative">
              <FaRegHeart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                0
              </span>
            </Link>
            <Link to="/cart" className="text-dark position-relative">
              <FaShoppingBag size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                2
              </span>
            </Link>
            <Link to="/account" className="text-dark">
              <FaUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar