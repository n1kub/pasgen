import {action, makeObservable, observable} from "mobx";
import generate_password from "./generate_password";

export class Password {
    password_value: string;
    password_length: number;
    has_upper: boolean;
    has_special_symbols: boolean;


    constructor(password_value: string, has_upper: boolean, has_special_symbols: boolean, password_length: number) {
        makeObservable(this, {
            password_value: observable,
            retrieve_new_password: action,
            modify_password: action
        });
        this.password_length = password_length;
        this.password_value = password_value;
        this.has_upper = has_upper;
        this.has_special_symbols = has_special_symbols;
    }

    async retrieve_new_password() {
        this.password_value = await generate_password(this.has_upper, this.has_special_symbols, this.password_length);
    }

    async modify_password() {
        this.password_value = await generate_password(this.has_upper, this.has_special_symbols, this.password_length, this.password_value);
    }
}
