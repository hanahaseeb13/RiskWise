import { motion } from 'framer-motion';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import { journeyTimeline, achievements } from '../mock/behavior';
import { Trophy } from 'lucide-react';

const toneColor = {
  teal: '#48C6B6', orange: '#FFD084', accent: '#DFFF66', purple: '#7F6CF6',
};

export default function Journey() {
  const score = 74;
  return (
    <div className="flex flex-col gap-6">
      <Card hover={false}>
        <p className="text-xs uppercase tracking-wide text-muted">Behavioral Health Score</p>
        <div className="mt-3 flex items-center gap-4">
          <span className="font-display text-4xl font-bold text-teal">{score}</span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full rounded-full bg-teal"
            />
          </div>
        </div>
        <p className="mt-2 text-sm text-muted">Up 6 points from last week — discipline is trending well.</p>
      </Card>

      <ChartCard title="Behavioral Timeline">
        <div className="flex flex-col gap-5">
          {journeyTimeline.map((item, i) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: toneColor[item.tone] }}
                />
                {i < journeyTimeline.length - 1 && <div className="mt-1 h-full w-px flex-1 bg-white/10" />}
              </div>
              <div className="pb-4">
                <p className="text-xs text-muted">{item.date}</p>
                <p className="font-medium">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ChartCard>

      <ChartCard title="Achievements">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`flex items-start gap-3 rounded-2xl p-4 border ${
                a.earned ? 'bg-accent/10 border-accent/30' : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <span className="text-2xl">{a.icon}</span>
              <div>
                <p className="font-medium">{a.title}</p>
                <p className="text-xs text-muted">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
