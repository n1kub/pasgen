import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css'

const AppView = observer(() => {
  return (<div className='d-flex flex-row align-items-center justify-content-center'>
    <p></p>
  </div>)
});

export default AppView;
