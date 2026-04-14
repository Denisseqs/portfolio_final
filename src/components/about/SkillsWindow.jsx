import React from 'react';
import RetroWindow from '../RetroWindow';

const skills = [
  { name: 'Premiere Pro', level: 90 },
  { name: 'After Effects', level: 90 },
  { name: 'Photoshop', level: 85 },
  { name: 'Illustrator', level: 85 },
  { name: 'Figma', level: 80 },
  { name: 'Lightroom', level: 75 },
  { name: 'Blender', level: 70 },
];

export default function SkillsWindow() {
  return (
    <RetroWindow title="skills_set.ai">
      <div className="mb-3 font-pixel text-xs text-retro-blue/50">
        Copying 99,909 items from Desktop to Brain_cell
      </div>
      <div className="space-y-2.5">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-0.5">
              <span className="font-pixel text-xs text-retro-blue">{skill.name}</span>
              <span className="font-pixel text-[10px] text-retro-blue/50">{skill.level}%</span>
            </div>
            <div className="h-4 bg-retro-white border border-retro-blue/40 window-inset relative">
              <div
                className="absolute left-0 top-0 bottom-0 bg-retro-blue/70"
                style={{ width: `${skill.level}%` }}
              />
              {/* Pixel segments */}
              <div className="absolute inset-0 flex">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 border-r border-retro-white/30" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 font-pixel text-xs text-retro-blue/70 border-t border-retro-blue/20 pt-3">
        <span className="font-pixel-heading text-[8px]">SOFT SKILLS:</span>
        <div className="mt-1">✦ Creativity Thinking &nbsp; ✦ Attention to Details &nbsp; ✦ Open to Criticism</div>
      </div>
    </RetroWindow>
  );
}