import React from 'react';
import UserHeader from "../../components/Layout/Header/UserHeader";
import Way from "./way";
import Lesson from "./Lesson";
import FooterUser from "../../components/Layout/Footer/FooterUser";


const User = () => {
    return (
        <>
            <UserHeader/>
            <Way/>
            <Lesson/>
            <FooterUser/>
        </>
    );
};

export default User;