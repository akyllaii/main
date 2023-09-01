import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
            <UserHeader/>
            <div className='cart'>
                <div className="container">
                    <span onClick={() => navigate('/user')}> <BsFillArrowLeftCircleFill/> </span>
                    <h1 className="cart__title">Корзина</h1>
                    <div className="cart__row">
                        <p className="cart__text">Все курсы</p>
                        <p className="cart__price"><span>70 000 ₽</span> 35 000 ₽ <MdCancel/></p>
                    </div>
                    <div className="cart__row">
                        <p className="cart__text">Jdbc</p>
                        <p className="cart__price">5 000 ₽ <MdCancel/></p>
                    </div>
                    <div className="cart__row">
                        <p className="cart__text">Введение в тестирование</p>
                        <p className="cart__price">5 000 ₽ <MdCancel/></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;