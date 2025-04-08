import "./assets/styles/App.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import LogIn from "./components/auth/LogIn";
import About from "./components/pages/About";
import SignUp from "./components/auth/SignUp";
import { Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import WishList from "./components/pages/Wishlist";
import Products from "./components/pages/Products";
import CheckOut from "./components/pages/CheckOut";
import PageLayout from "./components/layouts/PageLayout";
import ProductDetails from "./components/pages/ProductDetails";
import AppProviders from "./components/providers/AppProviders";
import CategoriesProducts from "./components/pages/CategoryProducts";

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/category/:categoryName" element={<CategoriesProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
