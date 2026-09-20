import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle warm white / off-white base */}
      <div className="absolute inset-0 bg-[#FBFBFD]" />

      {/* Subtle decorative mesh / ambient light blobs */}
      <div
        className="animate-blob-1 absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 235, 220, 0.55) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      <div
        className="animate-blob-2 absolute top-1/3 -right-40 h-[650px] w-[650px] rounded-full blur-[125px]"
        style={{
          background:
            'radial-gradient(circle, rgba(235, 238, 245, 0.7) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      <div
        className="animate-blob-3 absolute -bottom-32 left-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 240, 230, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Very subtle floating translucent glass geometry in background */}
      <motion.div
        className="absolute top-28 left-[12%] h-48 w-48 rounded-3xl border border-white/60 bg-white/10 backdrop-blur-[2px] shadow-sm hidden md:block"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[10%] h-64 w-64 rounded-full border border-white/50 bg-white/10 backdrop-blur-[2px] shadow-sm hidden lg:block"
        animate={{
          y: [0, 24, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
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
