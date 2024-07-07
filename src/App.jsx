import React from 'react'
import Background from './componets/Background'
import Foreground from './componets/Foreground'
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
     <div className='w-full h-screen bg-zinc-900   '>
    
    <Analytics/>
      <Background/>  
     <Foreground/>  
    </div>
   
   
   
  )
}

export default App  