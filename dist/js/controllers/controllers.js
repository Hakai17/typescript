import { Trades } from './../models/trades.js';
import { Trade } from './../models/trade.js';
export class Controller {
    constructor() {
        this.trades = new Trades();
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const trade = this.newTrade();
        this.trades.add(trade);
        console.log(this.trades.list());
        this.cleanForm();
    }
    newTrade() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Trade(date, quantity, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
