import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Message/MessageItem";

let dialogsData = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Petya'},
    {id: 3, name: 'Maxim'},
    {id: 4, name: 'Slava'},
    {id: 5, name: 'Dimon'},
    {id: 6, name: 'Valerick'}
]
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What do you do?'},
    {id: 4, message: 'What\'s about you?'},
    {id: 5, message: 'Hello'},
    {id: 6, message: 'Valerick'}
]

let dialogsElement = dialogsData.map ( d => <DialogItem name={d.name} id={d.id}/>)
let messagesElement = messagesData.map ( m => <MessageItem message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPerson}>
                <ul className={s.dialogsList}>
                    { dialogsElement }
                </ul>
            </div>
            {/*sd*/}
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    );
}

export default Dialogs;