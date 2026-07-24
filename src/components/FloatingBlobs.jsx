export default function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-purple/30 blur-3xl animate-floatY" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-floatX" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-teal/25 blur-3xl animate-floatY" style={{ animationDelay: '2s' }} />
    </div>
  );
}
