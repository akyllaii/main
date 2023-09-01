import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import Curator from "../../components/curator/curator";
import {Link} from 'react-router-dom'

const Project = () => {
    const navigate = useNavigate()
    return (
        <>
            <UserHeader/>
            <section className="project">
                <div className="container">
                    <span onClick={() => navigate('/user')}> <BsFillArrowLeftCircleFill/> </span>
                    <div className="project__row">
                        <div className="project__left">
                            <h1 className="project__title">Проект Тоyota</h1>
                            <p className="project__subtitle">Модуль <span>SQL</span></p>
                            <h2 className="project__left-title">Описание этапа</h2>
                            <p className="project__left-text">На этом проекте с тобой создадим приложение, которое будет эмулировать весь процесс производства и продажи компании Toyota.
                                <br/>
                                <br/>
                                Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько новых моделей машины, описать их свойства: такие как цвет, количество сидений, максимальная скорость и так далее. Но мало того, что описать их свойства, нужно описать еще и детали, из которых они будут состоять!
                                <br/>
                                <br/>
                                Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели: езду, торможение, включение разных датчиков, если что то пойдет не так!
                            </p>
                            <div className="project__line"></div>
                            <div className="project__row">
                                <Link to={'/level'} className="project__level">Этап 1</Link>
                                <p className="project__status">Принят</p>
                            </div>
                            <div className="project__row">
                                <Link className="project__level">Этап 2</Link>
                                <p className="project__status">Ожидает решения</p>
                            </div>
                            <div className="project__row">
                                <Link className="project__level">Этап 3</Link>
                                <p className="project__status">Откроется после выполнения предыдущих этапов</p>
                            </div>
                            <div className="project__row">
                                <Link className="project__level">Этап 4</Link>
                                <p className="project__status">Откроется после выполнения предыдущих этапов</p>
                            </div>
                        </div>
                        <Curator/>
                    </div>
                </div>
            </section>
            <FooterUser/>
        </>
    );
};

export default Project;