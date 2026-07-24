export const riskScore = 68;

export const behaviorTags = [
  { label: 'FOMO Detected', tone: 'orange' },
  { label: 'Overconfidence Rising', tone: 'danger' },
];

export const shapFactors = [
  { label: 'Trade freq.', value: 82 },
  { label: 'Leverage \u0394', value: 61 },
  { label: 'Consec. losses', value: 38 },
  { label: 'Position sizing', value: 54 },
];

export const behaviorTimeline = [
  { day: 'Mon', score: 32 }, { day: 'Tue', score: 41 }, { day: 'Wed', score: 55 },
  { day: 'Thu', score: 47 }, { day: 'Fri', score: 68 }, { day: 'Sat', score: 60 },
  { day: 'Sun', score: 44 },
];

export const riskTrend = [
  { month: 'Jan', risk: 40 }, { month: 'Feb', risk: 52 }, { month: 'Mar', risk: 48 },
  { month: 'Apr', risk: 63 }, { month: 'May', risk: 58 }, { month: 'Jun', risk: 68 },
];

export const portfolioGrowth = [
  { month: 'Jan', value: 380000 }, { month: 'Feb', value: 392000 }, { month: 'Mar', value: 401000 },
  { month: 'Apr', value: 388000 }, { month: 'May', value: 421000 }, { month: 'Jun', value: 448760 },
];

export const tradingFrequency = [
  { day: 'Mon', trades: 4 }, { day: 'Tue', trades: 7 }, { day: 'Wed', trades: 3 },
  { day: 'Thu', trades: 9 }, { day: 'Fri', trades: 12 }, { day: 'Sat', trades: 1 }, { day: 'Sun', trades: 0 },
];

export const behaviorRadar = [
  { trait: 'FOMO', value: 78 },
  { trait: 'Loss Aversion', value: 55 },
  { trait: 'Overconfidence', value: 64 },
  { trait: 'Discipline', value: 42 },
  { trait: 'Patience', value: 38 },
];

export const allocationPie = [
  { name: 'IT', value: 34 },
  { name: 'Banking', value: 28 },
  { name: 'Energy', value: 18 },
  { name: 'FMCG', value: 12 },
  { name: 'Infra', value: 8 },
];

export const achievements = [
  { id: 1, icon: '🥇', title: 'First Trade', desc: 'Executed your first order', earned: true },
  { id: 2, icon: '🥉', title: 'Five Disciplined Trades', desc: 'No impulsive exits for 5 trades', earned: true },
  { id: 3, icon: '🛡️', title: 'Risk Guardian', desc: 'Kept risk score under 40 for a week', earned: false },
  { id: 4, icon: '🔥', title: '10 Day Streak', desc: 'Logged in and reviewed insights 10 days straight', earned: true },
  { id: 5, icon: '🧠', title: 'Bias Breaker', desc: 'Acknowledged 3 AI interventions', earned: false },
];

export const journeyTimeline = [
  { date: 'Jun 2', event: 'Joined RiskWise', tone: 'teal' },
  { date: 'Jun 9', event: 'First FOMO warning acknowledged', tone: 'orange' },
  { date: 'Jun 18', event: 'Behavioral Health Score crossed 70', tone: 'accent' },
  { date: 'Jul 3', event: 'Unlocked "Five Disciplined Trades"', tone: 'purple' },
  { date: 'Jul 20', event: 'Longest disciplined streak: 9 days', tone: 'teal' },
];
