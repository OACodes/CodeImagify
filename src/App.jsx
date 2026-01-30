import { useEffect } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import CodeDisplay from './features/editor/components/CodeDisplay'
import Options from './components/Options'
import Title from './features/language/components/Title'
import Loader from './features/common/Loader'
import { useSnippets } from './hooks/useSnippets'
import { useEditor } from './hooks/useEditor'
import { useLanguage } from './hooks/useLanguage'
import { useBackground } from './hooks/useBackground'
import { useTheme } from './hooks/useTheme'

function App() {
  const { snippets, loading } = useSnippets();
  const { code, setCode, fileName, updateFileName, updateCode, ExportImg, updateExportImg, resetExportImage } = useEditor();
  const { language, fileType, updateLanguage } = useLanguage(snippets);
  const { background, updateBackground, backgroundType, updateBackgroundType } = useBackground();
  const { theme, headerBackground, updateTheme } = useTheme();

  // Set initial code when snippets load
  useEffect(() => {
    if (snippets.javascript && !code) {
      setCode(snippets.javascript.snippet);
    }
  }, [snippets, code, setCode]);

  // Update code when language changes
  useEffect(() => {
    if (snippets[language]) {
      setCode(snippets[language].snippet);
    }
  }, [language, snippets, setCode]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className={'w-full h-10 self-center mt-20 mb-10 text-base'}>
        <Title />
      </div>
      <div className='flex flex-col'>
        <CodeDisplay
          getBackground={background}
          getLanguage={language}
          getTheme={theme}
          headerBackground={headerBackground}
          fileType={fileType}
          fileName={fileName}
          code={code}
          updateCode={updateCode}
          ExportImage={ExportImg}
          resetExportImage={resetExportImage}
        />
      </div>
      <div className='flex flex-col'>
        <Options
          updateBackground={updateBackground}
          updateLanguage={updateLanguage}
          updateTheme={updateTheme}
          updateFileName={updateFileName}
          updateExportImg={updateExportImg}
          updateBackgroundType={updateBackgroundType}
          backgroundType={backgroundType}
        />
      </div>
    </>
  )
}

export default App
