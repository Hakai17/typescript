import { Trade } from './trade';

export class Trades {
    private trades: Trade[] = [];

    add(trade: Trade) {
        this.trades.push(trade);
    }

    list(): readonly Trade[] {
        return this.trades;
    }
}
