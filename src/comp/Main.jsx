import React from 'react';

const Main = () => {
    return (
        <main className='main'>
            <img className='main-img' src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=6&m=1145474071&s=612x612&w=0&h=p4eN7OqEjFFcBtFZfQG283Tngx_Y8T49T3ZCXSpBxjU=" alt=""/>
            <div className='person'>
                <img className='person-img' src="" alt=""/>
                <h2 className='person-fio'>Sergey D</h2>
                <h3 className='person-feat'>Date of Birth: 2 january</h3>
                <h3 className='person-feat'>City: Minsk</h3>
                <h3 className='person-feat'>Education: BSU'11</h3>
                <h3 className='person-feat'>Web Site: dorofeev-sd.ru</h3>
            </div>
            <div className='posts'>
                <h2 className='posts-title'>My posts</h2>
                <input className='person-area' type="text" name="" id=""/>
                <button className='posts-btn'>Send</button>ß
            </div>
            <ul>
                <li>
                    post1
                </li>
                <li>
                    post2
                </li>
            </ul>
        </main>
    );
}

export default Main;