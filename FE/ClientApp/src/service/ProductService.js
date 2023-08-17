import axios from "axios";

const baseurl="http://localhost:8282/products";
class ProductService{
    getproducts(){
        return axios.get(baseurl);
    }
}
export default new ProductService();