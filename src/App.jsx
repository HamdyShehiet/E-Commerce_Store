import './assets/styles/App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'
import Banar from './components/layouts/Banar'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'

function App() {

  return (
    <>
      <Banar/>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
