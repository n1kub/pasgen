import React, {useState} from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {pass} from "./service/mobx";
import {runInAction} from "mobx";

const AppView = observer(() => {

    return (<div className='d-flex flex-column align-items-center justify-content-center rounded-3 w-50 bg-dark mb-5 '>
        <textarea className='form-control bg-white text-center m-3 w-75' value={pass.password_value} placeholder="Your password will appear here" disabled/>
        <input type="number" min={0} max={100} className='form-control bg-white m-3 w-75 text-center' value={pass.desired_password_length} placeholder="Choose password length"
               onChange={(e) => {
                   console.log(e.target.value);
                   const pass_len: number = parseInt((e.target as HTMLInputElement).value);
                   if (pass_len < 0) {
                       // (e.target as HTMLInputElement).value = "0";
                       runInAction(() => {pass.desired_password_length = 0});
                   } else if (pass_len > 100) {
                       // (e.target as HTMLInputElement).value = "100";
                       runInAction(() => {pass.desired_password_length = 100});
                   } else {
                       // (e.target as HTMLInputElement).value = pass_len.toString();
                       runInAction(() => {pass.desired_password_length = pass_len});
                   }
               }
               }/>
        <div className='d-flex flex-row align-items-center justify-content-center w-75'>
            <div className='form-check d-flex align-items-center justify-content-center'>
                <input id="specials" type="checkbox" className='form-check-input m-3'
                       onChange={async () => {
                           runInAction(() => {pass.has_special_symbols = !pass.has_special_symbols});
                           await pass.modify_password();

                       }
                       }/>
                <label htmlFor="specials" className="form-check-label text-light">
                    Со специальными символами
                </label>
            </div>
            <div className='form-check d-flex align-items-center justify-content-center'>
                <input id="uppers" type="checkbox" className='form-check-input m-3' value=""
                       onChange={async () => {
                           runInAction(() => {pass.has_upper = !pass.has_upper});
                           await pass.modify_password();
                       }
                       }/>
                <label htmlFor="uppers" className="form-check-label text-light">
                    С заглавными буквами
                </label>
            </div>
        </div>
        <button className="btn btn-primary m-3 w-75"
                onClick={async () => {
                    await pass.retrieve_new_password();
                }
        }>
            Сгенерировать новый пароль
        </button>
    </div>)
});

export default AppView;
