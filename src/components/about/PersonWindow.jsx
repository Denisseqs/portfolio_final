import React from 'react';
import RetroWindow from '../RetroWindow';
import { MapPin, Globe, Mail } from 'lucide-react';

export default function PersonWindow() {
  return (
    <RetroWindow title="person.txt">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-retro-blue" />
          <span className="font-pixel text-sm text-retro-blue">Oakville, ON</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-retro-blue" />
          <span className="font-pixel text-sm text-retro-blue">behance.net/denissequijada</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-retro-blue" />
          <span className="font-pixel text-sm text-retro-blue">denisse.solangeq@gmail.com</span>
        </div>
        <div className="border-t border-retro-blue/20 pt-3">
          <p className="font-pixel text-sm text-retro-blue/80 leading-relaxed">
            Creative and driven communications professional with a postgraduate 
            certificate in Creative Industries Management and a background in 
            video production, graphic design, and digital marketing. Bilingual 
            in English and Spanish, with ongoing French studies.
          </p>
        </div>
      </div>
    </RetroWindow>
  );
}