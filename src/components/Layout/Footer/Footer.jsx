import React from 'react';
import bracket from '../../../assets/bracket.svg'
import plus from '../../../assets/plus.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <img src={bracket} alt="" className="footer__bracket"/>
                <h1 className="footer__title">Остались вопросы?</h1>
                <div className="footer__row">
                    <h1 className="footer__title">Пиши!</h1>
                    <button className="footer__btn">Перейти в Telegram</button>
                    <img src={plus} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;