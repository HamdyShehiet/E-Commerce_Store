import './assets/styles/App.css'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'
import Banar from './components/layouts/Banar'
import { Route, Routes } from 'react-router-dom'
import Account from './components/pages/Account'
import Contact from './components/pages/Contact'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import NotFound from './components/pages/NotFound'
import WishList from './components/pages/Wishlist'


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
        <Route path='/login' element={<LogIn />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/wishlist' element={<WishList />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
