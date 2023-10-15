import { useEffect } from 'react';
import './App.css'
import { Header } from './components/Header';

const tg = window.Telegram.WebApp;

function App() {

  if (Boolean(tg.initDataUnsafe)) {
    return <div className="use_telegram">Используйте телеграмм для входа!</div>
  }

  return (
    <>
      <Header />
    </>
  )
}

export default App;
