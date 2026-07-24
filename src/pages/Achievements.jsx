import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import { achievements } from '../mock/behavior';

export default function Achievements() {
  const earnedCount = achievements.filter((a) => a.earned).length;

  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Trophy size={28} />
        </div>
        <p className="font-display text-3xl font-bold">
          {earnedCount} / {achievements.length}
        </p>
        <p className="text-sm text-muted">Badges earned so far</p>
      </Card>

      <ChartCard title="All Badges" subtitle="Keep trading with discipline to unlock more">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center gap-2 rounded-xl p-6 text-center border ${
                a.earned
                  ? 'bg-accent/10 border-accent/30'
                  : 'bg-white/5 border-white/10 grayscale opacity-50'
              }`}
            >
              <span className="text-4xl">{a.icon}</span>
              <p className="font-display font-semibold">{a.title}</p>
              <p className="text-xs text-muted">{a.desc}</p>
              {!a.earned && (
                <span className="mt-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-muted">
                  Locked
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
