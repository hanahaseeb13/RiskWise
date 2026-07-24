import { motion } from 'framer-motion';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import TradeTicket from '../components/TradeTicket';
import AnimatedCounter from '../components/AnimatedCounter';
import useTradeStore from '../store/useTradeStore';
import { stocks, watchlist } from '../mock/stocks';
import clsx from 'clsx';

export default function Workspace() {
  const { trades, holdings, cash, setSelectedSymbol } = useTradeStore();
  const invested = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const current = holdings.reduce((sum, h) => sum + h.ltp * h.qty, 0);
  const pnl = current - invested;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Card hover={false}>
          <p className="text-xs uppercase tracking-wide text-muted">Cash Balance</p>
          <p className="mt-2 font-display text-3xl font-bold">
            ₹<AnimatedCounter value={cash} />
          </p>
        </Card>
        <Card hover={false}>
          <p className="text-xs uppercase tracking-wide text-muted">Portfolio Value</p>
          <p className="mt-2 font-display text-3xl font-bold text-teal">
            ₹<AnimatedCounter value={current} />
          </p>
        </Card>
        <Card hover={false}>
          <p className="text-xs uppercase tracking-wide text-muted">Unrealized P&amp;L</p>
          <p className={clsx('mt-2 font-display text-3xl font-bold', pnl >= 0 ? 'text-accent' : 'text-danger')}>
            {pnl >= 0 ? '+' : '-'}₹<AnimatedCounter value={Math.abs(pnl)} />
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <ChartCard title="Watchlist" subtitle="Tap a symbol to trade it">
            <div className="flex flex-col divide-y divide-white/5">
              {stocks
                .filter((s) => watchlist.includes(s.symbol))
                .map((s) => (
                  <button
                    key={s.symbol}
                    onClick={() => setSelectedSymbol(s.symbol)}
                    className="flex items-center justify-between py-3 text-left hover:bg-white/5 rounded-2xl px-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/20 font-display text-xs font-bold text-purple">
                        {s.symbol.slice(0, 2)}
                      </span>
                      <div>
                        <p className="font-medium">{s.symbol}</p>
                        <p className="text-xs text-muted">{s.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{s.price.toLocaleString('en-IN')}</p>
                      <p className={clsx('text-xs', s.change >= 0 ? 'text-teal' : 'text-danger')}>
                        {s.change >= 0 ? '+' : ''}{s.change}%
                      </p>
                    </div>
                  </button>
                ))}
            </div>
          </ChartCard>

          <ChartCard title="Portfolio Summary" subtitle="Your current holdings">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-muted">
                    <th className="pb-2">Symbol</th>
                    <th className="pb-2">Qty</th>
                    <th className="pb-2">Avg.</th>
                    <th className="pb-2">LTP</th>
                    <th className="pb-2 text-right">P&amp;L</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => {
                    const hPnl = (h.ltp - h.avg) * h.qty;
                    return (
                      <tr key={h.symbol} className="border-t border-white/5">
                        <td className="py-3 font-medium">{h.symbol}</td>
                        <td className="py-3 text-muted">{h.qty}</td>
                        <td className="py-3 text-muted">₹{h.avg.toLocaleString('en-IN')}</td>
                        <td className="py-3 text-muted">₹{h.ltp.toLocaleString('en-IN')}</td>
                        <td className={clsx('py-3 text-right font-medium', hPnl >= 0 ? 'text-teal' : 'text-danger')}>
                          {hPnl >= 0 ? '+' : ''}₹{hPnl.toFixed(0)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ChartCard>

          <ChartCard title="Recent Trades">
            <div className="flex flex-col divide-y divide-white/5">
              {trades.slice(0, 6).map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={clsx(
                      'rounded-lg px-2 py-1 text-xs font-semibold',
                      t.type === 'BUY' ? 'bg-teal/20 text-teal' : 'bg-danger/20 text-danger'
                    )}>
                      {t.type}
                    </span>
                    <span className="font-medium">{t.symbol}</span>
                  </div>
                  <div className="text-right text-sm text-muted">
                    <p>{t.qty} @ ₹{t.price.toLocaleString('en-IN')}</p>
                    <p className="text-xs">{t.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ChartCard>
        </div>

        <div>
          <TradeTicket />
        </div>
      </div>
    </div>
  );
}
