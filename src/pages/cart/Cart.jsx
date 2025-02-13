import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart } from "../../store/allSlice/cartSlice";
import { showInfoToast } from "../../helper/toast";

const  CartPage=()=> {
   const dispatch=useDispatch()
    const { addCart} = useSelector((state) => state.cart);


    const total=addCart.reduce((prevEle,curEle)=>{
        return prevEle + curEle.price
    },0)


   const handleDelete=(id)=>{
       console.log("654",id)
      dispatch(deleteItemCart(id))
      showInfoToast("Delete item")
   }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Your Cart</h1>
      <div className="row">
        <div className="col-md-8">
            {addCart.map((item)=>{
              return(
                <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{widht:"100%",height:"50%"}}
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt="Fjallraven - Foldsack No. 1 Backpack"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <div className="text-end"> 
                  <button className="btn btn-danger text-end" onClick={()=>handleDelete(item.id)}>
                    <FaTrash className="me-2" /> 
                </button>
                  </div>
                  <h5 className="card-title">{item.title}</h5>

                  <p className="card-text">
                   {item.description.slice(0,120)}
                  </p>
                  
                  <p className="card-text">
                    <small className="text-muted">{item.category}</small>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">
                        <FaMinus />
                      </button> */}
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary" disabled> */}
                        qty:{item.quantity}
                      {/* </button> */}
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">
                        <FaPlus />
                      </button> */}
                    </div>
                    <p className="mb-0">
                      <strong>${item.price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              )
            })}
            
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${(total || 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <strong>Total:</strong>
                <strong>${total  + 10 }</strong>
              </div>
              <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
