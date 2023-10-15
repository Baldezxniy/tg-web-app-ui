import { useEffect, useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { tg, user, onTogleButton } = useTelegram();

  if (!Boolean(user)) {
    return <div className="use_telegram">Используйте телеграмм для входа!</div>
  }

  useEffect(() => {
    tg.ready();
  }, []);

  const [isShow, setShow] = useState();
  const onShowChange = () => {
    setShow(!isShow);
    onTogleButton();
  }

  return (
    <>
      <Header />
      <button onClick={onShowChange}>
        {isShow ? "Скрыть" : "Показать"}
      </button>
    </>
  )
}

export default App;
