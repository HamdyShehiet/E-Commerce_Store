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
   * And If the Same Product There I will Increase Quantity Else I Will Add One
   */
  const addToCart = (product) => {
    const existProduct = cart.find((item) => item.id === product.id);
    console.log(existProduct);
    if (existProduct) {
      const updatedCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(cart);
  };

  /**
   * Get Total Price For All Cart Products 
   */
  const totalPrice = ()=>{
    return cart.reduce((total, item)=> total + (item.price * item.quantity) ,0)
  }
  // const totalPrice = cart.reduce((total, item)=> total + (item.price * item.quantity) ,0)
  console.log(totalPrice().toFixed(2))


  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        displaySomeProducts,
        loading,
        error,
        cart,
        setCart,
        addToCart,
        totalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
