import { useState } from 'react';

/**
 * Custom hook for managing background state
 * Handles: background color, background type (solid/gradient)
 */
export const useBackground = () => {
  const [background, setBackground] = useState('#2196F3');
  const [backgroundType, setBackgroundType] = useState('Solid');

  const updateBackground = (newBackground) => {
    setBackground(prev => newBackground ?? prev);
  };

  const updateBackgroundType = (newType) => {
    setBackgroundType(prev => newType ?? prev);
  };

  return {
    background,
    setBackground,
    updateBackground,
    backgroundType,
    setBackgroundType,
    updateBackgroundType,
  };
};
