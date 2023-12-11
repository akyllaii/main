import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import FooterUser from "../../components/Layout/Footer/FooterUser";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const Lection = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const message = useSelector(store => store.messageSlice)
    //
    // const handleSendMessage = () => {
    //     const newMessage = "Новый текст сообщения";
    //     dispatch(setMessageText(newMessage));
    // };

    return (
        <>
           <UserHeader/>
           <section className="lection">
               <div className="container">
                   <span onClick={() => navigate('/module')}><BsFillArrowLeftCircleFill/></span>
                   <h1 className="lection__title">Iterable</h1>
                   <iframe width="960" height="539" src="https://www.youtube.com/embed/LG-q2VBUSCw?si=38nS0WqOHsXBHnPs"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen></iframe>
                   <div className="lection__block">
                       <h2 className="lection__block-title">Описание</h2>
                       <p className="lection__block-text">В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же с его помощью мы можем создавать итератор, который может удалять элементы прямо во время итерирования.</p>
                   </div>
                   <form className="lection__block">
                       <h2 className="lection__block-title">Комментарий</h2>
                       <p className="lection__block-text">Если есть вопрос, можно написать куратору, или оставить его прямо здесь:</p>
                       <textarea className="lection__textarea"></textarea>
                       <button className="lection__btn">Отправить</button>
                       <h2 className="lection__block-title">История сообщений</h2>
                       <p className="lection__answer">Вы спросили</p>
                       <p className="lection__block-text">А как исправить это и это</p>
                       <p className="lection__answer">Константин</p>
                       <p className="lection__block-text">Посмотрите внимательно по ссылке</p>
                   </form>
               </div>
           </section>
            <FooterUser/>
        </>
    );
};

export default Lection;