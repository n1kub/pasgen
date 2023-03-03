import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

const AppView = observer(() => {

    return (<div
        className='d-flex flex-column align-items-center justify-content-center rounded-3 w-50 bg-dark mb-5 overflow-auto'>
        <input type="text" className='form-control bg-white m-3 w-75' disabled/>
        <div className='d-flex flex-row align-items-center justify-content-center w-75'>
            <div className='form-check d-flex align-items-center justify-content-center'>
                <input id="specials" type="checkbox" className='form-check-input m-3'/>
                <label htmlFor="specials" className="form-check-label text-light">
                    Со специальными символами
                </label>
            </div>
            <div className='form-check d-flex align-items-center justify-content-center'>
                <input id="uppers" type="checkbox" className='form-check-input m-3' value=""/>
                <label htmlFor="uppers" className="form-check-label text-light">
                    С заглавными буквами
                </label>
            </div>
        </div>
        <button className="btn btn-primary m-3 w-75">Сгенерировать новый пароль</button>
    </div>)
});

export default AppView;
