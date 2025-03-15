import { useState } from 'react'
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
import Products from './components/pages/Products'
import ProductDetails from './components/pages/ProductDetails'
import CategoriesProducts from './components/pages/CategoryProducts'
import { SharedData } from './context/SharedData'

function App() {
  
  return (
    <>
    <SharedData.Provider value={{}}>
      <Banar/>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/category/:categoryName' element={<CategoriesProducts />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/wishlist' element={<WishList />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer/>
      </SharedData.Provider>
    </>
  )
}

export default App
