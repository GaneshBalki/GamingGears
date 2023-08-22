import React, { Component } from 'react';
import ProductService from '../service/ProductService';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useUser } from './UserContext';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';


const ProductDetails = (props) => {
    const { pid } = useParams(); // Access the 'pid' property for url
    const [product, setProduct] = React.useState(null);
    const { addToCart } = useCart();
    const { custid } = useUser();
    const navigate = useNavigate();
    var price;
    var name;
    var id;

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
    } else {
        price = product.price;
        name = product.proname;
        id = product.proid;

    }
    console.log(price, name, id)
    const handleAddToCart = () => {
        if (custid > 0) {
            addToCart({ id, name, price });
            alert("Product '" + name + "' Added to Cart !")
        } else {
            window.alert("You Need TO Login First !!!");
            navigate('/customerlogin');
        }

    };


    return (
        <div className="container mt-5" style={{ background: '#f8f9fa' }}>
            <div className="row" >
                <div className="col-md-6">
                    <pre></pre>
                    <pre></pre>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
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

                        <button className="btn btn-primary" onClick={handleAddToCart} >Add to Cart</button>
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
