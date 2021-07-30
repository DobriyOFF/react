import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postsData = [
    {id: 1, message: 'Hi, How are you', likesCount: 12},
    {id: 2, message: 'Hello?', likesCount: 4}
]

let postsElement = postsData.map ( p => <Post message={p.message} like={p.likesCount}/>)

const MyPosts = () => {
    return (
        <section className={s.main}>
            <div className={s.posts}>
                <h2>My posts</h2>
                <input type="text" name="" id=""/>
                <button>Send</button>
            </div>
            { postsElement }
        </section>
    );
}

export default MyPosts;