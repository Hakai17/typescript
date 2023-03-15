import { Trade } from './trade';

export class Trades {
    private trades: Array<Trade> = [];

    add(trade: Trade) {
        this.trades.push(trade);
    }

    list(): ReadonlyArray<Trade> {
        return this.trades;
    }
}
