import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import { RemoveProInCart , CalcNumberCart} from "../common/logics/UsersLogic";
import { useDispatch } from "react-redux";
import { FetchUrl, UpdateDataWithType } from "../actions/Common";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import "../translations/i18n";

export default function CartHover() {
    let {t} = useTranslation(['users']);
    const dispatch = useDispatch();
    const [total, setToTal] = useState(0)
    const valueCart = useSelector(state => state.users.cartHover);
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

    useEffect(() => {
        if( (valueCart.length > 0) && cart ){
            let result = valueCart.reduce((sum, item) => {
                let valCart = cart.filter(cart => cart.id == item.id);
                sum += parseInt(valCart[0]?.quantity) * item.price;
                return sum;
            }, 0);
            setToTal(result.toFixed(2));
        }
    }, [cart, valueCart]);

    const CartHover = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
        if(cart) {
            let search = cart.reduce((result, item) =>  result += `&id=${item.id}`, "");
            search ? dispatch(FetchUrl( 'products?_expand=categorie' + search, "FETCH_PRODUCT_HOVER_CART")) 
                    : dispatch(UpdateDataWithType([], 'FETCH_PRODUCT_HOVER_CART'));
        }
    }

    const handleRemoveProInCart = (event) => {
        event.preventDefault();
        let id = event.currentTarget.getAttribute("data-id");
        RemoveProInCart(id);
        CartHover();
        let numberOfCart = CalcNumberCart();
        dispatch(UpdateDataWithType(numberOfCart,'GET_NUMBER_OF_CART'));
    }

    // useEffect(() => {
    //     CartHover();
    // },[])

    return (
        <div className="sub-cart position-absolute">
            <div className="wapper">
                {
                    valueCart && valueCart.map(item => (
                        <div className="row sub-cart__block flex-nowrap" key={item.id}>
                            <img src={item.img} alt={item.name} className="sub-cart__img" />
                            <div className="sub-cart__info mx-2">
                                <p className="sub-cart__name">{item.name}</p>
                                <div className="sub-cart__cate my-1">{item.categorie?.name}</div>
                                <div>
                                    <span className="sub-cart__quantity mr-1">  {cart && cart.map(cart => cart.id == item.id && cart.quantity)}</span> x
                                                <span className="sub-cart__price ml-1">${item.price}</span>
                                </div>
                            </div>
                            <a href="" onClick={handleRemoveProInCart} data-id={item.id} className="btn btn-close">
                                <i className="fa fa-times"></i>
                            </a>
                        </div>
                    ))
                }
            </div>
            {
                valueCart.length > 0 ? (
                    <div className="row m-auto sub-cart__total justify-content-between px-2 py-3">
                        <span className="sub-cart__name">{t('users:headers.total')}</span>
                        <span className="sub-cart__name">${total}</span>
                        </div>
                ) : (
                    <p className="text-center">{t('users:headers.cartEmpty')}</p>
                )
            }
            <button type="button" className="btn-add-cart btn-add-to-cart">
               {valueCart.length > 0 ? t('users:headers.viewCart') : t('users:headers.CountShopp')}
            </button>
        </div>
    )
}
