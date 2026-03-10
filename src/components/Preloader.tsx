import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  videoUrl: string;
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ videoUrl, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fallback in case video doesn't play or takes too long
    const timer = setTimeout(() => {
      handleComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Wait for fade out animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain"
              onEnded={handleComplete}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={handleComplete}
              className="absolute bottom-8 right-8 text-primary font-bebas tracking-widest text-lg border border-primary/30 px-6 py-2 rounded-full hover:bg-primary hover:text-black transition-all"
            >
              SKIP INTRO
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
