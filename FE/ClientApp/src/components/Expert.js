import React, { Component } from 'react';
import ExpertService from '../service/ExpertService';
import { Link } from 'react-router-dom';
import expert from '../images/expert.png'
import Footer from './Footer';
export class Expert extends Component {
  static displayName = Expert.name;
  constructor(props) {
    super(props);
    this.state = {
      expertarr: [],
      searcharr: [],
      searchtext: ""
    }

  }
  //initialize array 
  componentDidMount() {
    this.fetchdata()
  }

  fetchdata() {
    ExpertService.getExperts()
      .then((response) => {
        this.setState({ ...this.state, expertarr: [...response.data], searcharr: [...response.data] })
      }).catch()
  }
  getExpertById(expid) {
    ExpertService.getExpertById(expid)
      .then((response) => {
        this.fetchdata()
      })
      .catch()
  }

  render() {
    return (
      <div className="container pt-5">
        <div class="container">
          <button type="button" class="btn btn-primary">Become An Expert</button>
        </div>
        <pre></pre>
        <pre></pre><pre></pre>
        <pre></pre>

        <div className="row">
          {/* ProductCards */}
          {this.state.searcharr.map((Expert) => (
            <div key={Expert.expid} className="col-lg-3 col-md- col-sm-12 mb-4 d-flex">
              <div className="card flex-fill border-0" style={{ background: '#f8f9fa' }}>
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                <Link to={`/experts/${Expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                  <img src={expert} className="w-100" alt={Expert.experience} style={{ height: 150, objectFit: 'contain' }} />
                  <a href="#!" onClick={() => this.getExpertById(Expert.expid)}>
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">

                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                  </Link>
                </div>
                <Link to={`/experts/${Expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                <div className="card-body">
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3">Name : {Expert.expname}</h5>
                  </a>
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <p> Sells : {Expert.sells}</p>
                  </a>
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <p>Experience : {Expert.experience}</p>
                  </a>

                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
       
      </div>



    )
  }

}
