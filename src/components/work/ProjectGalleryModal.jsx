import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectGalleryModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const media = project.gallery || [];

  const prev = () => setCurrent(i => (i - 1 + media.length) % media.length);
  const next = () => setCurrent(i => (i + 1) % media.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-retro-blue/80 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-3xl bg-retro-white border-2 border-retro-blue window-outset"
        >
          {/* Title bar */}
          <div className="bg-retro-blue px-3 py-1.5 flex items-center justify-between">
            <span className="font-pixel text-retro-white text-sm truncate pr-2">
              {project.filename} — gallery
            </span>
            <button
              onClick={onClose}
              className="w-5 h-5 bg-retro-pink border border-retro-blue flex items-center justify-center pixel-btn shrink-0"
            >
              <X className="w-3 h-3 text-retro-blue" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Project info */}
            <div className="mb-4">
              <h2 className="font-pixel-heading text-[10px] md:text-xs text-retro-blue leading-relaxed">
                {project.title}
              </h2>
              <p className="font-pixel text-sm text-retro-blue/70 mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-pixel text-[11px] px-2 py-0.5 bg-retro-blue text-retro-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {media.length > 0 ? (
              <>
                {/* Main viewer */}
                <div className="bg-black border-2 border-retro-blue window-inset aspect-video flex items-center justify-center relative overflow-hidden">
                  {media[current].type === 'video' ? (
                    <video
                      key={media[current].src}
                      src={media[current].src}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={media[current].src}
                      alt={media[current].caption || project.title}
                      className="w-full h-full object-contain"
                    />
                  )}

                  {/* Nav arrows */}
                  {media.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-retro-pink/90 border-2 border-retro-blue flex items-center justify-center pixel-btn"
                      >
                        <ChevronLeft className="w-4 h-4 text-retro-blue" />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-retro-pink/90 border-2 border-retro-blue flex items-center justify-center pixel-btn"
                      >
                        <ChevronRight className="w-4 h-4 text-retro-blue" />
                      </button>
                    </>
                  )}
                </div>

                {/* Caption */}
                {media[current].caption && (
                  <p className="font-pixel text-xs text-retro-blue/60 mt-2 text-center">
                    {media[current].caption}
                  </p>
                )}

                {/* Thumbnails */}
                {media.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {media.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`shrink-0 w-16 h-12 border-2 overflow-hidden ${
                          i === current ? 'border-retro-blue' : 'border-retro-blue/30 opacity-60'
                        }`}
                      >
                        {item.type === 'video' ? (
                          <div className="w-full h-full bg-retro-blue/10 flex items-center justify-center">
                            <span className="text-lg">▶</span>
                          </div>
                        ) : (
                          <img src={item.src} alt="" className="w-full h-full object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Counter */}
                <div className="mt-2 font-pixel text-xs text-retro-blue/50 text-right">
                  {current + 1} / {media.length}
                </div>
              </>
            ) : (
              <div className="aspect-video bg-retro-pink/20 border-2 border-retro-blue/30 window-inset flex flex-col items-center justify-center gap-3 text-retro-blue/40">
                <span className="text-5xl">{project.icon}</span>
                <p className="font-pixel text-xs">No media yet — add gallery items to this project!</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}