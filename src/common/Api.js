import axios from "axios";

let baseURL ='http://localhost:3000/';

var FetchData = (url, method = "GET") => {
    return async (method, data) => {
        try {
            return await axios({
                method : method,
                url : baseURL + url,
                data,
                responseType : "json"
            }).then( response => response );
        } catch (error) {
            console.log(error);
        }
    }
}
export default FetchData ;