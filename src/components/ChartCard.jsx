import Card from './Card';

export default function ChartCard({ title, subtitle, action, children, className }) {
  return (
    <Card className={className} hover={false}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}
