import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/Products";

function WishList() {
  const { displaySomeProducts, loading, error, addToCart } = useContext(ProductsContext);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center justify-between font-[poppins]">
            <div className="text-xl font-normal text-black">
              <span>Wishlist</span>
              <span>(4)</span>
            </div>
            <button className="py-3 px-10 border-[1px] border-[--border-clr] border-solid rounded text-base font-medium text-black">Move All To Bag</button>
          </div>
          <div className="row mx-auto w-full grid grid-cols-[repeat(auto-fit,min(18.125rem,_100%))] justify-center gap-8 font-[poppins]">
            <div className="col flex flex-col gap-3">
              <div className="relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">50%</span>
                <button className="absolute z-[2] top-3 right-3 w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="flex items-center justify-center gap-2 absolute z-[10] bottom-[0] right-0 w-full py-3 text-base font-medium bg-black text-white">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Add To Cart</span>
                </button>
                <div>
                  <img src="/images/product1.png" alt={` Image`} />
                </div>
              </div>
              <span className="text-base font-medium text-black">hello everybody</span>
              <div className="flex items-center gap-4 text-base font-medium">
                <span className="text-[--secondaryThree-clr]">$150</span>
                <del className="text-[--textTwo-clr]">$120</del>
              </div>
            </div>
            <div className="col flex flex-col gap-3">
              <div className="relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">50%</span>
                <button className="absolute z-[2] top-3 right-3 w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="flex items-center justify-center gap-2 absolute z-[10] bottom-[0] right-0 w-full py-3 text-base font-medium bg-black text-white">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Add To Cart</span>
                </button>
                <div>
                  <img src="/images/product1.png" alt={` Image`} />
                </div>
              </div>
              <span className="text-base font-medium text-black">hello everybody</span>
              <div className="flex items-center gap-4 text-base font-medium">
                <span className="text-[--secondaryThree-clr]">$150</span>
                <del className="text-[--textTwo-clr]">$120</del>
              </div>
            </div>
            <div className="col flex flex-col gap-3">
              <div className="relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">50%</span>
                <button className="absolute z-[2] top-3 right-3 w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="flex items-center justify-center gap-2 absolute z-[10] bottom-[0] right-0 w-full py-3 text-base font-medium bg-black text-white">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Add To Cart</span>
                </button>
                <div>
                  <img src="/images/product1.png" alt={` Image`} />
                </div>
              </div>
              <span className="text-base font-medium text-black">hello everybody</span>
              <div className="flex items-center gap-4 text-base font-medium">
                <span className="text-[--secondaryThree-clr]">$150</span>
                <del className="text-[--textTwo-clr]">$120</del>
              </div>
            </div>
            <div className="col flex flex-col gap-3">
              <div className="relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">50%</span>
                <button className="absolute z-[2] top-3 right-3 w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="flex items-center justify-center gap-2 absolute z-[10] bottom-[0] right-0 w-full py-3 text-base font-medium bg-black text-white">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Add To Cart</span>
                </button>
                <div>
                  <img src="/images/product1.png" alt={` Image`} />
                </div>
              </div>
              <span className="text-base font-medium text-black">hello everybody</span>
              <div className="flex items-center gap-4 text-base font-medium">
                <span className="text-[--secondaryThree-clr]">$150</span>
                <del className="text-[--textTwo-clr]">$120</del>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center justify-between font-[poppins]">
            <span className="relative pl-7 font-semibold text-base text-[--secondaryThree-clr] before:absolute before:content-[''] before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-5 before:h-10 before:rounded before:bg-[--secondaryThree-clr]">
              Just For You
            </span>
            <Link to="/products" className="py-3 px-10 border-[1px] border-[--border-clr] border-solid rounded text-xl font-normal text-black">
              See All
            </Link>
          </div>
          <div className="row flex w-full items-start gap-8 pb-6 px-1 overflow-x-scroll whitespace-nowrap srcrollbar-h scrollbar-thumb scrollbar-track font-[poppins]">
            {loading
              ? ""
              : error
              ? "Error"
              : displaySomeProducts?.map((product) => {
                  return (
                    <div key={product.id} className="col min-w-[18.125rem]  flex flex-col gap-3">
                      <div className="relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                        <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">{product.discountPercentage}%</span>
                        <button className="absolute z-[2] top-3 right-3 w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]">
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button onClick={()=>addToCart(product)} className="flex items-center justify-center gap-2 absolute z-[10] bottom-[0] right-0 w-full py-3 text-base font-medium bg-black text-white">
                          <i className="fa-solid fa-cart-shopping"></i>
                          <span>Add To Cart</span>
                        </button>{" "}
                        <Link to={`/product/${product.id}`}>
                          <img src={product.thumbnail} alt="Product Image" />
                        </Link>
                      </div>
                      <Link to={`/product/${product.id}`} className="text-base font-medium text-black">
                        {product.title}
                      </Link>
                      <div className="flex items-center gap-4 text-base font-medium">
                        <span className="text-[--secondaryThree-clr]">${product.price}</span>
                        <del className="text-[--textTwo-clr]">${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}</del>
                      </div>
                      <div className="flex items-center gap-4 font-medium text-base">
                        <ul className="flex items-center gap-2">
                          <li>
                            <i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i>
                          </li>
                        </ul>
                        <span className="text-[--textTwo-clr]">({product.rating})</span>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
}
export default WishList;
