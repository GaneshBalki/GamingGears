import axios from "axios";

class DistributorService{

    getDistributorById(disid){
        return axios.get(`http://localhost:8282/distributor-home/${disid}`)
    }
    getDistributorProducts(disid){
        return axios.get(`http://localhost:8282/distributor-products/${disid}`)
    }

}
export default new DistributorService();