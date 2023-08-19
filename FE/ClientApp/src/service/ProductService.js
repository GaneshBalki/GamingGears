import axios from "axios";

const baseurl="http://localhost:8282/products";
class ProductService{
    getproducts(){
        return axios.get(baseurl);
    }
    getProductById(pid){
        return axios.get(`http://localhost:8282/products/${pid}`)
    }
    getProductByCatId(catid){
        return axios.get(`http://localhost:8282/category-products/${catid}`)
    }
}
export default new ProductService();