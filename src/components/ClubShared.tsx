import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CountdownTimer = ({ targetDate = '2025-03-15T09:00:00' }: { targetDate?: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 mt-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-12 h-12 glass-panel flex items-center justify-center font-bebas text-xl text-primary rounded-lg border-primary/20">
            {Math.max(0, value)}
          </div>
          <span className="text-[8px] tracking-widest uppercase text-foreground/40 mt-1 font-bold">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export const FadeUp = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingCube = ({ position, rotationSpeed = 1, color = "hsl(var(--primary))" }: { position: string, rotationSpeed?: number, color?: string }) => {
  return (
    <motion.div
      className={cn("absolute w-12 h-12 preserve-3d pointer-events-none", position)}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 10 / rotationSpeed,
        repeat: Infinity,
        ease: "linear",
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {[0, 90, 180, 270, 'x90', 'x-90'].map((rot, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-sm"
          style={{
            transform: typeof rot === 'string' 
              ? `rotateX(${rot.substring(1)}deg) translateZ(24px)` 
              : `rotateY(${rot}deg) translateZ(24px)`,
            backgroundColor: i % 2 === 0 ? color.replace('1)', '0.1)') : 'rgba(191,13,0,0.1)'
          }}
        />
      ))}
    </motion.div>
  );
};

export const HexPrism = () => {
  return (
    <div className="relative w-16 h-16 preserve-3d group-hover:rotate-y-180 transition-transform duration-1000 ease-in-out">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-primary/40 bg-white/5"
          style={{
            transform: `rotateY(${i * 60}deg) translateZ(32px)`,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
            height: '64px',
            width: '32px',
            left: '16px'
          }}
        />
      ))}
    </div>
  );
};
