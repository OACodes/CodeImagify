import { useState } from 'react';

/**
 * Custom hook for managing editor state
 * Handles: code, fileName, export image state
 */
export const useEditor = () => {
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('hello_world');
  const [ExportImg, setExportImg] = useState(false);

  const updateFileName = (currentFileName) => {
    setFileName(prev => currentFileName ?? prev);
  };

  const updateCode = (newCode) => {
    setCode(newCode);
  };

  const updateExportImg = (newExportImg) => {
    setExportImg(prev => newExportImg ?? prev);
  };

  const resetExportImage = () => {
    setExportImg(false);
  };

  return {
    code,
    setCode,
    fileName,
    updateFileName,
    updateCode,
    ExportImg,
    updateExportImg,
    resetExportImage,
  };
};
