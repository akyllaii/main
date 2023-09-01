import React from 'react';
import Begin from "./begin/Begin";
import Edu from "./edu/Edu";
import Edge from "./edge/Edge";
import Reviews from "./reviews/reviews";
import Price from "./price/Price";
import Footer from "../../components/Layout/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Begin/>
            <Edu/>
            <Edge/>
            <Reviews/>
            <Price/>
            <Footer/>
        </div>
    );
};

export default Home;