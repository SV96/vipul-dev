import React from 'react';
import { UI_STRINGS, TECH_WALL_TILES } from '../constants/portfolioConstants';

function WallRow({ tiles, reverse = false }) {
  const track = [...tiles, ...tiles];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {track.map((tile, idx) => (
          <span
            key={`${tile}-${idx}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass-panel font-mono text-sm theme-text-main whitespace-nowrap cursor-default hover:theme-accent-color transition-colors"
          >
            <span className="theme-accent-color select-none">//</span>
            {tile}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechWall() {
  const half = Math.ceil(TECH_WALL_TILES.length / 2);
  const rowOne = TECH_WALL_TILES.slice(0, half);
  const rowTwo = TECH_WALL_TILES.slice(half);

  return (
    <section id="stack" className="py-16 theme-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="font-mono text-xs theme-accent-color mb-3">{UI_STRINGS.techWall.kicker}</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold theme-text-heading tracking-tight mb-2">
            {UI_STRINGS.techWall.title}
          </h2>
          <p className="text-sm theme-text-muted font-mono">{UI_STRINGS.techWall.sub}</p>
        </div>
      </div>

      <div className="relative space-y-3">
        <WallRow tiles={rowOne} />
        <WallRow tiles={rowTwo} reverse />

        {/* Edge fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32"
          style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32"
          style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }}
        />
      </div>
    </section>
  );
}
