import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {GetCateParent, GetCateByIdParent} from "../selectors/UserSelectors";
import {Link} from "react-router-dom";
import  CartHover from "./CartHover";
import _,{debounce} from 'lodash';
export default function HeaderBottom() {
    const [idHover, setIdHover] = useState();
    const [cateId, setCateId] = useState();
    let rootCate = useSelector(state => GetCateParent(state)) || [];
    const numCarts = useSelector(state => state.users.numberOfCart);

    let cateById =  useSelector(state => GetCateByIdParent(idHover)(state));
    useEffect(() => {
        cateById.length > 0 && setCateId(cateById);
    }, [idHover])

    const handleMouseOver = event => {
        event.preventDefault();
        let id = event.currentTarget.getAttribute("data-id");
        setIdHover(id);
    }

    useEffect(() => {
        
        function toggleBgkMenu(){
            let heigth = window.pageYOffset;
            if(heigth < 90){
                document.getElementById("logo").classList.add("d-none")
                document.getElementById("cart").classList.add("d-none")
            }else{
                document.getElementById("logo").classList.remove("d-none")
                document.getElementById("cart").classList.remove("d-none")
            }
            console.log(heigth);
        }
        
        window.addEventListener('scroll', _.debounce(toggleBgkMenu, 300));
        document.getElementById("logo").classList.add("d-none");
        document.getElementById("cart").classList.add("d-none");
        // return () => {
        //     window.addEventListener('scroll', toggleBgkMenu);
        // }
    }, []);
    
    return (
        <div className="row header-bottom align-items-center">
            <div className= "col-2 text-center" id="logo">
                <a href="">
                    <img src="https://cdn.shopify.com/s/files/1/0270/5873/3109/files/logo_99ef5157-7b1c-44dc-8394-6342310e8249.png?v=1576050075" className="header-bottom__img" alt=""/>
                </a>
            </div>
            <div className="col-8 h-100 m-auto">
                <ul className="header-bottom__list-cate list-cate text-center">
                    <li className="list-cate__item d-inline-block">
                        <a href="" className="list-cate__link">
                            NEW IN
                        </a>
                        <ul className="sub-menu">
                            <li className="list-cate__item ">
                                <a href="" className="list-cate__link-sub-menu">
                                    NEW IN
                                </a>
                            </li>
                            <li className="list-cate__item ">
                                <a href="" className="list-cate__link-sub-menu">
                                    NEW IN
                                </a>
                                    <ul className="sub-menu sub-menu-child">
                                        <li className="list-cate__item ">
                                            <a href="" className="list-cate__link-sub-menu">
                                                NEW IN
                                            </a>
                                        </li>
                                        <li className="list-cate__item ">
                                            <a href="" className="list-cate__link-sub-menu">
                                                NEW IN
                                            </a>
                                        </li>
                                        <li className="list-cate__item ">
                                            <a href="" className="list-cate__link-sub-menu">
                                                NEW IN
                                            </a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                   
                    {
                        rootCate && rootCate.map(item => (
                            <li className="list-cate__item d-inline-block" onMouseEnter={handleMouseOver} key={item.id} data-id={item.id}>
                                <Link to={ '/colections/' +  item.name.split(" ").join("-")} className="list-cate__link">
                                   { item.name }
                                </Link>
                                <ul className="sub-menu">
                                {
                                    cateId && cateId.map(item => (
                                        <li className="list-cate__item " key={item.id}>
                                            <Link to={ '/colections/' +  item.name.split(" ").join("-") } className="list-cate__link-sub-menu">
                                                { item.name }
                                            </Link>
                                        </li>
                                    ))
                                }
                                </ul>

                            </li>
                        ))
                    }
                    <li className="list-cate__item d-inline-block">
                        <a href="" className="list-cate__link">
                            NEW IN
                        </a>
                        <span className="icon-lable icon-hot">Hot</span>
                    </li>
                    <li className="list-cate__item d-inline-block">
                        <a href="" className="list-cate__link">
                            NEW IN
                        </a>
                        <span className="icon-lable icon-new">New</span>
                    </li>
                    <li className="list-cate__item d-inline-block">
                        <a href="" className="list-cate__link">
                            NEW IN
                        </a>
                        <span className="icon-lable icon-sale">Sale</span>
                    </li>
                </ul>
            </div>
            <div className= "col-2 h-100" id="cart">
                <ul className="header-bottom__list-icon list-icon text-right">
                    <li className="list-icon__item d-inline-block px-3">
                        <a href="">
                            <i className="fas fa-search"></i>
                        </a>
                    </li>
                    <li className="list-icon__item  list-icon__cart d-inline-block px-3">
                        <a href="">
                            <i className="fas fa-cart-plus"></i>
                            <span className="total-cart">{ numCarts }</span>
                        </a>
                        <CartHover />
                    </li>
                </ul>
            </div>
        </div>
    )
}
