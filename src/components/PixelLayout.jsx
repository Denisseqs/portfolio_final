import React from 'react';
import { Outlet } from 'react-router-dom';
import Taskbar from './Taskbar';

export default function PixelLayout() {
  return (
    <div className="min-h-screen bg-background pixel-grid">
      <main className="pb-14 md:pb-12">
        <Outlet />
      </main>
      <Taskbar />
    </div>
  );
}