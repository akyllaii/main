import React, {useState} from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import ClothesAddBtn from "../../components/DownloadBtn/DownloadBtn";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import userMain from '../../assets/userMain.png'

const Profile = () => {
    const [images,setImages] = useState(null)
    const navigate = useNavigate()

    const {user} = useSelector(store => store.product)


    const handleChangeUser = (data) => {
        if (images) {
            data = {...data, image:images}
        }
        axios.patch('/user/:id', data)
    }

    const {register, handleSubmit} = useForm({mode:'onBlur', values: user})


    return (
        <>
            <UserHeader/>
            <form className='profile' onSubmit={handleSubmit(handleChangeUser)}>
                <div className="container">

                    <span onClick={() => navigate('/user')}> <BsFillArrowLeftCircleFill/> </span>
                    <h1 className="profile__title">Профиль</h1>
                    <div className="profile__img">
                        {
                            images ? <img src={images} alt="" className='profile__ava'/> : <img src={userMain} alt="" className='profile__ava '/>
                        }
                    </div>
                    <ClothesAddBtn images={images} setImages={setImages}/>
                    <div className="profile__row">
                        <input readOnly  {...register('email')} type="email"
                               placeholder='Ваш email'
                               className="profile__inp"/>
                        <input  {...register('name')} type="text"
                               placeholder='Имя'
                               className="profile__inp"/>
                        <input  {...register('nickname')} type="text"
                               placeholder='Ник в телеграм'
                               className="profile__inp"/>
                    </div>
                    <p onClick={() => navigate('/reset')} className="profile__text">Изменить пароль</p>
                    <button className="profile__btn">Сохранить</button>
                </div>
            </form>
            <FooterUser/>
        </>
    );
};

export default Profile;