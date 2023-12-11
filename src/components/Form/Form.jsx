import React, {useRef,useState} from 'react';
import logo from '../../assets/blacklogo.svg'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {authUser} from '../../features/product/product'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {toast} from "react-toastify";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'


const Form = () => {

    const [passwordView, setPasswordView] = useState(false)
    const location = useLocation();
    const loginPage = location.pathname === '/login';

    const {register,handleSubmit,formState:{errors},watch} = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const onSubmit = (data) => {

        let {passwordAgain, ...other} = data
        console.log(other)
        const url = loginPage ? '/login' : '/register';
        axios.post(url,other)
            .then((res) => {
                dispatch(authUser(res.data))
                navigate('/user')
            })
            .catch((err) => {
                console.log(err)
                    toast(err.response.data[0].msg);
            })
    }
    const password = useRef({});
    password.current = watch("password", "");
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
                        loginPage ? '' : <input type="text" {...register('name')} placeholder='Ваше имя'
                                                className="form__inp"/>
                    }
                    <div className="form__block">
                        <input {...register('password')} placeholder='Пароль'
                               type={passwordView ? "text" : "password"}
                               className="form__input"/>
                        <span
                            onClick={() => setPasswordView(prev => !prev)}
                            className="form__icon">
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                    </div>

                    {
                        loginPage ? '' : <div className='form__block'><input {...register('passwordAgain', {
                            required: "Пароль обязательно к заполнению",
                            validate: value =>
                                value === password.current || "Пароль не совпадает"
                        })} placeholder='Подтверждение пароля'
                                                  type={passwordView ? "text" : "password"}
                                                    className="form__input"/>
                            <span
                                onClick={() => setPasswordView(prev => !prev)}
                                className="form__icon">
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                            <span className='form__error'>{errors?.passwordAgain?.message}</span>
                                                    </div>

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