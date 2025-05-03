
import React from 'react';

const Product = ({
    post , onSelect 
}) => {
    return (
<>
    <div className=" py-3 rounded-3 mb-4 mt-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" 
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

</>
);
};

export default Product;