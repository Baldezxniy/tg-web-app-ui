import { useEffect, useState } from 'react'
import './App.css'

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  
  const onClose = () => {
    tg.close();
  }

  return (
    <>
      hello world

      <button onClick={onClose}>
        Close App
      </button>
    </>
  )
}

export default App
