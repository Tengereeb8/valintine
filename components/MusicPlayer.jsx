"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <audio 
        ref={audioRef} 
        src="/tulgaa.mp3" 
        loop 
      />
      
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-cream/20 backdrop-blur-md px-4 py-2 rounded-full border border-cream/30 flex items-center gap-2"
          >
            <span className="text-cream text-sm font-medium">Romantic Piano</span>
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-cream animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-cream/50" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors border-2 ${
          isPlaying ? "bg-red-accent border-red-accent shadow-red-accent/50" : "bg-cream/10 border-cream/30"
        }`}
      >
        <Music className={`w-6 h-6 ${isPlaying ? "text-cream" : "text-cream/70"}`} />
        
        {isPlaying && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-red-accent/30"
          />
        )}
      </motion.button>
    </div>
  );
}
