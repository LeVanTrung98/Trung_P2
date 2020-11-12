import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { SaveProductRecenty } from "../common/logics/UsersLogic";
import { FetchUrl } from "../actions/Common";


export default function DetailProduct() {
    let params= useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        SaveProductRecenty(parseInt(params.id));

        let idPros = localStorage.getItem('recently');
        if(idPros){
            let urlRecentlyProduct = JSON.parse(idPros)?.reduce((result, item) =>  result += `&id=${item}`, "").replace('&', '?');
            dispatch(FetchUrl( 'products/' + urlRecentlyProduct, "FETCH_PRODUCT_RECENTLY"));
        }
    }, []);

    return (
        <div>
            detailsdfsa
        </div>
    )
}
