import React from 'react';
import './App.css';
import Header from "./comp/Header";
import Aside from "./comp/Aside";
import Main from "./comp/Main";

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Aside />
        <Main />
    </div>
  );
}



export default App;
