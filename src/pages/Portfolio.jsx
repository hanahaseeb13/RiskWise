import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import clsx from 'clsx';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import AnimatedCounter from '../components/AnimatedCounter';
import useTradeStore from '../store/useTradeStore';
import { portfolioGrowth } from '../mock/behavior';

export default function Portfolio() {
  const { holdings, cash } = useTradeStore();
  const invested = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const current = holdings.reduce((sum, h) => sum + h.ltp * h.qty, 0);
  const pnl = current - invested;
  const pnlPct = ((pnl / invested) * 100).toFixed(2);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Card>
          <p className="text-xs uppercase tracking-wide text-muted">Total Value</p>
          <p className="mt-2 font-display text-2xl font-bold">₹<AnimatedCounter value={current + cash} /></p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wide text-muted">Invested</p>
          <p className="mt-2 font-display text-2xl font-bold">₹<AnimatedCounter value={invested} /></p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wide text-muted">P&amp;L</p>
          <p className={clsx('mt-2 font-display text-2xl font-bold', pnl >= 0 ? 'text-teal' : 'text-danger')}>
            {pnl >= 0 ? '+' : ''}₹{pnl.toFixed(0)}
          </p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wide text-muted">Return</p>
          <p className={clsx('mt-2 font-display text-2xl font-bold', pnl >= 0 ? 'text-teal' : 'text-danger')}>
            {pnl >= 0 ? '+' : ''}{pnlPct}%
          </p>
        </Card>
      </div>

      <ChartCard title="Portfolio Growth" subtitle="Last 6 months">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={portfolioGrowth}>
            <defs>
              <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFFF66" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#DFFF66" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="month" stroke="#BFBFBF" fontSize={12} />
            <YAxis stroke="#BFBFBF" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
            <Area type="monotone" dataKey="value" stroke="#DFFF66" strokeWidth={2} fill="url(#growth)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Holdings">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="pb-2">Symbol</th>
                <th className="pb-2">Qty</th>
                <th className="pb-2">Avg.</th>
                <th className="pb-2">LTP</th>
                <th className="pb-2">Value</th>
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
                    <td className="py-3 text-muted">₹{(h.ltp * h.qty).toLocaleString('en-IN')}</td>
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
    </div>
  );
}
