import React from 'react';
import s from './Main.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";

const Main = () => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts/>
        </main>
    );
}

export default Main;