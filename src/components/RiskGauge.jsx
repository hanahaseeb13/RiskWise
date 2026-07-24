import { motion } from 'framer-motion';

export default function RiskGauge({ score = 50, size = 200 }) {
  const radius = size / 2 - 14;
  const circumference = Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, score));
  const offset = circumference - (clamped / 100) * circumference;

  const color = clamped > 70 ? '#FF6B6B' : clamped > 40 ? '#FFD084' : '#48C6B6';

  return (
    <div className="relative flex flex-col items-center" style={{ width: size }}>
      <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
        <path
          d={`M 14 ${size / 2 + 10} A ${radius} ${radius} 0 0 1 ${size - 14} ${size / 2 + 10}`}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <motion.path
          d={`M 14 ${size / 2 + 10} A ${radius} ${radius} 0 0 1 ${size - 14} ${size / 2 + 10}`}
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute top-1/2 flex flex-col items-center">
        <span className="font-display text-4xl font-bold">{clamped}</span>
        <span className="text-xs uppercase tracking-wide text-muted">Risk Score</span>
      </div>
    </div>
  );
}
