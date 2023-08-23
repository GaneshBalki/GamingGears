import React, { useState, useEffect } from 'react';
import { useDistributor } from './DistributorContext';
import DistributorService from '../../service/DistributorService';

const DistributorHome = () => {
    const [products, setProducts] = useState([]);
    const [distributorInfo, setDistributorInfo] = useState(null);

    const { disid } = useDistributor();
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
    });

    React.useEffect(() => {
        DistributorService.getDistributorById(disid)
            .then((response) => {
                setDistributorInfo(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        // // Make a POST request to add the new product
        // axios.post('http://your-api-url.com/distributor/products/add', newProduct)
        //   .then((response) => {
        //     // Refresh the list of products
        //     setProducts([...products, response.data]);
        //     // Clear the input fields
        //     setNewProduct({ name: '', description: '', price: 0 });
        //   })
        //   .catch((error) => {
        //     console.error('Error adding product:', error);
        //   });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="distributor-profile" style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {distributorInfo ? (
                            <h3 style={{ color: 'rgba(51, 51, 51, 0.8)'}}>Namaste, {distributorInfo.disname}</h3>
                        ) : (
                            <p>Loading distributor info...</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="row" style={{marginTop:'2rem'}}>
                <div className="col-md-6">
                    <h2>Your Products</h2>
                    <ul style={{ listStyleType: 'none', padding: '2rem' }}>
                        {products.map((product) => (
                            <li key={product.proid} style={{ borderBottom: '1px solid #ddd', marginBottom: '10px', paddingBottom: '10px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.proname}  </span>
                                {/* <p style={{ fontSize: '1rem', marginBottom: '5px' }}>{product.description}</p> */}
                                <p style={{ fontSize: '1rem', color: '#0074cf', fontWeight: 'bold' }}>Price: ₹ {product.price}</p>
                            </li>
                        ))}
                    </ul>

                </div>
                {/*  <div className="col-md-4">
                    <h2>Add a New Product</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={newProduct.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={newProduct.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={newProduct.price}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={handleAddProduct}>
                        Add Product
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default DistributorHome;
