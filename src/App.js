import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Aside from "./comp/Aside/Aside";
import Main from "./comp/Main/Main";

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
