export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle warm luxury base */}
      <div className="absolute inset-0 bg-[#FBFBFD]" />

      {/* Lightweight hardware-accelerated ambient warm lighting (Zero scroll jank) */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(245, 235, 220, 0.6) 0%, transparent 45%),
            radial-gradient(circle at 90% 35%, rgba(235, 238, 245, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 35% 85%, rgba(245, 240, 230, 0.5) 0%, transparent 45%)
          `,
        }}
      />

      {/* Subtle fine dot matrix texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(#1a1a1a 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
