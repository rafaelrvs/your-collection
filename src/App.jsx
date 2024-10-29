import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Page/Login/Login'
import Header from './Components/Header/Header'
import Cadastrar from './Page/Cadastrar/Cadastrar'


function App() {
  return (
  <div className="App">

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Cadastrar" element={<Cadastrar/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
