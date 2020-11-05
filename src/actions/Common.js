import { ReactReduxContext } from "react-redux"

import FetchData from '../common/Api';
import {Alert} from "../common/Alert";
import * as types from "../common/constants/ActionsTypes";

export const FetchUrl = (url) => {
    return (dispatch) => {
        try {
            FetchData(url)().then(res => {
                dispatch({
                    type : types.FETCH_CATEGORIES_ID,
                    payload : res.data
                });
            })
        } catch (error) {
            console.log(error);
            Alert('error');   
        }
    }
}

export const UpdateStateExc = (value) => {
    return {
        type : types.STATUS_EXC,
        payload : value
    }
}

export const FetchBrands = () => {
    return (dispatch) => {
        try {
            FetchData("brands")().then( res => 
                dispatch({
                    type : types.GET_LIST_BRANDS,
                    payload : res.data
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}

export const FetchStatusProducts = () => {
    return (dispatch) => {
        try {
            FetchData("statuses")().then( res => 
                dispatch({
                    type : types.GET_LIST_STATUS,
                    payload : res.data
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}

export const FetchTypes = () => {
    return (dispatch) => {
        try {
            FetchData("types")().then( res => 
                dispatch({
                    type : types.GET_LIST_TYPES,
                    payload : res.data
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}

export const RemoveItem = (url) => {
    return (dispatch) => {
        try {
            FetchData(url)("DELETE").then( res => {
                Alert('success');
            });
        } catch (error) {
            Alert('error');
        }
    }
}