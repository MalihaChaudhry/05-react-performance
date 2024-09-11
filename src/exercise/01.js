// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import {lazy, Suspense, useState} from 'react'

function loadGlobe() {
  return import('../globe')
}
const Globe = lazy(loadGlobe)

function App() {
  const [showGlobe, setShowGlobe] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        for="checkbox"
        onMouseEnter={loadGlobe}
        onFocus={loadGlobe}
        style={{marginBottom: '1rem'}}
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <Suspense fallback={<div>Globe is loading...</div>}>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </Suspense>
    </div>
  )
}

export default App
