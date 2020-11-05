import React, {useEffect} from 'react'
import ChartSales from './ChartSales';
import ManageUsers from './ManageUsers';
import ManageCategories from "./ManageCategories";
import ManageProducts from "./ManageProducts";
import PrivateRouter from "../common/PrivateRouter";
import { Switch, Route, Link, useLocation} from "react-router-dom";
import {useDispatch } from 'react-redux';
import {FetchCategories} from "../actions/ActionCategory";
import {FetchStatusProducts, FetchTypes, FetchBrands} from "../actions/Common";
export default function Dashboard() {
    let { pathname } = useLocation();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchCategories());
        dispatch(FetchStatusProducts());
        dispatch(FetchTypes());
        dispatch(FetchBrands());
    }, [])
    return (
        <div className="dashboard">
            <div className="container">
                <header className="header row">
                    <div className="logo col-lg-4">
                        <a href="">
                            <img src="https://cdn.shopify.com/s/files/1/0270/5873/3109/files/logo_99ef5157-7b1c-44dc-8394-6342310e8249.png?v=1576050075" className="logo__img"  alt="logo dashboard"/>
                        </a>
                    </div>
                    <ul className="menu .col-lg-8">
                        <li className="menu__item">
                            <a href="" className="menu__link">
                                Home
                                <i className="fas fa-home"></i>
                            </a>
                        </li>
                        <Link to="/dashboard/users" className="menu__item">
                            <span className="menu__link">
                                Users 
                                <i className="fas fa-users"></i>
                            </span>
                        </Link>
                        <li className="menu__item">
                            <a href="" className="menu__link">
                                Orders 
                                <i className="fas fa-indent"></i>
                            </a>
                        </li>
                        <Link to="/dashboard/categories" className="menu__item">
                            <span className="menu__link">
                                Categories 
                                <i className="fas fa-sitemap"></i>
                            </span>
                        </Link>
                        <Link to="/dashboard/products" className="menu__item">
                            <span className="menu__link">
                                Products 
                                <i className="fas fa-boxes"></i>
                            </span>
                        </Link>
                        <li className="menu__item">
                            <a href="" className="menu__link">
                                <i className="fas fa-search"></i>
                            </a>
                        </li>
                    </ul>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/dashboard" component={ ChartSales } />
                        <Route path="/dashboard/users" component={ ManageUsers } />
                        <Route path="/dashboard/categories" component={ ManageCategories } />
                        <PrivateRouter path="/dashboard/products" >
                            <ManageProducts />
                        </PrivateRouter>
                    </Switch>
                </main>
            </div>
        </div>
    )
}
