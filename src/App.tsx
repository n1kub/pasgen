import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css'

const AppView = observer(() => {
  return (<div className='d-flex flex-row align-items-center justify-content-center  rounded-3 w-50 bg-dark mb-5 overflow-auto'>
    <p className='bg-white my-3'></p>
  </div>)
});

export default AppView;
