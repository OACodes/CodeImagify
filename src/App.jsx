import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CodeDisplay from './components/CodeDisplay'
import Options from './components/Options'
import Title from './components/Title'

function App() {
  // Shared state 
  //  - Options: Sets background
  //  - CodeDisplay
  const [background, setBackground] = useState('#1e1e1e');

  return (
    <>
      <Navbar/>
      <div className={'w-full h-10 self-center mt-15 text-base'}>
          <Title/>
      </div>
      <div className='flex'>
        <Options bg={setBackground}/>
        <CodeDisplay background={background}/>
        {/* const [background, setBackground] = useState('#1e1e1e'); Include in bg options*/} 
      </div>
    </>
  )
}

export default App
