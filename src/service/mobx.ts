import {action, makeObservable, observable, runInAction} from "mobx";
import generate_password from "./generate_password";

class Password {
    password_value: string;
    desired_password_length: number;
    has_upper: boolean;
    has_special_symbols: boolean;


    constructor(password_value: string, desired_password_length: number, has_upper: boolean, has_special_symbols: boolean) {
        makeObservable(this, {
            password_value: observable,
            desired_password_length: observable,
            retrieve_new_password: action,
            modify_password: action
        });
        this.desired_password_length = desired_password_length;
        this.password_value = password_value;
        this.has_upper = has_upper;
        this.has_special_symbols = has_special_symbols;
    }

    async retrieve_new_password() {
        const newPass = await generate_password(this.has_special_symbols, this.has_upper, this.desired_password_length);
        console.log("new pass = " + newPass);
        runInAction( () => {
            this.password_value = newPass;
        });
    }

    async modify_password() {
        const newPass = await generate_password(this.has_special_symbols, this.has_upper, this.desired_password_length, this.password_value);
        console.log("modified pass " + newPass);
        runInAction(() => {
            this.password_value = newPass;
        });
    }
}

export const pass = new Password("", 0, false, false);
