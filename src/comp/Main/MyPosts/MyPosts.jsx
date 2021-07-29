import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <section className={s.main}>
            <div className={s.posts}>
                <h2>My posts</h2>
                <input type="text" name="" id=""/>
                <button>Send</button>
            </div>
            <Post message='Hi, How are you' like='3'/>
            <Post message='Hello' like='1'/>
        </section>
    );
}

export default MyPosts;