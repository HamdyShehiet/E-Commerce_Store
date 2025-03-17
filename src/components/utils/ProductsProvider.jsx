import { useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";

function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState({});
  const { products = [] } = allProducts;
  const displaySomeProducts = products.slice(0, 10);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
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
   * Get the Stored Cart From LocalStorage
   */
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

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
    setCart(cart.filter(item=>item.id !== product.id))
    console.log("I am Deleted",product);
  };


  return <ProductsContext.Provider value={{ displaySomeProducts, allProducts, loading, error, cart, addToCart, deleteProductFromCart }}>{children}</ProductsContext.Provider>;
}

export default ProductsProvider;
