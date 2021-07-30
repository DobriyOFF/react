import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={s.item + ' ' + s.active}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></li>
    );
}

export default DialogItem;