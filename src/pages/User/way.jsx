import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../../features/selectSlice/selectSlice.js";
import {BsPlusCircle} from 'react-icons/bs'
import {addToCart} from "../../features/selectSlice/selectSlice.js";


const Way = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data} = useSelector(store => store.projectSlice)

    useEffect(() => {
        dispatch(getProjects())
    },[dispatch])

    const handleAddToCart = (data) => {
        dispatch(addToCart(data))
    }

    return (
        <section className='way'>
            <div className="container">
                    <h1 className="way__title">Мой путь</h1>
                    <button className="way__btn">Открыть все курсы за 50% </button>
                <div className="way__row2">
                    {data.map((item) => (
                        <div key={item._id} className="way__block">
                            <p className="way__card" onClick={() => navigate('/module')}>{item.module} </p>
                            <button className='way__plus' onClick={() => handleAddToCart(item)}><span><BsPlusCircle/></span></button>
                            <p className="way__card" onClick={() => navigate('/project')}>{item.project}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Way;