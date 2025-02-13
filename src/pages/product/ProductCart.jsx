import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineShareAlt } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link  to={`${item.id}`} className="card h-100 border-0 product-card text-decoration-none">
      <div className="position-relative">
        {/* Product Image */}
        <div className="product-img-wrapper">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="product-img card-img-top"
          />
        </div>

        {/* Discount or New Badge */}
        {item.discount && (
          <span className="badge bg-warning position-absolute start-0 top-0 m-2 text-dark">
            {item.discount}% OFF
          </span>
        )}
        {item.isNew && (
          <span className="badge bg-success position-absolute start-0 top-0 m-2">
            New
          </span>
        )}

        {/* Action Buttons */}
        <div className="position-absolute end-0 top-0 p-2">
          <div className="d-flex flex-column gap-2">
            {[AiOutlineHeart, AiOutlineShoppingCart, AiOutlineShareAlt].map((Icon, index) => (
              <button key={index} className="btn btn-light p-2 rounded-circle shadow-sm">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card-body p-3">
        {/* Category */}
        <div className="text-muted small mb-1">{item.category}</div>

        {/* Product Name */}
        <h6 className="card-title mb-2">{item.title}</h6>

        {/* Rating Stars */}
        <div className="mb-2">
          {[...Array(5)].map((_, index) =>
            index < Math.floor(item.rating) ? (
              <FaStar key={index} className="text-warning" />
            ) : (
              <FaRegStar key={index} className="text-warning" />
            )
          )}
        </div>

        {/* Price */}
        <div className="d-flex align-items-center gap-2">
          <span className="text-success fw-bold fs-5">${item.price}</span>
          {item.originalPrice && (
            <span className="text-muted text-decoration-line-through small">
              ${item.originalPrice}
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
        }
        .product-card:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .product-img-wrapper {
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        .btn-light {
          transition: transform 0.2s ease;
        }
        .btn-light:hover {
          transform: scale(1.1);
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;
