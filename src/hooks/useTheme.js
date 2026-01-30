import { useState } from 'react';

/**
 * Custom hook for managing theme state
 * Handles: editor theme, header background color based on theme
 */
export const useTheme = () => {
  const [theme, setTheme] = useState('vs-dark');
  const [headerBackground, setHeaderBackground] = useState('#1e1e1e');

  const updateTheme = (newTheme) => {
    setTheme(prev => newTheme ?? prev);
    
    if (newTheme === 'vs-dark') {
      setHeaderBackground('#1e1e1e');
    } else if (newTheme === 'vs') {
      setHeaderBackground('#FFFFFF');
    } else {
      setHeaderBackground(prev => prev);
    }
  };

  return {
    theme,
    setTheme,
    headerBackground,
    setHeaderBackground,
    updateTheme,
  };
};
