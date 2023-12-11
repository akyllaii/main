import React from 'react';
import bracket from '../../../assets/bracket.svg'
import Header from "../../../components/Layout/Header/Header";
import {useNavigate} from 'react-router-dom'

const Begin = () => {
    const navigate = useNavigate()
    return (
        <section className='begin'>
            <Header/>
          <div className="container">
              <img src={bracket} alt="" className="begin__bracket"/>
              <h1 className="begin__title begin__title-up">Становись</h1>
              <h1 className="begin__title begin__title-middle"> <span>Java</span>-разработчиком</h1>
              <h1 className="begin__title begin__title-down">вместе с нами</h1>
              <div className="begin__row">
                  <div className="begin__left">
                      <p className="begin__plus">++++++++++</p>
                      <p className="begin__plus">++++++++++</p>
                      <p className="begin__plus">++++++++++</p>
                      <p className="begin__plus">++++++++++</p>
                  </div>
                  <div className="begin__right">
                      <p className="begin__text">Получи классную востребованную <br/> профессию и зарабатывай дома <br/> в удобное время</p>
                      <button onClick={() => navigate('/register')} className="begin__btn">Начать учиться</button>
                  </div>
              </div>
              <div className="begin__nav">
                  <button className="begin__nav-btn">Об обучении</button>
                  <button className="begin__nav-btn">Преимущества</button>
                  <button className="begin__nav-btn">Отзывы</button>
                  <button className="begin__nav-btn">Ценовая политика</button>
              </div>
          </div>
        </section>
    );
};

export default Begin;