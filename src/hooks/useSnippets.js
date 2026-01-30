import { useState, useEffect } from 'react';

/**
 * Custom hook for managing code snippets and loading state
 * Fetches snippets from JSON file on mount
 */
export const useSnippets = () => {
  const [snippets, setSnippets] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch('/src/data/languageSnippets.json');
        const data = await response.json();
        setSnippets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading snippets:', error);
        setLoading(false);
      }
    };

    fetchSnippets();
  }, []);

  return { snippets, loading };
};
