import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Router, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Login';

function App() {

  const [riotId, setRiotId] = useState('Draxxxoo');
  const [riotTag, setRiotTag] = useState('4005');


  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={riotId ? <Dashboard riotId={riotId} riotTag={riotTag}/> : <Login setRiotId={setRiotId} setRiotTag={setRiotTag}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
