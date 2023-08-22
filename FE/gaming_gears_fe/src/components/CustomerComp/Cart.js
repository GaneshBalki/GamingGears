import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import a separate CSS file for styling
import CustomerService from '../../service/CustomerService';
import { useUser } from '../UserContext';

function Cart(props) {
  const [searcharr, setSearcharr] = useState([]);
  const { custid } = useUser();
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    CustomerService.getCart(custid)
      .then((response) => {
        setSearcharr([...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </a>
                    </h5>
                    <hr />
                    {
                      searcharr.map((product) => {
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={product.url1}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: '65px' }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{product.proname}</h5>
                                  <p className="small mb-0">{product.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '50px' }}>
                                  <h5 className="fw-normal mb-0">2</h5>
                                </div>
                                <div style={{ width: '80px' }}>
                                  <h5 className="mb-0">{product.price}</h5>
                                </div>
                                <a href="#!" style={{ color: '#cecece' }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
