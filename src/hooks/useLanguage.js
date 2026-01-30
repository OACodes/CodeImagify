import { useState } from 'react';
import { fileExtensionsDetailed } from '../utils/languageConfig';

/**
 * Custom hook for managing language selection and file type
 * Handles: language, fileType, language switching logic
 */
export const useLanguage = (snippets = {}) => {
  const [language, setLanguage] = useState('javascript');
  const [fileType, setFileType] = useState('.js');

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setFileType(fileExtensionsDetailed[newLanguage]?.[0] || '.js');
  };

  return {
    language,
    setLanguage,
    fileType,
    setFileType,
    updateLanguage,
  };
};
