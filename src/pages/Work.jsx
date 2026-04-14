import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/work/ProjectCard';

const projects = [
{
  id: 1,
  filename: 'kinetic_typography.mp4',
  title: 'KINETIC TYPOGRAPHY',
  description: 'Motion graphic animation exploring dynamic text movement and rhythm.',
  tags: ['Illustrator', 'After Effects'],
  type: 'motion',
  icon: '🎬',
  // Single thumbnail shown on the card
  thumbnail: '/work/butter.png',
  // Gallery shown inside the modal
  gallery: [
    { type: 'video', src: '/public/work/butter.mp4', caption: 'Lyrics from song Butter - BTS' },
  ]
},
{
  id: 2,
  filename: 'jamjar_app.mp4',
  title: 'JAMJAR APP',
  description: 'Animated motion graphic for the JamJar app. Audio recording app for musicians.',
  tags: ['Illustrator', 'After Effects'],
  type: 'motion',
  icon: '🎬',
  thumbnail: '/public/work/jamjar.png',
  gallery: [
    { type: 'video', src: '/public/work/jamjar.mp4', caption: 'Promo video for app JamJar' },
  ]
},
{
  id: 3,
  filename: 'zen_garden.html',
  title: 'ZEN GARDEN',
  description: 'Mental health aid and garden intaction built with ZimJS. Meditate and keep a beautiful garden :)',
  tags: ['ZimJS', 'Illustrator'],
  type: 'zimjs',
  icon: '🌿',
  thumbnail: '/public/work/zen_garden.png',
  gallery: [
    { type: 'video', src: '/public/work/zen_garden.mp4', caption: 'Meditation feature' },
    { type: 'image', src: '/public/work/zen_garden_draft.JPG', caption: 'Draft of the app :)' },
  ]
},
{
  id: 4,
  filename: 'jumping_monkey.html',
  title: 'JUMPING MONKEY GAME',
  description: 'Fun jumping monkey game with custom illustrated assets.',
  tags: ['ZimJS', 'Procreate'],
  type: 'zimjs',
  icon: '🐒',
  thumbnail: '/public/work/jungle_jim.png',
  gallery: [
    { type: 'video', src: '/public/work/jungle_jim.mp4', caption: 'Made for the Kids game assignemnt for Interactive Coding 1' },
  ]
},
{
  id: 5,
  filename: 'physics_game.html',
  title: 'PHYSICS GAME',
  description: 'Physics-based game with original sound design and visuals.',
  tags: ['ZimJS', 'Reaper', 'Photoshop'],
  type: 'zimjs',
  icon: '🎮',
  thumbnail: '/public/work/physics.jpg',
  gallery: [
    { type: 'video', src: '/public/work/physics.mp4', caption: 'who let the dogs out!? woof woof woof' },
  ]
},
{
  id: 6,
  filename: 'pet_med_app.html',
  title: 'PET MED APP',
  description: 'Pet passport for veterinaries and pet parents.',
  tags: ['HTML5', 'JavaScript', 'CSS', 'PHP', 'MySQL'],
  type: 'app',
  icon: '🐾',
  thumbnail: '/public/work/petMed.png',
  gallery: [
    { type: 'video', src: '/public/work/petMed.mp4', caption: 'PetMed walk around as pet parent and veterinarian' },
  ]
},
{
  id: 7,
  filename: 'travel_cat_app.html',
  title: 'TRAVEL CAT APP',
  description: 'Fun travel companion web app featuring a cat guide.',
  tags: ['HTML5', 'JavaScript', 'CSS'],
  type: 'app',
  icon: '✈️',
  thumbnail: '/public/work/travel_cat.png',
  gallery: [
    { type: 'image', src: '/public/work/travel_cat2.png', caption: 'Travel Cat landing page' },
    { type: 'video', src: '/public/work/travel_cat.mp4', caption: 'Travel Cat map' },
    { type: 'image', src: '/public/work/travel_cat3.png', caption: 'Shops in the map' },
    { type: 'image', src: '/public/work/travel_cat4.png', caption: 'Weather of the selected location' },
    { type: 'image', src: '/public/work/travel_cat5.png', caption: 'About page' },
    { type: 'image', src: '/public/work/travel_cat6.png', caption: 'Paris' },
    { type: 'image', src: '/public/work/travel_cat7.png', caption: 'Seoul' },
    { type: 'image', src: '/public/work/travel_cat8.png', caption: 'Toronto' },
  ]
},
{
  id: 8,
  filename: 'energy_drink_app.html',
  title: 'ENERGY DRINK APP',
  description: 'Interactive web app for an energy drink brand.',
  tags: ['HTML5', 'JavaScript', 'CSS'],
  type: 'app',
  icon: '⚡',
  thumbnail: '/public/work/energy_drink.png',
  gallery: [
    { type: 'video', src: '/public/work/energy_drink.mp4', caption: 'Energy drink website' },
  ]
}];


const filters = ['all', 'motion', 'zimjs', 'app'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ?
  projects :
  projects.filter((p) => p.type === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8">

        <h1 className="font-pixel-heading text-retro-blue text-lg md:text-xl leading-relaxed"> MY WORK

        </h1>
        <p className="font-pixel text-retro-blue/60 text-base mt-2">
          Video production, motion graphics & creative projects
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex gap-1 mb-8 bg-retro-pink/50 border-2 border-retro-blue p-1 w-fit">
        {filters.map((f) =>
        <button
          key={f}
          onClick={() => setActiveFilter(f)}
          className={`font-pixel text-sm px-4 py-1.5 border transition-all ${
          activeFilter === f ?
          'bg-retro-blue text-retro-white border-retro-blue' :
          'bg-retro-white text-retro-blue border-transparent hover:bg-retro-pink'}`
          }>

            {f === 'all' ? '🗂 All' : f === 'motion' ? '▶ Motion' : f === 'zimjs' ? '🌿 ZimJS' : '💻 Apps'}
          </button>
        )}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) =>
        <ProjectCard key={project.id} project={project} index={i} />
        )}
      </div>

      {/* Folder info bar */}
      <div className="mt-8 bg-retro-pink/40 border border-retro-blue/30 px-3 py-2 font-pixel text-xs text-retro-blue/60">
        {filtered.length} object(s) — {filtered.filter((p) => p.type === 'motion').length} motion, {filtered.filter((p) => p.type === 'zimjs').length} zimjs, {filtered.filter((p) => p.type === 'app').length} apps
      </div>
    </div>);

}