import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <ul className={s.list}>
                <li className={s.item}>
                    <img src="" alt=""/>
                    {props.message + ' '}
                    {props.like}
                </li>
            </ul>
    );
}

export default Post;