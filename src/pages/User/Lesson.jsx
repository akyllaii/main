import React from 'react';
import Curator from "../../components/curator/curator";

const Lesson = () => {
    return (
        <section className='lesson'>
            <div className="container lesson__row1">
                <div className="lesson__block">
                    <h1 className="lesson__title">Проекты</h1>
                    <div className="lesson__row">
                        <p className="lesson__level">SQL</p>
                        <p className="lesson__project">Проект Университет</p>
                        <p className="lesson__status">Принят</p>
                    </div>
                    <div className="lesson__row">
                        <p className="lesson__level">java core</p>
                        <p className="lesson__project">Проект Toyota</p>
                        <p className="lesson__status">Принят</p>
                    </div>
                    <h1 className="lesson__title">Модули</h1>
                    <div className="lesson__row">
                        <p className="lesson__level">Типы данных в java</p>
                    </div>
                </div>
                <Curator/>
            </div>
        </section>
    );
};

export default Lesson;