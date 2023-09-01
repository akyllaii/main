import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import Curator from "../../components/curator/curator";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

const Module = () => {
    const navigate = useNavigate()
    return (
        <>
            <UserHeader/>
            <section className='module'>
                <div className="container">
                    <span onClick={() => navigate('/user')}><BsFillArrowLeftCircleFill/></span>
                    <div className="module__row">
                        <div className="module__block">
                            <Accordion className='module__acc'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className="module__item">Модуль SQL</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography> <ul className='module__list'>
                                        <li onClick={() => navigate('/lection')} className="module__item">Лекция 1</li>
                                        <li onClick={() => navigate('/lection')} className="module__item">Лекция 2</li>
                                        <li onClick={() => navigate('/lection')} className="module__item">Лекция 3</li>
                                    </ul></Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <Curator/>
                    </div>
                    <h1 className="module__test">Итоговый тест</h1>
                    <button className="module__btn">Пройти</button>
                </div>
            </section>
            <FooterUser/>
        </>
    );
};

export default Module;