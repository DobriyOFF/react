import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPerson}>
                <ul className={s.dialogsList}>
                    <li className={s.item + ' ' + s.active}>Sergey</li>
                </ul>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
            </div>
        </div>
    );
}

export default Dialogs;