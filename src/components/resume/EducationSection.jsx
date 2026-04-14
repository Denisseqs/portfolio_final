import React from 'react';
import RetroWindow from '../RetroWindow';

const education = [
  {
    school: 'SHERIDAN COLLEGE',
    degree: 'Post Graduate Certificate, Interactive Media Management',
    period: 'Sep 2025 — Present',
  },
  {
    school: 'SHERIDAN COLLEGE',
    degree: 'Post Graduate Certificate, Creative Industries Management',
    period: 'Sep 2024 — Apr 2025',
  },
  {
    school: 'PUCP, LIMA, PERU',
    degree: 'Bachelor of Audiovisual Communications',
    period: 'Graduated Jul 2022',
    award: '🏆 1st place Best Audiovisual Product - Premios Comunica 2018',
  },
];

export default function EducationSection() {
  return (
    <RetroWindow title="education.enl">
      <div className="space-y-4">
        {education.map((edu, i) => (
          <div key={i} className={`${i > 0 ? 'border-t border-retro-blue/20 pt-4' : ''}`}>
            <span className="font-pixel text-[11px] text-retro-blue/50 bg-retro-pink/30 px-2 py-0.5">
              {edu.period}
            </span>
            <h3 className="font-pixel-heading text-[9px] md:text-[10px] text-retro-blue mt-2 leading-relaxed">
              {edu.degree}
            </h3>
            <p className="font-pixel text-sm text-retro-blue/70 mt-0.5">{edu.school}</p>
            {edu.award && (
              <p className="font-pixel text-xs text-retro-blue/60 mt-1">{edu.award}</p>
            )}
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}