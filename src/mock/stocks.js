export const stocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2934.15, change: 1.24, sector: 'Energy' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 4102.60, change: -0.48, sector: 'IT' },
  { symbol: 'INFY', name: 'Infosys', price: 1847.30, change: 0.86, sector: 'IT' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1678.90, change: 0.32, sector: 'Banking' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1256.45, change: -0.15, sector: 'Banking' },
  { symbol: 'SBIN', name: 'State Bank of India', price: 832.70, change: 2.11, sector: 'Banking' },
  { symbol: 'ITC', name: 'ITC Limited', price: 468.20, change: 0.54, sector: 'FMCG' },
  { symbol: 'WIPRO', name: 'Wipro Limited', price: 542.85, change: -1.02, sector: 'IT' },
  { symbol: 'LT', name: 'Larsen & Toubro', price: 3721.55, change: 1.78, sector: 'Infra' },
];

export const watchlist = ['RELIANCE', 'TCS', 'INFY', 'SBIN'];

export const generateCandles = (base = 100, points = 30) => {
  let value = base;
  const out = [];
  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.48) * base * 0.02;
    out.push({ day: i + 1, price: Number(value.toFixed(2)) });
  }
  return out;
};

export const recentTrades = [
  { id: 1, symbol: 'RELIANCE', type: 'BUY', qty: 10, price: 2910.00, time: '10:24 AM' },
  { id: 2, symbol: 'TCS', type: 'SELL', qty: 4, price: 4118.20, time: '11:02 AM' },
  { id: 3, symbol: 'SBIN', type: 'BUY', qty: 25, price: 828.10, time: '12:41 PM' },
  { id: 4, symbol: 'INFY', type: 'BUY', qty: 12, price: 1839.00, time: '1:15 PM' },
  { id: 5, symbol: 'WIPRO', type: 'SELL', qty: 30, price: 548.60, time: '2:03 PM' },
];

export const portfolio = {
  cash: 84200,
  invested: 412500,
  currentValue: 448760,
  dayChange: 2.4,
  holdings: [
    { symbol: 'RELIANCE', qty: 40, avg: 2810.0, ltp: 2934.15 },
    { symbol: 'TCS', qty: 15, avg: 4050.0, ltp: 4102.6 },
    { symbol: 'INFY', qty: 22, avg: 1790.0, ltp: 1847.3 },
    { symbol: 'SBIN', qty: 60, avg: 790.0, ltp: 832.7 },
  ],
};
