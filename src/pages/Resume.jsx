import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import RetroWindow from '../components/RetroWindow';
import ExperienceSection from '../components/resume/ExperienceSection';
import EducationSection from '../components/resume/EducationSection';

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8">
        <h1 className="font-pixel-heading text-retro-blue text-lg md:text-xl leading-relaxed">
          RESUME
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}>
          <ExperienceSection />
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}>
          <EducationSection />
        </motion.div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <RetroWindow title="tools.exe">
            <div className="grid grid-cols-2 gap-2">
              {[
                'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects',
                'Lightroom', 'Figma', 'Blender', 'HubSpot',
                'WordPress', 'Canva', 'Pro Tools', 'Reaper',
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 bg-retro-pink/20 border border-retro-blue/20 p-2">
                  <span className="w-2 h-2 bg-retro-blue shrink-0" />
                  <span className="font-pixel text-xs text-retro-blue">{tool}</span>
                </div>
              ))}
            </div>
          </RetroWindow>
        </motion.div>

        {/* Hire Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <RetroWindow title="hire_me.exe">
            <div className="flex flex-col items-center py-6 gap-4">
              <p className="font-pixel-heading text-[10px] text-retro-blue text-center leading-relaxed">
                HIRE ME?
              </p>
              <p className="font-pixel text-sm text-retro-blue/60 text-center">
                I'm open to freelance work, creative collaborations, and new opportunities!
              </p>
              <div className="flex gap-3 mt-2 flex-wrap justify-center">
                {/* Email button */}
                <a
                  href="mailto:denisse.solangeq@gmail.com"
                  className="font-pixel text-sm px-6 py-2 bg-retro-blue text-retro-white border-2 border-retro-blue pixel-btn hover:bg-retro-blue/90 transition-colors">
                  ✦ Yes
                </a>

                {/* Download resume */}
                <a
                  href="/resume.pdf"
                  download="Denisse_Quijada_Resume.pdf"
                  className="flex items-center gap-2 font-pixel text-sm px-4 py-2 bg-retro-pink text-retro-blue border-2 border-retro-blue pixel-btn hover:bg-retro-pink/80 transition-colors">
                  <Download className="w-3 h-3" />
                  resume.pdf
                </a>
              </div>
            </div>
          </RetroWindow>
        </motion.div>
      </div>
    </div>
  );
}
