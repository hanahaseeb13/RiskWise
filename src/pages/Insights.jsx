import {
  ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts';
import ChartCard from '../components/ChartCard';
import {
  riskTrend, portfolioGrowth, tradingFrequency, behaviorRadar, allocationPie,
} from '../mock/behavior';

const pieColors = ['#7F6CF6', '#48C6B6', '#FFD084', '#DFFF66', '#FF6B6B'];

export default function Insights() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Risk Trend" subtitle="Monthly average risk score">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={riskTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="month" stroke="#BFBFBF" fontSize={12} />
              <YAxis stroke="#BFBFBF" fontSize={12} />
              <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
              <Line type="monotone" dataKey="risk" stroke="#FF6B6B" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Portfolio Growth" subtitle="Value over time">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={portfolioGrowth}>
              <defs>
                <linearGradient id="ins-growth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#48C6B6" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#48C6B6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="month" stroke="#BFBFBF" fontSize={12} />
              <YAxis stroke="#BFBFBF" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
              <Area type="monotone" dataKey="value" stroke="#48C6B6" strokeWidth={2} fill="url(#ins-growth)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Trading Frequency" subtitle="Trades per day">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={tradingFrequency}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="day" stroke="#BFBFBF" fontSize={12} />
              <YAxis stroke="#BFBFBF" fontSize={12} />
              <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
              <Bar dataKey="trades" fill="#DFFF66" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Sector Allocation" subtitle="Portfolio composition">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={allocationPie} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                {allocationPie.map((entry, i) => (
                  <Cell key={entry.name} fill={pieColors[i % pieColors.length]} />
                ))}
              </Pie>
              <Legend wrapperStyle={{ fontSize: 12, color: '#BFBFBF' }} />
              <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Behavioral Radar" subtitle="Trait comparison">
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart data={behaviorRadar}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="trait" stroke="#BFBFBF" fontSize={12} />
            <PolarRadiusAxis stroke="rgba(255,255,255,0.1)" tick={false} />
            <Radar dataKey="value" stroke="#7F6CF6" fill="#7F6CF6" fillOpacity={0.4} />
            <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
