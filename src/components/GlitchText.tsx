import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  return (
    <span
      className={cn("glitch-text font-cinzel text-glow-gold", className)}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
