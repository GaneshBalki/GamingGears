import React from 'react';
import cabinet from '../images/Cat/cabinet.png'
import cooler from '../images/Cat/cooler.jpg'
import monitor from '../images/Cat/monitor.jpg'
import controller from '../images/Cat/controller.jpg'
import gconsole from '../images/Cat/console.jpg'
import keyboard from '../images/Cat/keyboard.jpg'
import processor from '../images/Cat/pro.jpg'

function HomeCategory() {
  return (
    <div className="container my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={cabinet} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Cabinet</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src="https://rb.gy/m72iv" className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Gaming Mouse</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={keyboard} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Keyboard</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={cooler} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Coolers</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={monitor} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Monitor</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={controller} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Gaming Controller</div>
                </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={gconsole} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Console</div>
                </a>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            {/* ... rest of your card content */}
            <a href="#" className="text-center d-flex flex-column justify-content-center" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-secondary mx-auto p-3 mb-2" style={{ border: 'none' }} data-mdb-ripple-color="dark">
                    <img src={processor} className="rounded mx-auto d-block" alt="..." height={100} width={100} />
                  </button>
                  <div className="text-dark">Processor</div>
                </a>
          </div>
        </div>
        
        {/* Add more col elements for other cards */}
        {/* <div className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex">
          <div className="card flex-fill border-0" style={{ background: '#f8f9fa', width: '100%' }}>
            ... another card content ...
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeCategory;
