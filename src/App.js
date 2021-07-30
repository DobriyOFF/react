import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Aside from "./comp/Aside/Aside";
import Main from "./comp/Main/Main";
import Dialogs from "./comp/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Aside/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Main}/>
                    <Route path='news' component={Main}/>
                    <Route path='/music' component={Main}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
