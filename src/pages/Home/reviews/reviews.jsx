import React from 'react';
import ivan from '../../../assets/ivan.png'

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="container">
                <div className="reviews__row">
                    <h1 className="reviews__title">Отзывы</h1>
                    <div className="reviews__middle">
                        <img src={ivan} alt="" className="reviews__img"/>
                        <h2 className="reviews__middle-title">Иван Иванов</h2>
                        <h2 className="reviews__middle-subtitle">25 лет</h2>
                    </div>
                    <p className="reviews__right">Хотел поблагодарить Юрия и курсы программирования <br/> JavaByAblazzing, который дал прекрасный старт помогающий <br/> освоить мир Java разработки. Хочу ометить высокую <br/> профессиональную подготовку лектора, и крайнюю <br/> заинтересованность в своих учениках. Очень понравилось <br/> что на все интресующие вопросы и возникшие трудности, <br/> тебе обязательно ответят и дадут развернутый ответ. Так же <br/> хочу отметить интересные практические задания, дающие в <br/> полной мере реализовать теоритические знания. Ну и <br/> конечно же ламповый чат с другими учениками курса, в <br/> котором можно обсудить насущные проблемы и завести <br/> отличных коллег и товарищей)). Могу точно сказать что <br/> благодаря данным курсам я получил много недостающих <br/> знаний и закрыл пробелы в уже имеющихся.</p>
                </div>
            </div>
        </section>
    );
};

export default Reviews;