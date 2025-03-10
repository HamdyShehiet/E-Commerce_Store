import './assets/styles/App.css'
import Home from './components/pages/Home'
import Banar from './components/layouts/Banar'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Banar/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
