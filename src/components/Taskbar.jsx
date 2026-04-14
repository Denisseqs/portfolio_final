import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, FileText, Mail, Menu, X } from 'lucide-react';

const navItems = [
{ path: '/Home', label: 'reel.mp4', icon: Home },
{ path: '/Work', label: 'work.folder', icon: Briefcase },
{ path: '/About', label: 'about.txt', icon: User },
{ path: '/Resume', label: 'resume.pdf', icon: FileText },
{ path: '/Contact', label: 'contact.txt', icon: Mail }];


export default function Taskbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop taskbar - bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-retro-pink border-t-2 border-retro-blue hidden md:block">
        <div className="flex items-center h-10 px-2">
          {/* Start button */}
          


          <div className="w-px h-6 bg-retro-blue/30 mr-2" />
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-1 mr-1 font-pixel text-sm border transition-all ${
                isActive ?
                'bg-retro-white border-retro-blue text-retro-blue window-inset' :
                'bg-retro-pink border-transparent text-retro-blue/70 hover:bg-retro-white/50 hover:border-retro-blue/30'}`
                }>

                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{item.label}</span>
              </Link>);

          })}
          <div className="flex-1" />
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-retro-blue text-retro-white p-2 border-2 border-retro-blue pixel-btn">

        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="fixed inset-0 z-40 bg-retro-pink/95 md:hidden flex flex-col items-center justify-center gap-4">
          {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-6 py-3 font-pixel text-lg border-2 w-64 ${
              isActive ?
              'bg-retro-white border-retro-blue text-retro-blue window-inset' :
              'bg-retro-pink border-retro-blue text-retro-blue pixel-btn'}`
              }>

                <Icon className="w-5 h-5" />
                {item.label}
              </Link>);

        })}
        </div>
      }
    </>);

}