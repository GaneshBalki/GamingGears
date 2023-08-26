import { useEffect, useState } from "react";
import { useDistributor } from "./DistributorContext";
import DistributorService from "../../service/DistributorService";

function Product() {
    const { disid } = useDistributor();
    const [products, setProducts] = useState([]);
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
        <div className="col-md">
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
    )
}
export default Product;