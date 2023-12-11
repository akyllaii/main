import React from 'react';
import logo from '../../assets/blacklogo.svg'
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";

const Reset = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors},watch} = useForm()

    const token = useSelector(s => s.product.token)

    const onSubmit = (data) => {
        axios.post('http://localhost:4444/reset',        data,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }).then(({data}) => console.log(data)).catch((err) => {
            console.log(err)
            toast(err.response.data[0].message);
        });
    }

    return (
        <form className='reset' onSubmit={handleSubmit(onSubmit)}>
            <div className="container reset__row">
                <img src={logo} alt="" className="reset__logo"/>
                <h1 className="reset__title">Изменить пароль</h1>
                <input placeholder='Ваш email' {...register("email")} type="email" className="reset__inp"/>
                <input placeholder='Ваш старый пароль' {...register("oldPassword")} type="password" className="reset__inp"/>
                <input placeholder='Ваш новый пароль' {...register("newPassword")} type="password" className="reset__inp"/>
                <button className="reset__btn" type="submit">Восстановить пароль</button>
                <p onClick={() => navigate('/login')} className="reset__link">Вспомнил пароль</p>
            </div>
        </form>
    );
};

export default Reset;