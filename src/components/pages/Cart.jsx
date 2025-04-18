import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";

function Cart() {
  const { cart, setCart, totalPrice } = useContext(ProductsContext);
  const [deletedItem, setDeletedItem] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

  /**
   * Increase The Quantity Of The Product
   */
  function increase(product){
    console.log(product);
    const IncreaseQuantity = cart.map((item) =>
    ( item.id === product.id && item.quantity < product.stock )
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(IncreaseQuantity);
  }
  /**
   * Decrease The Quantity Of The Product
   */
  function decrease(product){
    console.log(product);
    const decreaseQuantity = cart.map((item) =>{
      if(item.id !== product.id || item.quantity === 1){
        return item
      }
      if(item.id === product.id){
        return { ...item, quantity: item.quantity - 1 }
      }
    });
    setCart(decreaseQuantity);
  }
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-7">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">Cart</span>
          </div>
          <div className="w-full mt-7 bg-white shadow-md rounded overflow-auto whitespace-nowrap srcrollbar-h scrollbar-track .scrollbar-thumb">
            <table className="w-full table-auto text-left">
              <thead className="font-[poppins] text-sm font-normal text-[--primaryTwo-clr]">
                <tr className="border-b border-[--border-clr] bg-[--secondaryTwo-clr] shadow-sm">
                  <th className="px-3 py-6">Product Name</th>
                  <th className="px-3 py-6">Date</th>
                  <th className="px-3 py-6">Price</th>
                  <th className="px-3 py-6">Quantity</th>
                  <th className="px-3 py-6">Total</th>
                  <th className="px-3 py-6"></th>
                </tr>
              </thead>
              <tbody className="font-[poppins]">
                {cart?.map((item) => {
                  return (
                    <tr key={item.id} className="text-sm shadow-sm text-black hover:bg-slate-50">
                      <td className="flex items-center gap-2  px-3 py-6">
                        <img src={item.thumbnail} className="max-w-[70px]" alt="title" />
                        <span className="font-semibold">{item.title}</span>
                      </td>
                      <td className="px-3 py-6">{new Date().toLocaleDateString()}</td>
                      <td className="px-3 py-6 font-medium">${item.price}</td>
                      <td className="px-3 py-6">
                        <div className="w-[9rem]">
                          <div className="relative">
                            <button
                            onClick={()=>decrease(item)}
                              className="absolute right-9 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 "
                              type="button"
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <input
                              type="number"
                              readOnly
                              value={item.quantity}
                              className="w-full bg-transparent placeholder:text-slate-400 text-[--primaryTwo-clr] text-sm border border-slate-200 rounded-md pl-1 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm appearance-none text-center"
                            />
                            <button
                              onClick={()=>increase(item)}
                              className="absolute right-1 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 "
                              type="button"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-6 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="px-4 py-6">
                        <button onClick={() => deleteProductFromCart(item)} className="flex items-center gap-1 font-semibold text-[--secondaryThree-clr]">
                          <i className="fa-solid fa-trash"></i>
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex items-center flex-wrap justify-between gap-3 font-[poppins]">
            <Link to="/" className="py-3 px-7 border-[1px] border-[--border-clr] border-solid rounded text-base font-medium text-black">Return To Shop</Link>
            <button className="flex items-center gap-2 py-3 px-7 border-[1px] border-[--border-clr] border-solid rounded text-base font-medium text-black">
              <i className="fa-solid fa-pen-to-square"></i>
              <span>Update Cart</span>
            </button>
            {cart.length > 0 && (
              <button
                onClick={() => deleteAllProductsFromCart()}
                className="flex items-center gap-2 py-3 px-7  rounded text-base font-medium bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr]"
              >
                <i className="fa-solid fa-trash"></i>
                <span>Delete All</span>
              </button>
            )}
            {deletedItem && (
              <button onClick={() => undoDeleteItem()} className="py-3 px-7 border-[1px] border-[--border-clr] border-solid rounded text-base font-medium text-black">
                Undo Delete
              </button>
            )}
          </div>
          <div className="flex  items-start justify-center gap-y-6 lg:justify-between max-lg:flex-wrap-reverse mt-7 font-[poppins]">
            <div className="flex items-center gap-4 flex-wrap">
              <input type="text" placeholder="Coupon Code" className="py-3 px-4 font-medium rounded outline-none border-[--border-clr] border-[1px] bg-transparent" />
              <button className="py-3 px-8 rounded text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">Apply Coupon</button>
            </div>
            <div className="flex flex-col gap-6 max-w-[28rem] w-full p-5 border-[1px] border-[--border-clr] border-solid rounded">
              <span className="font-medium text-xl text-black">Cart Total</span>
              <ul className="flex flex-col gap-5 font-normal text-base text-black">
                <li className="inline-flex items-center justify-between pb-4 border-[--border-clr] border-b-[1px]">
                  <span>Subtotal</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </li>
                <li className="inline-flex items-center justify-between pb-4 border-[--border-clr] border-b-[1px]">
                  <span>Shipping</span>
                  <span>Free</span>
                </li>
                <li className="inline-flex items-center justify-between">
                  <span>Total</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </li>
              </ul>
              <Link to="/checkout" className="self-center py-4 px-12 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
