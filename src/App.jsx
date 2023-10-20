import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Form } from './components/Form/Form.jsx';
import { Header } from './components/Header/Header.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { tg, user} = useTelegram();

  if (!user) {
    return <div className="use_telegram">Используйте телеграмм для входа!</div>
  }

    // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    tg?.ready();
  }, [tg]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={ProductList} />
        <Route path="/form" Component={Form} />
      </Routes>
    </>
  )
}

export default App;
