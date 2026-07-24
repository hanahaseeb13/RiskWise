import { useState } from 'react';
import clsx from 'clsx';
import ChartCard from '../components/ChartCard';
import { stocks } from '../mock/stocks';
import useTradeStore from '../store/useTradeStore';
import { useNavigate } from 'react-router-dom';

export default function Market() {
  const [query, setQuery] = useState('');
  const setSelectedSymbol = useTradeStore((s) => s.setSelectedSymbol);
  const navigate = useNavigate();

  const filtered = stocks.filter(
    (s) =>
      s.symbol.toLowerCase().includes(query.toLowerCase()) ||
      s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl bg-dark border border-white/10 px-4 py-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search assets…"
          className="w-full bg-transparent text-sm placeholder:text-muted focus:outline-none"
        />
      </div>

      <ChartCard title="All Assets" subtitle={`${filtered.length} instruments`}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((s) => (
            <button
              key={s.symbol}
              onClick={() => {
                setSelectedSymbol(s.symbol);
                navigate('/workspace');
              }}
              className="flex items-center justify-between rounded-2xl bg-white/5 p-4 text-left hover:bg-white/10"
            >
              <div>
                <p className="font-medium">{s.symbol}</p>
                <p className="text-xs text-muted">{s.name}</p>
                <span className="mt-1 inline-block rounded-full bg-purple/20 px-2 py-0.5 text-[10px] text-purple">
                  {s.sector}
                </span>
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
    </div>
  );
}
