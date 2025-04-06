import { Outlet } from "react-router-dom";
import Banar from "./Banar";
import Footer from "./Footer";
import Header from "./Header";
import CategoriesProvider from "../providers/CategoriestProvider";

function PageLayout() {
  return (
    <>
      <Banar />
      <CategoriesProvider>
        <Header />
      </CategoriesProvider>
      <Outlet />
      <Footer />
    </>
  );
}
export default PageLayout;
