import axios from "axios";

const baseurl="http://localhost:8282/getcart";
class ExpertService{
    
    getCart(custid){
        return axios.get(baseurl+"/"+custid);
    }
}
export default new ExpertService();