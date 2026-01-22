import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CodeDisplay from './components/CodeDisplay'
import Options from './components/Options'
import Title from './components/Title'


function App() {
  const [background, setBackground] = useState('#2196F3');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [fileType, setFileType] = useState('.js');
  const [fileName, setFileName] = useState('hello_world');
  const [headerBackground, setHeaderBackground] = useState('#1e1e1e');
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

  const updateFileName = (currentFileName) => {
    setFileName(prev => currentFileName ?? prev);
  }

  const updateBackground = (newBackground) => {
    setBackground(prev => newBackground ?? prev);
  }

  const updateLanguage = (newLanguage) => {
    setLanguage(prev => newLanguage ?? prev);
    setFileType(fileExtensionsDetailed[newLanguage][0]);
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

  // Todo Jan 10: Refer to Claude and write out all the constants for the default code to their respective languages

  return (
    <>
      <Navbar />
      <div className={'w-full h-10 self-center mt-20 mb-10 text-base'}>
        <Title />
      </div>
      <div className='flex flex-col'>
        <CodeDisplay getBackground={background} getLanguage={language} getTheme={theme} headerBackground={headerBackground} fileType={fileType} fileName={fileName} />
      </div>
      <div className='flex flex-col'>
        <Options updateBackground={updateBackground} updateLanguage={updateLanguage} updateTheme={updateTheme} updateFileName={updateFileName} />
      </div>
    </>
  )
}

export default App
