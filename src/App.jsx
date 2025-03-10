import './assets/styles/App.css'
import Home from './components/pages/Home'
import Banar from './components/layouts/Banar'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound'

function App() {

  return (
    <>
      <Banar/>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
