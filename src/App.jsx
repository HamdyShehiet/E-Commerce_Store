import "./assets/styles/App.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Banar from "./components/layouts/Banar";
import { Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account";
import Contact from "./components/pages/Contact";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import NotFound from "./components/pages/NotFound";
import WishList from "./components/pages/Wishlist";
import Products from "./components/pages/Products";
import CheckOut from "./components/pages/CheckOut";
import ProductDetails from "./components/pages/ProductDetails";
import ProductsProvider from "./components/utils/ProductsProvider";
import CategoriesProducts from "./components/pages/CategoryProducts";
import CategoriesProvider from "./components/utils/CategoriestProvider";
import UsersProvider from "./components/utils/UsersProvider";

function App() {
  return (
    <>
      <UsersProvider>
        <Banar />
        <ProductsProvider>
          <CategoriesProvider>
            <Header />
          </CategoriesProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/category/:categoryName" element={<CategoriesProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </ProductsProvider>
        <Footer />
      </UsersProvider>
    </>
  );
}

export default App;
