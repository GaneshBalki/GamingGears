import React, { useState, useEffect } from 'react';
import { useDistributor } from './DistributorContext';
import DistributorService from '../../service/DistributorService';

const DistributorHome = () => {
    const [products, setProducts] = useState([]);
    const [distributorInfo, setDistributorInfo] = useState(null);
    const [totalsales,setTotalsales]=useState(0);

    const { disid } = useDistributor();

    React.useEffect(() => {
        DistributorService.getDistributorById(disid)
            .then((response) => {
                setDistributorInfo(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        //    findTotalSale
        DistributorService.findTotalSales(disid).
        then((response)=>{
            setTotalsales(response.data);
        })
        .catch((error)=>{
            console.error(error);
        })

    }, [disid]);

    useEffect(() => {

        DistributorService.getDistributorProducts(disid)
            .then((response) => {
                setProducts([...response.data]);

            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);





    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="distributor-profile" style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {distributorInfo ? (
                            <h3 style={{ color: 'rgba(51, 51, 51, 0.8)' }}>Namaste, {distributorInfo.disname}</h3>
                        ) : (
                            <p>Loading distributor info...</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: '2rem' }}>


                <div className="col-md-6">
                    <h2>Your Products</h2>
                    <ul className="list-group">
                        {products.map((product) => (
                            <li
                                key={product.proid}
                                className="list-group-item"
                                style={{
                                    marginBottom: '20px',
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '5px',
                                    height: 'fit-content'
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                        {product.proname}
                                    </h3>

                                </div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            color: '#0074cf',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        Price: ₹ {product.price}
                                    </p>

                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="col-md-1">

                </div>
                
                <div className="col-md-4" style={{ textAlign: 'left' }}>
                    <div>
                       <h5>Totals Sales</h5>
                       {totalsales}
                    </div>
                    <div>
                    <h2>Add a New Product</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"


                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"

                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"

                        />
                    </div>

                    <div className="form-group">
                        <label>Product Image 1</label>
                        <input
                            type="file"
                            name="image1"
                            className="form-control"
                            accept="image/*"

                        />
                    </div>
                    <div className="form-group">
                        <label>Product Image 2</label>
                        <input
                            type="file"
                            name="image2"
                            className="form-control"
                            accept="image/*"

                        />
                    </div>
                    <div className="form-group">
                        <label>Product Image 3</label>
                        <input
                            type="file"
                            name="image3"
                            className="form-control"
                            accept="image/*"

                        />
                    </div>

                    <button className="btn btn-primary" style={{marginTop:'0.9rem'}}>
                        Add Product
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DistributorHome;
