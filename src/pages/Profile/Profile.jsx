import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <>
            <UserHeader/>
            <section className='profile'>
                <div className="container">
                    <span onClick={() => navigate('/user')}> <BsFillArrowLeftCircleFill/> </span>
                    <h1 className="profile__title">Профиль</h1>
                    <div className="profile__img">
                        <img src="" alt="" className="profile__ava"/>
                    </div>
                    <p className="profile__text">Изменить фото</p>
                    <div className="profile__row">
                        <input type="email"
                               placeholder='Ваш email'
                               className="profile__inp"/>
                        <input type="text"
                               placeholder='Имя'
                               className="profile__inp"/>
                        <input type="text"
                               placeholder='Ник в телеграм'
                               className="profile__inp"/>
                    </div>
                    <p onClick={() => navigate('/reset')} className="profile__text">Изменить пароль</p>
                    <button className="profile__btn">Сохранить</button>
                </div>
            </section>
            <FooterUser/>
        </>
    );
};

export default Profile;