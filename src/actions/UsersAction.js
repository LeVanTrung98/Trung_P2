import * as types from "../common/constants/ActionsTypes";
import FetchData from "../common/Api";

export const FetchProductSearch = (url) => {
    return (dispatch) => {
        FetchData(url)().then(responses => {
            let data  = responses?.data;
            let total  = responses?.headers['x-total-count'];
            dispatch({
                type: types.FETCH_PRODUCT_SEARCH,
                payload : data,
                total 
            })
        })
    }
}

export const UpdateUrl = (value) => {
    return {
        type : types.UPDATE_URL,
        payload : value
    }
}