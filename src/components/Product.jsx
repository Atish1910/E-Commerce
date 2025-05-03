import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({post , onSelect }) => {

    // const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

    return (
<>
    <div className=" py-3 rounded-3 mb-4 mt-2 z-index-01 border px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" 
      onClick={() => onSelect(post)}>
        <div className="position-relative">
            <img src={post.category.image} className='product' loading='lazy' alt="" />
            <h6 className='product-type px-3 py-1'>{post.category.slug}</h6>
        </div>
        <div className="d-flex align-items-center justify-content-around pt-2">
            <p>{post.title}</p>
            <p><b>{post.price}$</b></p>
        </div>
    </div>
        {cart.some((p) => p.id === post.id) ? (
            <i class="bi bi-dash-square" onClick={removeFromCart}></i>
        ) : (
        <i class="bi bi-plus-square " onClick={addToCart}></i>
        )}

</>
);
};

export default Product;