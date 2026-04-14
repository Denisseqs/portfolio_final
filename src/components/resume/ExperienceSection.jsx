import React from 'react';
import RetroWindow from '../RetroWindow';

const experiences = [
  {
    company: 'BAKING BREAD MEDIA',
    role: 'Video Production Coordinator',
    period: 'Dec 2025 — Present',
    description: 'Create and customize video templates for financial education content. Design motion graphics for videos and web platforms. Conduct quality checks on video and website updates.',
  },
  {
    company: 'HUB CLIMBING',
    role: 'Front Desk & Gym Staff',
    period: 'Feb 2025 — May 2025',
    description: 'Greeted members, managed bookings, promoted programs. Fostered welcoming space for diverse climbing community.',
  },
  {
    company: 'GIC MARKETING AGENCY',
    role: 'Video Editor/Producer Intern',
    period: 'May 2022 — Nov 2022',
    description: 'Directed and edited bi-weekly branded content. Created motion graphics and supported social media content calendars.',
  },
  {
    company: 'DONNER SKI RANCH',
    role: 'Ski/Snowboard Instructor',
    period: 'Dec 2019 — Mar 2020',
    description: 'Coached individuals of all ages in skiing and snowboarding. Led lesson planning and safety operations.',
  },
  {
    company: 'HUELLITAS PUCP (Volunteer)',
    role: 'Graphic Designer',
    period: 'Jul 2022 — Dec 2022',
    description: 'Created graphics for social media supporting animal welfare campaigns. Led visual identity projects.',
  },
  {
    company: 'ACTIVIZA (Volunteer)',
    role: 'Audiovisual Editor',
    period: 'Jul 2021 — Dec 2021',
    description: 'Designed graphics and edited videos on youth mental health. Earned recognition from Ministry of Public Health.',
  },
];

export default function ExperienceSection() {
  return (
    <RetroWindow title="experiences.pdf">
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className={`${i > 0 ? 'border-t border-retro-blue/20 pt-4' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="font-pixel-heading text-[9px] md:text-[10px] text-retro-blue leading-relaxed">
                {exp.company}
              </h3>
              <span className="font-pixel text-[11px] text-retro-blue/50 bg-retro-pink/30 px-2 py-0.5 w-fit">
                {exp.period}
              </span>
            </div>
            <p className="font-pixel text-sm text-retro-blue/80">{exp.role}</p>
            <p className="font-pixel text-xs text-retro-blue/50 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}