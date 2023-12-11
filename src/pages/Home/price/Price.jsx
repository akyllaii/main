import React from 'react';
import {useNavigate} from 'react-router-dom'

const Price = () => {
    const navigate = useNavigate()
    return (
        <section className='price'>
            <div className="container">
                <h1 className="price__title">Ценовая политика</h1>
                <div className="price__row">
                    <p className="price__text">Стоимость модуля составляет  от <span>2499 ₽</span> до <span> 4999 ₽</span></p>
                    <p className="price__text">Спец цена при одновременной поĸупĸе всех модулей: <br/>
                        <span className='price__text-red'>70 000 ₽</span> <span>35 000 ₽</span>
                    </p>
                </div>
                <h2 className="price__subtitle">Согласись, <br/>
                    35 000 за новую профессию — это выгодная сделĸа!</h2>
                <button onClick={() => navigate('/register')} className="price__btn">Начать учиться</button>
            </div>
        </section>
    );
};

export default Price;