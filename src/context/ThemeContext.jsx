import React, { createContext, useContext, useState, useEffect } from 'react';
import { COLOR_PALETTES } from '../constants/portfolioConstants';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('portfolio_theme_mode') || 'dark';
  });

  const [paletteId, setPaletteId] = useState(() => {
    return localStorage.getItem('portfolio_accent_palette') || 'cyan';
  });

  const activePalette = COLOR_PALETTES.find(p => p.id === paletteId) || COLOR_PALETTES[0];

  useEffect(() => {
    const root = document.documentElement;
    
    // Day vs Night Mode Class & Data Attribute
    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-mode', mode);
    localStorage.setItem('portfolio_theme_mode', mode);

    // Accent Palette Data Attribute
    root.setAttribute('data-theme', paletteId);
    localStorage.setItem('portfolio_accent_palette', paletteId);
  }, [mode, paletteId]);

  const toggleMode = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode, paletteId, setPaletteId, activePalette, COLOR_PALETTES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
