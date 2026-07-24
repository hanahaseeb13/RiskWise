import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import RiskGauge from '../components/RiskGauge';
import { riskScore, behaviorTags, shapFactors, behaviorTimeline } from '../mock/behavior';

export default function Behavior() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card hover={false} className="flex flex-col items-center justify-center gap-3 lg:col-span-1">
          <div className="flex flex-wrap justify-center gap-2">
            {behaviorTags.map((t) => (
              <span
                key={t.label}
                className={`rounded-full px-3 py-1 text-xs font-semibold bg-${t.tone}/20 text-${t.tone}`}
                style={{
                  backgroundColor: t.tone === 'orange' ? 'rgba(255,208,132,0.15)' : 'rgba(255,107,107,0.15)',
                  color: t.tone === 'orange' ? '#FFD084' : '#FF6B6B',
                }}
              >
                {t.label}
              </span>
            ))}
          </div>
          <RiskGauge score={riskScore} size={220} />
          <p className="text-center text-sm text-muted">
            Your current session shows elevated impulsivity. Review the factors below.
          </p>
        </Card>

        <ChartCard title="Top Contributing Factors" subtitle="SHAP explainability" className="lg:col-span-2">
          <div className="flex flex-col gap-4">
            {shapFactors.map((f) => (
              <div key={f.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted">{f.label}</span>
                  <span className="font-medium">{f.value}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${f.value}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-orange"
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <ChartCard title="Behavioral Timeline" subtitle="Risk score across the week">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={behaviorTimeline}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="day" stroke="#BFBFBF" fontSize={12} />
            <YAxis stroke="#BFBFBF" fontSize={12} />
            <Tooltip contentStyle={{ background: '#191919', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
            <Line type="monotone" dataKey="score" stroke="#7F6CF6" strokeWidth={3} dot={{ r: 4, fill: '#7F6CF6' }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
