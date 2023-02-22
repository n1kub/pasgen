import { observable, makeObservable, action, runInAction } from "mobx";

export class password {
    password_value: string;
    has_upper: boolean;
    has_special_symbols: boolean;


    constructor(password_value: string, has_upper: boolean, has_special_symbols: boolean) {
        makeObservable(this, {
            password_value: observable,
            has_upper: observable,
            has_special_symbols: observable,
        });
        this.password_value = password_value;
        this.has_upper = has_upper;
        this.has_special_symbols = has_special_symbols;
    }
}
