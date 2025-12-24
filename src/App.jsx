import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CodeDisplay from './components/CodeDisplay'
import Options from './components/Options'
import Title from './components/Title'


function App() {
  const [background, setBackground] = useState('#2196F3');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('hc-black');
  // const [availableThemes, setAvailableThemes] = useState([]);


  // useEffect(() => {
  //     const themeNames = Object.keys(monacoThemes.default || monacoThemes);
  //     setAvailableThemes(themeNames);
  //     console.log(themeNames);
  // }, []);



  const update = (newBackground, newLanguage, newTheme) => {
    setBackground(newBackground);
    setLanguage(newLanguage);
    setTheme(newTheme);
  }

  return (
    <>
      <Navbar/>
      <div className={'w-full h-10 self-center mt-20 mb-10 text-base'}>
          <Title/>
      </div>
      <div className='flex'>
        <Options updateLanguage={ update } updateBackground={ update } updateTheme={ update } />
        <CodeDisplay getBackground={ background } getLanguage={ language } getTheme={ theme } />
      </div>
    </>
  )
}

export default App
