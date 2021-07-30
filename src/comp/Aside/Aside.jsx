import React from 'react';
import s from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className={s.aside}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}yjgq2z3eqœŒQ>Music</NavLink></li>
            </ul>
        </aside>
    );
}

export default Aside;