import React from 'react';
import RetroWindow from '../RetroWindow';

const interests = [
  { icon: '🎬', label: 'Video Production' },
  { icon: '🎨', label: 'Graphic Design' },
  { icon: '📸', label: 'Photography' },
  { icon: '⛷️', label: 'Skiing' },
  { icon: '🐾', label: 'Animal Welfare' },
  { icon: '🌎', label: 'Travel' },
];

export default function InterestsWindow() {
  return (
    <RetroWindow title="interests.raw">
      <div className="grid grid-cols-3 gap-3">
        {interests.map(item => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 p-3 bg-retro-pink/20 border border-retro-blue/20 hover:bg-retro-pink/50 transition-colors cursor-default"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-pixel text-[11px] text-retro-blue text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}