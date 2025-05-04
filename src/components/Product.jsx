import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({post , onSelect }) => {

    // const [selected, setSelected] = useState(false);
  // as we created a redux store we are managing state from that store
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // we call that funcation from cartSlice.js to add the product inside cart
  const addToCart = () => {
    dispatch(add(post)); 
    toast.success("Item added to Cart"); // popup will open
  };

  // we call that funcation from cartSlice.js to remove the product inside cart
  const removeFromCart = () => {
    dispatch(remove(post.id)); // we provide each functaion id so it will, easy to remove product from cart
    toast.error("Item Removed from Cart"); // popup will open
  };

    return (
<>
    <div className=" py-3 rounded-3 mb-4 mt-2 z-index-01 border px-2"
      onClick={() => onSelect(post)}>
        <div className="position-relative">
            <img src={post.category.image} className='product' loading='lazy' alt=""  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  />
            <h6 className='product-type px-3 py-1 '>{post.category.slug}</h6>
            {cart.some((p) => p.id === post.id) ? (
                <i class="bi bi-dash-square fs-4 product-add" onClick={removeFromCart}></i>
            ) : (
            <i class="bi bi-plus-square fs-4 product-add" onClick={addToCart}></i>
            )}
        </div>
        <div className="d-flex align-items-center justify-content-around pt-2">
            <p>{post.title}</p>
            <p><b>{post.price}$</b></p>
        </div>
    </div>

</>
);
};

export default Product;