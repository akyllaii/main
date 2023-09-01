import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <img src={logo} alt=""/>
                    <nav className="header__nav">
                        <Link className='header__link' to={'/register'}>Регистрация</Link>
                        <Link className='header__link' to={'/login'}>Вход</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;