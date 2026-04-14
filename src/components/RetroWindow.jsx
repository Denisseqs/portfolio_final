import React, { useState } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';

export default function RetroWindow({
  title,
  children,
  className = '',
  contentClassName = '',
  defaultOpen = true,
}) {
  // 'open', 'minimized', 'closed'
  const [state, setState] = useState('open');
  const [maximized, setMaximized] = useState(false);

  const restore = () => setState('open');

  // Collapsed bar (minimized or closed)
  if (state === 'minimized' || state === 'closed') {
    return (
      <div
        className="border-2 border-retro-blue bg-retro-blue cursor-pointer select-none"
        onClick={restore}
        title="Click to restore"
      >
        <div className="flex items-center justify-between px-2 py-1">
          <span className="text-retro-white font-pixel text-sm truncate pr-2">
            {state === 'closed' ? '🗙 ' : '_ '}{title}
          </span>
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={(e) => { e.stopPropagation(); restore(); }}
              className="w-5 h-5 bg-retro-pink border border-retro-blue flex items-center justify-center pixel-btn"
              title="Restore"
            >
              <Square className="w-3 h-3 text-retro-blue" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Full window
  return (
    <div
      className={`border-2 border-retro-blue bg-retro-white window-outset transition-all
        ${maximized ? 'fixed inset-4 z-40 flex flex-col overflow-auto' : ''}
        ${className}`}
    >
      {/* Title bar */}
      <div className="bg-retro-blue px-2 py-1 flex items-center justify-between shrink-0">
        <span className="text-retro-white font-pixel text-sm truncate pr-2">{title}</span>
        <div className="flex items-center gap-0.5 shrink-0">
          {/* Minimize */}
          <button
            onClick={() => setState('minimized')}
            className="w-5 h-5 bg-retro-pink border border-retro-blue flex items-center justify-center pixel-btn"
            title="Minimize"
          >
            <Minus className="w-3 h-3 text-retro-blue" />
          </button>

          {/* Maximize / restore */}
          <button
            onClick={() => setMaximized((m) => !m)}
            className="w-5 h-5 bg-retro-pink border border-retro-blue flex items-center justify-center pixel-btn"
            title={maximized ? 'Restore' : 'Maximize'}
          >
            {maximized
              ? <Maximize2 className="w-3 h-3 text-retro-blue" />
              : <Square className="w-3 h-3 text-retro-blue" />}
          </button>

          {/* Close */}
          <button
            onClick={() => { setState('closed'); setMaximized(false); }}
            className="w-5 h-5 bg-retro-pink border border-retro-blue flex items-center justify-center pixel-btn"
            title="Close"
          >
            <X className="w-3 h-3 text-retro-blue" />
          </button>
        </div>
      </div>

      {/* Address bar */}
      <div className="bg-retro-pink/40 border-b border-retro-blue/30 px-2 py-0.5 flex gap-4 shrink-0">
        <span className="text-xs font-pixel text-retro-blue/70">☆</span>
        <span className="text-xs font-pixel text-retro-blue/50">▸</span>
        <div className="flex-1 mx-2 bg-retro-white border border-retro-blue/30 px-2 text-xs font-pixel text-retro-blue/50 truncate">
          ~/portfolio/{title}
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${maximized ? 'flex-1 overflow-auto' : ''} ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
