import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageLayout() {
  const [locale, setLocale] = useState(localStorage.getItem("i18nextLng") || "en");
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
      <Banner locale={locale} changeLanguage={changeLanguage} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default PageLayout;
