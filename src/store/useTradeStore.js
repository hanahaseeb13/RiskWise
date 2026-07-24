import { create } from 'zustand';
import { portfolio, recentTrades, stocks } from '../mock/stocks';

const useTradeStore = create((set, get) => ({
  cash: portfolio.cash,
  holdings: portfolio.holdings,
  trades: recentTrades,
  selectedSymbol: 'RELIANCE',
  side: 'BUY',
  setSelectedSymbol: (symbol) => set({ selectedSymbol: symbol }),
  setSide: (side) => set({ side }),
  placeOrder: ({ symbol, qty, side }) => {
    const stock = stocks.find((s) => s.symbol === symbol);
    if (!stock || !qty) return;
    const trade = {
      id: Date.now(),
      symbol,
      type: side,
      qty: Number(qty),
      price: stock.price,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    set((state) => ({
      trades: [trade, ...state.trades].slice(0, 20),
      cash:
        side === 'BUY'
          ? state.cash - stock.price * qty
          : state.cash + stock.price * qty,
    }));
    return trade;
  },
}));

export default useTradeStore;
