import Banar from "./Banar";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CategoriesProvider from "../providers/CategoriestProvider";

function PageLayout() {
  const [locale, setLocale] = useState(localStorage.getItem("i18nextLng"));
  const { i18n } = useTranslation();

  /**
   * Change Language
   */
  const changeLanguage = (lang) => {
    if (lang === "en") {
      setLocale("en");
      i18n.changeLanguage("en");
    } else if (lang === "ar") {
      setLocale("ar");
      i18n.changeLanguage("ar");
    }
  };

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <Banar locale={locale} changeLanguage={changeLanguage} />
      <CategoriesProvider>
        <Header />
      </CategoriesProvider>
      <Outlet />
      <Footer />
    </div>
  );
}
export default PageLayout;
