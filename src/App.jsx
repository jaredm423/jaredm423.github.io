import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gitHubLogo from './assets/github-mark.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JAREDM423.GITHUB.IO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
      <h2>Powered by:</h2>
      <h2>Vite + React</h2>
      <div>
        <a href="https://github.com/jaredm423.github.io" target="_blank">
          <img src={gitHubLogo} className="logo" alt="Github logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Github to see my repo and click on the Vite and React logos to learn more about the templates!
      </p>
      </div>
    </>
  )
}

export default App
