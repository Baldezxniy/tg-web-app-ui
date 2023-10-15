import { useEffect } from 'react';
import './App.css'
import { Header } from './components/Header';
import { useTelegram } from './hooks/useTelegram';

const tg = window.Telegram.WebApp;

function App() {

  const { tg, user } = useTelegram();

  if (!Boolean(user)) {
    return <div className="use_telegram">Используйте телеграмм для входа!</div>
  }

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App;
