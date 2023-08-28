import axios from "axios";

class DistributorService{

    getDistributorById(disid){
        return axios.get(`http://localhost:8282/distributor-home/${disid}`)
    }
    getDistributorProducts(disid){
        return axios.get(`http://localhost:8282/distributor/products/${disid}`)
    }
    findTotalSales(disid){
        return axios.get(`http://localhost:8282/distributor/sales/${disid}`)
    }
    getAllDistributors(){
        return axios.get(`http://localhost:8282/distributors`)
    }

}
export default new DistributorService();