import React from 'react';
import s from './MyProfile.module.css';

const MyProfile = () => {
    return (
        <main className={s.main}>
            <img className={s.header}
                 src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=6&m=1145474071&s=612x612&w=0&h=p4eN7OqEjFFcBtFZfQG283Tngx_Y8T49T3ZCXSpBxjU="
                 alt=""/>
            <div className={s.person}>
                <img className={s.img}
                     src="https://sun9-82.userapi.com/impg/vnL0WAC2JGcvffiBqUHw_0Qr1L2GJxhnrYveKQ/VQhjWDBTBvQ.jpg?size=810x1080&quality=96&sign=f197be33a2e9944ce2ac4205535b24ce&type=album"
                     alt=""/>
                <div className={s.personInfo}>
                    <h2>Sergey D</h2>
                    <h3>Date of Birth: 2 january</h3>
                    <h3>City: Minsk</h3>
                    <h3>Education: BSU'11</h3>
                    <h3>Web Site: dorofeev-sd.ru</h3>
                </div>
            </div>
        </main>
    );
}

export default MyProfile;