import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Leftpanel from './components/Leftpanel'
import TopPanel from './components/Toppanel'

function App() {

  return(
    <>
     <Header />
     <div className='top-panel'>
     <TopPanel type={"genres"}/>
     <TopPanel type={"languages"}/>
     </div>
     <Leftpanel />

    </>
   
  )
  
}

export default App
