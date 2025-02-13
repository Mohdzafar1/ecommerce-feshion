import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Footer=()=> {
  return (
    <footer className="bg-white py-5">
      {/* Newsletter Section */}
      <div className="container text-center mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-4">
              <MdEmail size={50} className="text-primary" />
            </div>
            <h3 className="mb-3">Subscribe Newsletter</h3>
            <p className="text-muted mb-4">
              Subscribe to our email and get updates right in your inbox
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2 bg-light border-0"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-warning rounded-circle p-3">
                <IoMdSend size={20} />
              </button>
            </div>
            {/* Social Media Icons */}
            <div className="mt-4">
              <a href="#" className="btn btn-light rounded-circle mx-2">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-light rounded-circle mx-2">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-light rounded-circle mx-2">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container mt-5">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-lg-3 col-md-6">
            <h4>
              <span className="text-dark">Fashion</span>
              <span className="text-warning">Era</span>
            </h4>
            <p className="text-muted mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some,
            </p>
          </div>

          {/* Help Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Refund Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Track Your Order</a>
              </li>
            </ul>
          </div>

          {/* Store Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Store</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Men Fashion</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Women Fashion</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Kids Fashion</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Other</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Feedback</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Contact us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Download app</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">Terms & condition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
