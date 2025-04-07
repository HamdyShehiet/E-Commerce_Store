import React from "react";
import UsersProvider from "./UsersProvider";
import ProductsProvider from "./ProductsProvider";
import CategoriesProvider from "./CategoriestProvider";

const AppProviders = ({ children }) => {
  return (
    <UsersProvider>
      <CategoriesProvider>
        <ProductsProvider>
          {children}
        </ProductsProvider>
      </CategoriesProvider>
    </UsersProvider>
  );
};

export default AppProviders;
