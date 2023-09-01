import React from 'react';
import logo from '../../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {logOutUser} from "../../../features/product/product";
import {useNavigate} from 'react-router-dom'

const UserHeader = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const handleLogout = () => {
            dispatch(logOutUser());
            navigate('/');
        }
    return (
        <header className='userheader'>
            <div className="container">
                <div className="userheader__row">
                    <img className='userheader__logo' src={logo} alt=""/>
                    <nav className="userheader__nav">
                        <Link className='userheader__link' to={'/cart'}>Корзина</Link>
                        <button className="userheader__btn" onClick={handleLogout}>Выйти</button>
                        <Link className='userheader__link' to={'/profile'}>
                            <img src="" alt="" className="userheader__ava"/>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;