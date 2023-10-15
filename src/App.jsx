import { useEffect } from 'react'
import './App.css'
import { Header } from './components/Header';


function App() {

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
