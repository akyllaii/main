import React from 'react';
import bracket from '../../../assets/blackbracket.svg'
import blackPlus from '../../../assets/blackplus.svg'
import urii from '../../../assets/urii.png'

const Edu = () => {
    return (
        <section className='edu'>
            <div className="container">
                <div className="edu__row">
                    <h1 className="edu__title">Об обучении</h1>
                    <img className='edu__bracket' src={bracket} alt=""/>
                </div>
                <h2 className="edu__subtitle">Перед тобой онлайн платформа посвященная java разработĸе. </h2>
                <p className="edu__text">
                    Курс состоит из частей, или по другому — модулей. <br/>Каждый модуль состоит из видео-лекций, теста и глобального проекта.
                </p>
                <div className="edu__row">
                    <p className="edu__text"><span>Проект</span> - это большая задача, которую ты делаешь сам и отправляешь свой код на проверку куратора. Ведь невозможно стать программистом, не практикуясь!</p>
                    <p className="edu__text">Куратор дает тебе <span>обратную связь</span> по твоему решению. Такой подход дает тебе, с одной стороны самостоятельную практику, с другой стороны помогает тебе улучшить твой код.</p>
                </div>
                <div className="edu__task">
                    <h2 className="edu__subtitle">Твоя задача:</h2>
                    <p className="edu__text">посмотреть видео-лекции, пройти итоговый <br/> тест и написать свое решение проекта.</p>
                    <h2 className="edu__subtitle">Теперь у тебя есть все инструменты <br/>
                        для становления разработчиком в будущем!</h2>
                </div>
                <h1 className="edu__title2">Пройдешь все модули <br/> <span>и вперед на собеседования!</span> </h1>
                <h2 className="edu__subtitle">Твои действия</h2>
                <div className="edu__act">
                    <p className="edu__act-text">смотришь леĸции</p>
                    <p className="edu__act-text">решаешь задачу</p>
                    <p className="edu__act-text">делаешь проект</p>
                    <p className="edu__act-text">отправляешь куратору</p>
                    <p className="edu__act-text">получаешь обратную связь</p>
                </div>
                <h2 className="edu__subtitle">Ты получишь:</h2>
                <div className="edu__row">
                        <p className="edu__row-text"> <span>+</span>пожизненный доступ ĸ видеоуроĸам <br/> <span>+</span> чат для учениĸов <br/> <span>+</span> бесценная праĸтиĸа на реальных задачах <br/> <span>=</span> все необходимое для трудоустройства</p>
                    <img src={blackPlus} alt=""/>
                </div>
                <div className="edu__row2">
                    <div className="edu__left">
                        <h1 className="edu__left-title">Кто создал Академию?</h1>
                        <p className="edu__left-text">Юрий Молодыко — действующий java разработчик в Банке "ВТБ". Опыт работы в IT индустрии 9 лет. <br/> <br/> <br/>
                            За свою карьеру работал в крупнейших финансовых организациях: Сбербанк, Россгострах, Финансовая корпорация Открытие. Начинал с должности экономиста, поэтому не понаслышке знает о всех трудностях перехода из одной профессии в другую.</p>
                        <img src={bracket} alt=""/>
                    </div>
                    <img src={urii} alt="" className="edu__right"/>
                </div>
                <h1 className="edu__title2">При создании АКадемии учтены <br/> <span>все теКущие требования</span> <br/> работодателей России </h1>
            </div>
        </section>
    );
};

export default Edu;