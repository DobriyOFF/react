import React from 'react';
import s from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={s.aside}>
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
            </ul>
        </aside>
    );
}

export default Aside;