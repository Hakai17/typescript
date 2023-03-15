export class Trade {

    constructor (
        private _date: Date,
        private _quantity: number,
        private _value: number
        ) {}

    get date (): Date {
        const data = new Date(this._date.getTime());
        return data;
    }

    get quantity (): number {
        return this._quantity;
    }

    get value (): number {
        return this._value;
    }

    get volume (): number {
        return this._value * this._quantity;
    }
}