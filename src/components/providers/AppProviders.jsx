import React from "react";
import UsersProvider from "./UsersProvider";
import ProductsProvider from "./ProductsProvider";

const AppProviders = ({ children }) => {
  return (
    <UsersProvider>
      <ProductsProvider>
          {children}
      </ProductsProvider>
    </UsersProvider>
  );
};

export default AppProviders;