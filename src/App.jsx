import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { tg, user, onTogleButton } = useTelegram();

  // if (!Boolean(user)) {
  //   return <div className="use_telegram">Используйте телеграмм для входа!</div>
  // }

  useEffect(() => {
    tg?.ready();
  }, []);

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
