import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPerson}>
                <ul className={s.dialogsList}>
                    <li className={s.item + ' ' + s.active}><NavLink to="/dialogs/1">Sergey</NavLink></li>
                    <li className={s.item + ' ' + s.active}><NavLink to="/dialogs/2">Petya</NavLink></li>
                    <li className={s.item + ' ' + s.active}><NavLink to="/dialogs/3">Maxim</NavLink></li>
                </ul>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
            </div>
        </div>
    );
}

export default Dialogs;