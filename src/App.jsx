import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CodeDisplay from './components/CodeDisplay'
import Options from './components/Options'
import Title from './components/Title'


function App() {
  const [background, setBackground] = useState('#2196F3');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [theme, setTheme] = useState('vs-dark');
  const [fileType, setFileType] = useState('.js');
  const [fileName, setFileName] = useState('hello_world');
  const [headerBackground, setHeaderBackground] = useState('#1e1e1e');
  const [snippets, setSnippets] = useState({});
  const [loading, setLoading] = useState(true);
  const [fileExtensionsDetailed] = useState({
    javascript: ['.js', '.jsx', '.mjs', '.cjs'],
    typescript: ['.ts', '.tsx'],
    html: ['.html', '.htm'],
    css: ['.css', '.scss', '.sass', '.less'],
    java: ['.java'],
    cpp: ['.cpp', '.cc', '.cxx', '.hpp', '.h'],
    csharp: ['.cs'],
    ruby: ['.rb'],
    python: ['.py', '.pyw'],
    go: ['.go'],
    php: ['.php'],
    rust: ['.rs'],
    sql: ['.sql'],
    json: ['.json', '.jsonc'],
    markdown: ['.md', '.markdown'],
    bash: ['.sh', '.bash'],
    yaml: ['.yaml', '.yml'],
  });

  // Fetch snippets from JSON on component mount
  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch('/src/data/languageSnippets.json');
        const data = await response.json();
        setSnippets(data);
        // Set initial code to JavaScript snippet
        if (data.javascript) {
          setCode(data.javascript.snippet);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading snippets:', error);
        setLoading(false);
      }
    };

    fetchSnippets();
  }, []);

  const updateFileName = (currentFileName) => {
    setFileName(prev => currentFileName ?? prev);
  }

  const updateBackground = (newBackground) => {
    setBackground(prev => newBackground ?? prev);
  }

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setFileType(fileExtensionsDetailed[newLanguage][0]);
    // Update code with the snippet for the selected language
    if (snippets[newLanguage]) {
      setCode(snippets[newLanguage].snippet);
    }
  }

  const updateTheme = (newTheme) => {
    setTheme(prev => newTheme ?? prev);
    if (newTheme === 'vs-dark') {
      setHeaderBackground('#1e1e1e');
    }
    else if (newTheme === 'vs') {
      setHeaderBackground('#FFFFFF');
    }
    else {
      setHeaderBackground(prev);
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-lg">Loading snippets...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={'w-full h-10 self-center mt-20 mb-10 text-base'}>
        <Title />
      </div>
      <div className='flex flex-col'>
        <CodeDisplay getBackground={background} getLanguage={language} getTheme={theme} headerBackground={headerBackground} fileType={fileType} fileName={fileName} code={code} updateCode={setCode} />
      </div>
      <div className='flex flex-col'>
        <Options updateBackground={updateBackground} updateLanguage={updateLanguage} updateTheme={updateTheme} updateFileName={updateFileName} />
      </div>
    </>
  )
}

export default App
