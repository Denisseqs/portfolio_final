import React, { useState } from 'react';
import ProjectGalleryModal from './ProjectGalleryModal';
import RetroWindow from '../RetroWindow';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group"
      >
        <RetroWindow title={project.filename}>
          {/* Thumbnail — opens gallery on click */}
          <div
            onClick={() => setOpen(true)}
            className="aspect-video bg-retro-pink/30 border border-retro-blue/30 window-inset mb-3 flex items-center justify-center overflow-hidden cursor-pointer"
          >
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-retro-blue/40">
                <span className="text-4xl">{project.icon}</span>
                <span className="font-pixel text-xs">preview.png</span>
              </div>
            )}
          </div>

          {/* Project info */}
          <h3 className="font-pixel-heading text-[10px] md:text-xs text-retro-blue leading-relaxed">
            {project.title}
          </h3>
          <p className="font-pixel text-sm text-retro-blue/70 mt-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-pixel text-[11px] px-2 py-0.5 bg-retro-blue text-retro-white border border-retro-blue"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Type badge */}
          <div className="mt-3 flex items-center gap-2">
            <span className={`font-pixel text-[11px] px-2 py-0.5 border border-retro-blue ${
              project.type === 'motion'
                  ? 'bg-retro-pink text-retro-blue'
                 : project.type === 'zimjs'
                  ? 'bg-retro-blue/10 text-retro-blue'
                  : 'bg-retro-blue/30 text-retro-blue'
            }`}>
              {project.type === 'motion'
                ? '▶ Motion Graphics'
                : project.type === 'zimjs'
                ? '🎮 ZimJS Game'
                : '💻 Web App'}
            </span>
          </div>

          {/* Open gallery hint — also clickable */}
          <div
            onClick={() => setOpen(true)}
            className="mt-3 font-pixel text-[11px] text-retro-blue/40 group-hover:text-retro-blue transition-colors cursor-pointer"
          >
            🖼 Click to open gallery
          </div>
        </RetroWindow>
      </motion.div>

      {open && <ProjectGalleryModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
