import React from 'react';
import curator from '../../assets/curator.png'

const Curator = () => {
    return (
        <div className='curator'>
            <h1 className="curator__title">Мой куратор</h1>
            <h2 className="curator__subtitle">В любой непонятной ситуации - пиши</h2>
            <div className="curator__row">
                <img src={curator} alt="" className="curator__ava"/>
                <p className="curator__name">Константин <br/> Константинопольский</p>
            </div>
        </div>
    );
};

export default Curator;