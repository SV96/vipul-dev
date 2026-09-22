import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/theme-context';
import { UI_STRINGS } from '../constants/portfolioConstants';

export default function ThemeControls() {
  const { mode, toggleMode, paletteId, setPaletteId, COLOR_PALETTES } = useTheme();
  const [showPaletteMenu, setShowPaletteMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPaletteMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-1.5 shrink-0" ref={dropdownRef}>
      
      {/* Day / Night Toggle Button */}
      <button
        onClick={toggleMode}
        className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center justify-center shrink-0"
        title={mode === 'dark' ? UI_STRINGS.dayModeLabel : UI_STRINGS.nightModeLabel}
        aria-label="Toggle Day/Night Mode"
      >
        {mode === 'dark' ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-500" />
        )}
      </button>

      {/* Palette Selector Button */}
      <div className="relative shrink-0">
        <button
          onClick={() => setShowPaletteMenu(!showPaletteMenu)}
          className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center justify-center shrink-0"
          title={UI_STRINGS.paletteTitle}
          aria-label="Choose Color Theme Palette"
        >
          <Palette className="w-4 h-4 theme-accent-color" />
        </button>

        {/* Dropdown Menu */}
        {showPaletteMenu && (
          <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel border shadow-2xl p-2 z-50 anim-drop">
            <div className="text-[11px] font-mono uppercase theme-text-muted px-3 py-1.5 border-b border-slate-200 dark:border-slate-800">
              {UI_STRINGS.paletteTitle}
            </div>
            <div className="space-y-1 mt-1">
              {COLOR_PALETTES.map((palette) => {
                const isSelected = paletteId === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => {
                      setPaletteId(palette.id);
                      setShowPaletteMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      isSelected
                        ? 'bg-slate-200 dark:bg-slate-800 theme-text-heading font-bold'
                        : 'theme-text-muted hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-sm shrink-0"
                        style={{ backgroundColor: palette.primary }}
                      ></span>
                      <span>{palette.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 theme-accent-color" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
