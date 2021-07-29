import React from 'react';
import s from './Main.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return (
        <main className={s.main}>
            <img className={s.header} src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=6&m=1145474071&s=612x612&w=0&h=p4eN7OqEjFFcBtFZfQG283Tngx_Y8T49T3ZCXSpBxjU=" alt=""/>
            <div className={s.person}>
                <img src="" alt=""/>
                <h2>Sergey D</h2>
                <h3>Date of Birth: 2 january</h3>
                <h3>City: Minsk</h3>
                <h3>Education: BSU'11</h3>
                <h3>Web Site: dorofeev_sd.ru</h3>
            </div>
            <MyPosts />
        </main>
    );
}

export default Main;