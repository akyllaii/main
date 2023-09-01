import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../../features/selectSlice/selectSlice.js";

const Way = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data} = useSelector(store => store.projectSlice)

    useEffect(() => {
        dispatch(getProjects())
    },[dispatch])

    return (
        <section className='way'>
            <div className="container">
                    <h1 className="way__title">Мой путь</h1>
                    <button className="way__btn">Открыть все курсы за 50% </button>
                <div className="way__row2">
                    {data.map((item) => (
                        <div key={item._id} className="way__block">
                            <p className="way__card" onClick={() => navigate('/module')}>{item.module}</p>
                            <p className="way__card" onClick={() => navigate('/project')}>{item.project}</p>
                        </div>
                    ))}
                </div>

                {/*<p className="way__card">GIT</p>*/}
                {/*<div className="way__row">*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card" onClick={() => navigate('/module')}>Sql</p>*/}
                {/*        <p className="way__card" onClick={() => navigate('/project')}>Проект Университет</p>*/}
                {/*    </div>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">jdbc</p>*/}
                {/*        <p className="way__card">Проект Бюджет</p>*/}
                {/*    </div>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">hibernate</p>*/}
                {/*        <p className="way__card">Проект Автосервис</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="way__row">*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">Java core</p>*/}
                {/*        <p className="way__card">Проект Toyota</p>*/}
                {/*        <div className="way__line2"></div>*/}
                {/*    </div>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">Maven</p>*/}
                {/*        <p className="way__card">Проект</p>*/}
                {/*    </div>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">Lombok</p>*/}
                {/*        <p className="way__card">Введение в тестирование</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="way__block">*/}
                {/*    <p className="way__card">Generics</p>*/}
                {/*    <p className="way__card">Проект</p>*/}
                {/*</div>*/}
                {/*<div className="way__line2"></div>*/}
                {/*<div className="way__row">*/}
                {/*    <div className="way__block">*/}
                {/*        <p className="way__card">Структуры данных +Stream api</p>*/}
                {/*        <p className="way__card">Проект Дорожный институт</p>*/}
                {/*    </div>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <p className="way__card">Reflection api</p>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <p className="way__card">Spring core</p>*/}
                {/*    <div className="way__line"></div>*/}
                {/*    <p className="way__card">Spring boot + spring web</p>*/}
                {/*</div>*/}
                {/*<div className="way__line3"></div>*/}
            </div>
        </section>
    );
};

export default Way;