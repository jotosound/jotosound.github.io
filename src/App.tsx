import { useState } from 'react'
import jLogo from '/j_logo.svg'
import './App.css'
import { motion } from 'framer-motion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-800">
      <motion.div
        animate={{
          scale: [0, 2, 2, 1, 0.5],
          rotate: [0, 0, 270, 270, 0],
          // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <a href='/' target="_blank">
          <img src={jLogo} className="logo flex h-screen justify-center items-center" alt="logo" />
        </a>
        
      </motion.div>
      <h1>Howdy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>src/App.tsx</code> 
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App
