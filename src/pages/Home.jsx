import React, { useRef, useState } from 'react';
import RetroWindow from '../components/RetroWindow';
import { Play, Pause, Volume2, SkipBack, SkipForward, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [progress, setProgress] = useState(0);

  const formatTime = (secs) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(formatTime(v.currentTime));
    setProgress((v.currentTime / v.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(formatTime(v.duration));
  };

  const handleVolume = (e) => {
    if (videoRef.current) videoRef.current.volume = e.target.value;
  };

  const skipBack = () => {
    if (videoRef.current) videoRef.current.currentTime -= 10;
  };

  const skipForward = () => {
    if (videoRef.current) videoRef.current.currentTime += 10;
  };

  const handleProgressClick = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current) videoRef.current.requestFullscreen();
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8">
        <h1 className="font-pixel-heading text-retro-blue text-lg md:text-2xl leading-relaxed">
          DENISSE QUIJADA
        </h1>
        <p className="text-retro-blue mt-2 text-2xl font-normal leading-relaxed">
          ☆ Video Producer · Motion Designer · Creative ☆
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-3xl">

        <RetroWindow title="showreel.mp4">
          {/* Video */}
          <div className="border-2 border-retro-blue window-inset aspect-video overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              src="/videos/reel.mp4"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />
          </div>

          {/* Controls */}
          <div className="mt-3 bg-retro-pink/30 border border-retro-blue/30 p-2">
            {/* Clickable progress bar */}
            <div
              className="h-3 bg-retro-white border border-retro-blue/40 window-inset mb-2 relative cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="absolute left-0 top-0 bottom-0 bg-retro-blue/60 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button onClick={skipBack} className="p-1 pixel-btn bg-retro-pink border border-retro-blue">
                  <SkipBack className="w-3 h-3 text-retro-blue" />
                </button>
                <button onClick={togglePlay} className="p-1.5 pixel-btn bg-retro-blue border border-retro-blue">
                  {isPlaying
                    ? <Pause className="w-4 h-4 text-retro-white" />
                    : <Play className="w-4 h-4 text-retro-white" />
                  }
                </button>
                <button onClick={skipForward} className="p-1 pixel-btn bg-retro-pink border border-retro-blue">
                  <SkipForward className="w-3 h-3 text-retro-blue" />
                </button>
              </div>

              <span className="font-pixel text-xs text-retro-blue/60">
                {currentTime} / {duration}
              </span>

              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-retro-blue/60" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  defaultValue="0.75"
                  onChange={handleVolume}
                  className="w-16 h-2 accent-retro-blue cursor-pointer"
                />
                <button onClick={handleFullscreen} className="p-1 pixel-btn bg-retro-pink border border-retro-blue">
                  <Maximize className="w-3 h-3 text-retro-blue" />
                </button>
              </div>
            </div>
          </div>
        </RetroWindow>
      </motion.div>

      {/* Desktop icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-8 mt-10">
        {[
          // { label: 'Work' },
          // { label: 'About' },
          // { label: 'Resume' },
        ].map((item) => (
          <a
            key={item.label}
            href={`/${item.label}`}
            className="flex flex-col items-center gap-1 group cursor-pointer">
            <span className="font-pixel text-xs text-retro-blue bg-retro-pink/50 px-1 group-hover:bg-retro-blue group-hover:text-retro-white transition-colors">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
