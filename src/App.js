import './App.css';
import { Route, Routes } from "react-router-dom"
import { Header } from './components/Header'
import { Home } from './components/Home'
import { PageNotFound } from "./components/PageNotFound"
import { useState } from 'react';

function App() {

  const [colour, setColour] = useState('display-red')

  return (
    <div className="App">
      <Header colour={colour}/>
      <Routes>
        <Route path="/" element={<Home colour={colour} setColour={setColour}/>} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  )
}

export default App;
