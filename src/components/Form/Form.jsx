import React from 'react';
import logo from '../../assets/blacklogo.svg'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {authUser} from '../../features/product/product'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {toast} from "react-toastify";


const Form = () => {

    const location = useLocation();
    const loginPage = location.pathname === '/login';

    const {register,handleSubmit,formState:{errors},watch} = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const onSubmit = (data) => {
        const url = loginPage ? '/login' : '/register';
        axios.post(url,data)
            .then((res) => {
                dispatch(authUser(res.data))
                navigate('/user')
            })
            .catch((err) => toast(err.response.data.message))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="container">
                <span onClick={() => navigate('/')}> <BsFillArrowLeftCircleFill/> </span>
                <div className="form__logo">
                    <img src={logo} alt=""/>
                </div>
                <h1 className="form__title">
                    {
                        loginPage ? 'Вход' : 'Регистрация'
                    }
                    </h1>
                <div className="form__inputs">
                    <input {...register('email')} placeholder='Ваш email'
                           type="email"
                           className="form__inp"/>
                    {
                        loginPage ? '' : <input {...register('name')} placeholder='Ваше имя'
                                                type="text"
                                                className="form__inp"/>
                    }
                    <input {...register('password')} placeholder='Пароль'
                           type="password"
                           className="form__inp"/>
                    {
                        loginPage ? '' : <input placeholder='Подтверждение пароля'
                                                    type="password"
                                                    className="form__inp"/>
                    }
                </div>
                    <div className="form__row">
                        {
                            loginPage ? <p className="form__text">Ещё нет аккаунта?</p> : <p className="form__text">Уже есть пароль?</p>
                        }
                        {
                            loginPage ?
                                <Link className='form__link' to='/register'>Регистрация</Link> :
                                <Link className='form__link' to='/login'>Войти</Link>
                        }
                    </div>
                <button className="form__btn">
                    {
                        loginPage ? 'Войти' : 'Зарегистрироваться'
                    }
                    </button>
            </div>
        </form>
    );
};

export default Form;