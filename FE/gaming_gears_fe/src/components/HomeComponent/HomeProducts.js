import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css';
import ProductService from '../../service/ProductService';

function HomeProducts() {
    const [searcharr, setSearcharr] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = () => {
        ProductService.getproducts()
            .then((response) => {
                setSearcharr([...response.data]);
            })
            .catch();
    }

    return (
        <div className="container pt-5">
            <div className="row">
                {/* ProductCards */}
                {searcharr.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md- col-sm-11 mb-4 d-flex ">
                        <div className="card flex-fill border-0 card-hover" style={{ background: '#f8f9fa' }}>
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light " data-mdb-ripple-color="light">
                                <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                    <img src={product.url1} className="w-100" alt={product.proname} style={{ height: 150, objectFit: 'contain' }} />
                                </Link>

                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            {/* <span className="badge bg-primary ms-2">New</span> */}
                                          <pre></pre>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </div>

                            </div>
                            <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                <div className="card-body">
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                                        <h5 className="card-title mb-3">{product.proname}</h5>
                                    </a>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>

                                    </a>
                                    <h6 className="mb-3">&#8377; {product.price}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeProducts;
