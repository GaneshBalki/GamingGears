import React, { useState, useEffect } from 'react';
import { useDistributor } from './DistributorContext';
import DistributorService from '../../service/DistributorService';
import axios from 'axios';
const DistributorHome = () => {
    const [products, setProducts] = useState([]);
    const [distributorInfo, setDistributorInfo] = useState(null);
    const [sales, setSales] = useState([]);
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


    }, [disid]);

    useEffect(() => {
        // window.alert("hello")
        DistributorService.findTotalSales(disid).
            then((response) => {
                setSales([...response.data]);
                window.alert("hello2")
            })
            .catch((error) => {
                console.error(error);
            })
    }, [disid])

    useEffect(() => {

        DistributorService.getDistributorProducts(disid)
            .then((response) => {
                setProducts([...response.data]);

            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    //Add Product logic
    const [formData, setFormData] = useState({
        proname: '',
        description: '',
        price: '',
        url1: null,
        url2: null,
        url3: null,
        catid: '', // Category ID
        brandid: '', // Brand ID
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name.startsWith('url')) {
            // Handle file uploads
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Store the base64-encoded image data in formData
                    setFormData({
                        ...formData,
                        [name]: reader.result,
                    });
                };
                reader.readAsDataURL(file);
            }
        } else {
            // Handle other form inputs
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { proname, description, price, url1, url2, url3, catid, brandid } = formData;
window.alert("hello adding product")
   
       
            const productData = new FormData();
            productData.append('proname', proname);
            productData.append('description', description);
            productData.append('price', price);
            productData.append('url1', url1);
            productData.append('url2', url2);
            productData.append('url3', url3);
            productData.append('catid', catid); // Category ID
            productData.append('brandid', brandid); // Brand ID
            productData.append('disid', disid); // Distributor ID
            try {
                const response = await axios.post('http://localhost:8282/anand', productData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Product added:', response.data);
            } catch (error) {
                console.error('Error adding product:', error);
            }
            
    };

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
                        <h1>hello</h1>
                        {
                            sales.map((e) => {
                                <li>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                            {e.proname}
                                        </h3>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                            {e.qtysold}
                                        </h3>
                                    </div>
                                </li>
                            })
                        }
                    </div>



                    <div>
                        <h2>Add a New Product</h2>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="proname"
                                className="form-control"
                                value={formData.proname}
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                className="form-control"
                                value={formData.price}
                                onChange={handleInputChange}

                            />
                        </div>

                        <div className="form-group">
                            <label>Product Image 1</label>
                            <input
                                type="file"
                                name="url1"
                                className="form-control"
                                accept="image/*"
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="form-group">
                            <label>Product Image 2</label>
                            <input
                                type="file"
                                name="url2"
                                className="form-control"
                                accept="image/*"
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="form-group">
                            <label>Product Image 3</label>
                            <input
                                type="file"
                                name="url3"
                                className="form-control"
                                accept="image/*"
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="form-group">
                            <label>Category ID:</label>
                            <input
                                type="text"
                                name="catid"
                                className="form-control"
                                value={formData.catid}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Brand ID:</label>
                            <input
                                type="text"
                                name="brandid"
                                className="form-control"
                                value={formData.brandid}
                                onChange={handleInputChange}
                            />
                        </div>
                       
                        <button  type="submit" onClick={handleSubmit} className="btn btn-primary" style={{ marginTop: '0.9rem' }}>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DistributorHome;
