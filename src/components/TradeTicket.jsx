import { useState } from 'react';
import clsx from 'clsx';
import Button from './Button';
import Card from './Card';
import useTradeStore from '../store/useTradeStore';
import { stocks } from '../mock/stocks';
import useUIStore from '../store/useUIStore';

export default function TradeTicket() {
  const { selectedSymbol, side, setSide, placeOrder } = useTradeStore();
  const [qty, setQty] = useState(1);
  const [confirmed, setConfirmed] = useState(null);
  const openIntervention = useUIStore((s) => s.openIntervention);

  const stock = stocks.find((s) => s.symbol === selectedSymbol) || stocks[0];
  const total = (stock.price * qty).toFixed(2);

  const handleOrder = () => {
    const trade = placeOrder({ symbol: stock.symbol, qty, side });
    setConfirmed(trade);
    setTimeout(() => setConfirmed(null), 2500);
    // Simulate a behavioral nudge on rapid buys
    if (side === 'BUY' && qty > 15) openIntervention();
  };

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">Trading</p>
        <h3 className="font-display text-xl font-semibold">{stock.symbol}</h3>
        <p className="text-sm text-muted">₹{stock.price.toLocaleString('en-IN')}</p>
      </div>

      <div className="flex rounded-2xl bg-white/5 p-1">
        <button
          onClick={() => setSide('BUY')}
          className={clsx(
            'flex-1 rounded-xl py-2 text-sm font-semibold transition',
            side === 'BUY' ? 'bg-accent text-darktext' : 'text-light/70'
          )}
        >
          Buy
        </button>
        <button
          onClick={() => setSide('SELL')}
          className={clsx(
            'flex-1 rounded-xl py-2 text-sm font-semibold transition',
            side === 'SELL' ? 'bg-danger text-white' : 'text-light/70'
          )}
        >
          Sell
        </button>
      </div>

      <label className="block">
        <span className="mb-1 block text-xs text-muted">Quantity</span>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-accent/70"
        />
      </label>

      <div className="flex items-center justify-between text-sm text-muted">
        <span>Est. total</span>
        <span className="font-medium text-light">₹{Number(total).toLocaleString('en-IN')}</span>
      </div>

      <Button variant="primary" size="lg" onClick={handleOrder} className="w-full">
        Place Order
      </Button>

      {confirmed && (
        <p className="text-center text-xs text-teal">
          {confirmed.type} order for {confirmed.qty} {confirmed.symbol} placed ✓
        </p>
      )}
    </Card>
  );
}
