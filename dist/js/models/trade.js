export class Trade {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    get date() {
        const data = new Date(this._date.getTime());
        return data;
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._value * this._quantity;
    }
}
