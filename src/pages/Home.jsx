import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Product from '../components/Product';

const API_URL = "https://api.escuelajs.co/api/v1/products";

const Home = ({ category }) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');



    async function fetchProductsData() {
        setLoading(true);

        try{
            const res = await axios.get(API_URL);
            setPosts(res.data);
            // console.log("Fetching api" + posts);
            console.log(res.data);
        }catch(error){
            console.log("Unable To Fetch Products ", error);
            setPosts([]);
            
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductsData();
    }, [])

    const filteredPosts = posts
    .filter((post) => {
      return category ? post.category.slug === category : true;
    })
    
    // Next, apply the search filter
    // This filters the already category-matched posts by checking if
    // the product's title includes the user's search term (case-insensitive).
    .filter((post) => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
   

    return (
        <>
            <div className="row border py-4 justify-content-center">
                <div className="col-lg-8 mb-4">
                    <form >
                        <input type="text" placeholder='Search Product By Name' className='form-control'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    </form>
                </div>
                {loading ? (
                        <Spinner></Spinner>
                    ) : filteredPosts.length > 0 ? (
                        <div className="col-lg-12 border">
                            <div className="row">
                                {
                                    filteredPosts.map((post) => {
                                        return(
                                        //     <div className="col-lg-4">
                                        //         <div className=" py-3 rounded-3 mb-4 mt-2">
                                        //             <div className="position-relative">
                                        //                 <img src={post.category.image} className='product' loading='lazy' alt="" />
                                        //                 <h6 className='product-type px-3 py-1'>{post.category.slug}</h6>
                                        //             </div>
                                        //             <div className="d-flex align-items-center justify-content-around pt-2">
                                        //                 <p>{post.title}</p>
                                        //                 <p><b>{post.price}$</b></p>
                                        //             </div>
                                        //         </div>
                                        //     </div>
                                            <div className="col-6 col-lg-3 mb-4" key={post.id}>
                                                <Product post={post} onSelect={(product) => setSelectedProduct(product)} ></Product>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <p>No Data Found</p>
                        </div>
                    )
                }
            </div>  

            {/* Single Bootstrap Modal outside the map */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {selectedProduct && (
                    <>
                        <div className="modal-header text-center">
                        <h4 className="modal-title fs-5" id="exampleModalLabel">
                                    <p><b>Details </b></p>
                        </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <img src={selectedProduct.category.image} className='w-100' loading='lazy' alt="" />
                            <div className="pt-3">
                                <span className=' bg-red h3'>Price : <b> {selectedProduct.price}$</b></span>
                                <h6 className='pt-4'><b>{selectedProduct.title}</b></h6>
                                <h6 className='' align="justify">{selectedProduct.description}</h6>
                            </div>
                            
                        </div>
                    </>
                    )}
                </div>
                </div>
            </div>
            
        </>
    );
};

export default Home;