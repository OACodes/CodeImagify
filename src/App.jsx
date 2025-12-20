import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CodeDisplay from './components/CodeDisplay'
import Options from './components/Options'
import Title from './components/Title'

function App() {
  const [background, setBackground] = useState('#1e1e1e');
  const [language, setLanguage] = useState('JavaScript');

  const updateBackground = (newBackground) => {
    setBackground(newBackground);
  }

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return (
    <>
      <Navbar/>
      <div className={'w-full h-10 self-center mt-20 mb-10 text-base'}>
          <Title/>
      </div>
      <div className='flex'>
        <Options updateLanguage={ updateLanguage } updateBackground={updateBackground}/>
        <CodeDisplay getBackground={background}/>
        {/* const [background, setBackground] = useState('#1e1e1e'); Include in bg options*/}
      </div>
    </>
  )
}

export default App
