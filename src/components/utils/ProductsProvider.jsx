import { useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";

function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState({});
  const { products = [] } = allProducts;
  const displaySomeProducts = products.slice(0, 10);
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletedItem, setDeletedItem] = useState(null);

  /**
   * Get Data
   */
  async function getProducts() {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      if (response.status !== 200) {
        throw new Error("Response Error");
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      setError("Error");
      console.error("Error", error);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  /**
   * Get the Stored Data From LocalStorage and save as Initial Value when we Rerender The Component
   */

  /**
   * Set Products In LocalStorage
   */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Add Product To Cart When I Click On The Button
   */
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  /**
   * Delete Product from the Cart When I Click On The Button
   */
  const deleteProductFromCart = (product) => {
    setDeletedItem(product);
    console.log("Deleted Item", deletedItem);
    setCart(cart.filter((item) => item.id !== product.id));
    console.log("I am Deleted", product);
  };

  /**
   * Undo Delete Product from the Cart When I Click On The Button
   */
  const undoDeleteItem = () => {
    if (deletedItem) {
      setCart([...cart, deletedItem]);
      setDeletedItem(null);
    }
  };

  /**
   * Delete All Products from the Cart When I Click On The Button
   */
  const deleteAllProductsFromCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.scrollTo(0, 0);
  };

  return (
    <ProductsContext.Provider value={{ displaySomeProducts, allProducts, loading, error, cart, deletedItem, addToCart, deleteProductFromCart, deleteAllProductsFromCart, undoDeleteItem }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
