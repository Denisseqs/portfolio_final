import React from 'react';
import { motion } from 'framer-motion';
import PersonWindow from '../components/about/PersonWindow';
import SkillsWindow from '../components/about/SkillsWindow';
import InterestsWindow from '../components/about/InterestsWindow';
import RetroWindow from '../components/RetroWindow';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8">

        <h1 className="font-pixel-heading text-retro-blue text-lg md:text-xl leading-relaxed">ABOUT ME

        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile picture window */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}>

          <RetroWindow title="profile.jpg">
            <div className="aspect-square bg-retro-pink/30 border border-retro-blue/30 window-inset flex items-center justify-center">
              <div className="text-center">
                 <img src="/images/profile.jpg" alt="Denisse" className="w-full h-full object-cover" />

                
              </div>
            </div>
          </RetroWindow>
        </motion.div>

        {/* Person info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}>

          <PersonWindow />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>

          <SkillsWindow />
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>

          <InterestsWindow />
        </motion.div>

        {/* Languages window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2">

          <RetroWindow title="languages.ttf">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
              { lang: 'Spanish', level: 'Native', bar: 100 },
              { lang: 'English', level: 'Fluent', bar: 95 },
              { lang: 'French', level: 'Learning', bar: 40 }].
              map((l) =>
              <div key={l.lang} className="bg-retro-pink/20 border border-retro-blue/20 p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-pixel text-sm text-retro-blue font-bold">{l.lang}</span>
                    <span className="font-pixel text-[11px] text-retro-blue/50">{l.level}</span>
                  </div>
                  <div className="h-3 bg-retro-white border border-retro-blue/30 window-inset">
                    <div className="h-full bg-retro-blue/60" style={{ width: `${l.bar}%` }} />
                  </div>
                </div>
              )}
            </div>
          </RetroWindow>
        </motion.div>
      </div>
    </div>);

}