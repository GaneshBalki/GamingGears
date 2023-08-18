import React, { Component } from 'react';
import ProductService from '../service/ProductService';
import { useParams } from 'react-router-dom'; // Import useParams hook
import HomeProducts from './HomeProducts';

const ProductDetails = (props) => {
    const { pid } = useParams(); // Access the 'pid' property
    console.log('pid:', pid);
    console.log('props:', props);
    console.log('useParams:', useParams());
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        ProductService.getProductById(pid)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [pid]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5"  style={{ background: '#f8f9fa' }}>
          <div className="row" >
                <div className="col-md-6">
                <pre></pre>
                        <pre></pre>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={product.url1} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={product.url2} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={product.url3} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            {/* Add more carousel items here */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-details">
                        <pre></pre>
                        <pre></pre>

                        <h2>{product.proname}</h2>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <p>{product.description}</p>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <h4>&#8377; {product.price}</h4>
                        <pre></pre>

                        <button className="btn btn-primary">Add to Cart</button>
                        <span style={{ margin: '0 10px' }}></span> 
                        <button className="btn btn-primary">Buy Now</button>
                       
                    </div>
                   
                </div>
            </div>
            <pre></pre>
                        <pre></pre>

                         <pre></pre>
                        <pre></pre>
         
        </div>
    );
}

export default ProductDetails;
