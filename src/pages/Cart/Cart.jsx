import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';


const Cart = () => {
    const navigate = useNavigate()

    const {items} = useSelector(store => store.projectSlice)
    return (
        <>
            <UserHeader/>
            <div className='cart'>
                <div className="container">
                    <span onClick={() => navigate('/user')}> <BsFillArrowLeftCircleFill/> </span>
                    <h1 className="cart__title">Корзина</h1>
                    {/*<div className="cart__row">*/}
                    {/*    <p className="cart__text">Все курсы</p>*/}
                    {/*    <p className="cart__price"><span>70 000 ₽</span> 35 000 ₽ <MdCancel/></p>*/}
                    {/*</div>*/}
                    {items.map((item) => (
                        <div key={item._id} className="cart__row">
                            <p className="cart__text">{item.module}</p>
                            <p className="cart__price">5000 ₽ <MdCancel/></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;