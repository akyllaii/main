import React from 'react';
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import UserHeader from "../../components/Layout/Header/UserHeader";
import Curator from "../../components/curator/curator";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Level = () => {
    const navigate = useNavigate()
    return (
        <>
            <UserHeader/>
            <section className="level">
                <div className="container">
                    <span onClick={() => navigate('/project')}> <BsFillArrowLeftCircleFill/> </span>
                    <div className="level__row">
                        <div className="level__block">
                            <div className="level__row">
                                <h1 className="level__title">Проект Тоyota</h1>
                                <p className="level__lvl">Этап 1</p>
                            </div>
                            <p className="level__subtitle">Модуль <span>SQL</span></p>
                        </div>
                        <Curator/>
                    </div>
                    <div className='level__acc'>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Описание этапа</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    На этом проекте с тобой создадим приложение, которое будет эмулировать весь процесс производства и продажи компании Toyota.
                                    <br/>
                                    <br/>
                                    Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько новых моделей машины, описать их свойства: такие как цвет, количество сидений, максимальная скорость и так далее. Но мало того, что описать их свойства, нужно описать еще и детали, из которых они будут состоять!
                                    <br/>
                                    <br/>
                                    Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели: езду, торможение, включение разных датчиков, если что то пойдет не так!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <h1 className="level__acc-title">Требования</h1>
                    <div className='level__acc'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className='level__num'>1</span>Создать новый проект</Typography>
                            </AccordionSummary>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className='level__num'>2</span>Создать новый репозиторий на гитхабе, связанный с этим проектом</Typography>
                            </AccordionSummary>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><span className='level__num'>3</span>Создать 4 модели авто:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    camry (легковой авто), solara (кабриолет), hiance (грузовой фургон), dyna (грузовой фургон) Для всех машин характерны следующие атрибуты: цвет, максимальная скорость, тип коробки передач (акпп, механика, робот), в состоянии движения (да/нет). Машины состоят из следующих компонентов: 4 колеса, бензобак, двигатель, электрика, фары Каждое колесо имеет состояние - проколото или нет, диаметр (camry - 17, solara - 16, hiance - 20, dyna - 20). Колеса могут быть заменяемы, если они одинакового диаметра. Бензобак имеет атрибут - количество бензина Двигатель имеет атрибут - работоспособен Электрика имеет атрибут - работоспособна Фары имеют атрибут - работоспособны Цена - с центами
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><span className='level__num'>4</span>Для легковых авто</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    характерно наличие круиз контроля, и возможности включить или выключить его. Для кабриолета характерно возможность опустить или поднять крышу ( следовательно и состояние этой крыши) Для грузового фургона есть дополнительный параметр - грузоподъемность (количество килограмм) Для модели camry характерно наличие usb (функция подключить музыку) Для модели solara характерно наличие мини холодильника (функция охладить напиток) Для модели hiance характерно наличие запасного колеса Для модели dyna характерно наличие розетки (функция зарядить телефон)
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <span className='level__num'>5</span>Необходимо создать класс Runner и в нем создать все модели, и проверить работоспособность всех методов.</Typography>
                            </AccordionSummary>
                        </Accordion>
                    </div>
                    <h1 className="level__acc-title">Решение</h1>
                    <div className="level__block">
                        <p className="level__text">Отправь ссылку на GitHub </p>
                        <div className="level__row">
                            <input placeholder='http://' type="text" className="level__inp"/>
                            <button className="level__btn">Отправить решение</button>
                        </div>
                    </div>
                </div>
            </section>
            <FooterUser/>
        </>
    );
};

export default Level;