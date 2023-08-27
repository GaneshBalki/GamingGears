

function SalesReport(){
    
    return(
        <div className="container mt-5">
        <h1 className="mb-4">Sales Statistics</h1>
        <div className="row">
          {/* {salesData.map(item => ( */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Product ID: </h5>
                  <p className="card-text">Product Name: </p>
                  <p className="card-text">Quantity Sold: </p>
                  <p className="card-text">Sales:  USD</p>
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    )
}
export default SalesReport;