import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedItem from "../utils/RelatedItem";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);

  const { title, description, price, rating, availabilityStatus, stock, images = [], thumbnail, colours, sizes } = product || {};

  async function getProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.status !== 200) {
        throw new Error("Response Error");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError("Error");
      console.error("Error", error);
    } finally {
      setLoading(false);
      setCount(1);
      window.scrollTo(0, 0);
    }
  }
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Not Found</p>
      ) : (
        <section className="py-20">
          <div className="container grid items-strech justify-center  xl:grid-cols-[60%,_28rem] xl:justify-between gap-y-10 mx-auto ">
            <div className="flex  md:items-stretch justify-center xl:justify-start flex-col-reverse md:flex-row gap-9">
              <div className="product-slides flex justify-center md:flex-col md:justify-start flex-wrap gap-4 ">
                {images &&
                  images.length > 0 &&
                  images?.map((image, index) => {
                    return (
                      <div key={index} className="max-w-[9rem] w-full inline-flex justify-center items-center p-4 rounded bg-[--secondaryTwo-clr]">
                        <img src={image} alt={title} />
                      </div>
                    );
                  })}
              </div>
              {thumbnail && (
                <div className="xl:max-w-[30rem] w-full inline-flex items-center justify-center p-9 rounded bg-[--secondaryTwo-clr]">
                  <img src={thumbnail} alt={title} />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6 xl:gap-3">
              <div className="flex flex-col gap-2 pb-4 border-b-[1px] border-[--textTwo-clr] border-solid">
                <span className="font-[inter] text-2xl font-semibold text-black">{title ?? "Not Found"}</span>
                <div className="flex items-center gap-3 font-[poppins]">
                  <ul className="flex items-center gap-2 text-sm">
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
                  <span className="text-[--textTwo-clr]">({rating || "Not Found"} Rating)</span>
                  <span className="pl-3 text-sm font-normal text-[--secondaryFive-clr] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[1px] before:h-[20px] before:bg-[--textTwo-clr]">
                    {availabilityStatus}
                  </span>
                </div>
                <span className="font-[inter] text-2xl font-normal text-black">${price || "Not Found"}</span>
                <p className="max-w-[42rem] w-full font-[poppins] text-base font-normal text-black">{description || "Not Found"} </p>
              </div>
              <div className="flex flex-col gap-5 pt-4">
                {colours && (
                  <div className="flex items-center gap-4">
                    <span className="font-[inter] text-xl font-normal text-black">Colours :</span>
                    <ul className="flex items-center gap-3">
                      <li className="w-[20px] h-[20px] outline border-[#ffffff] border-solid border-[3px] rounded-[50%] bg-[#A0BCE0] cursor-pointer"></li>
                      <li className="w-[20px] h-[20px]  rounded-[50%] bg-[#9c1616]  cursor-pointer"></li>
                    </ul>
                  </div>
                )}
                {sizes && (
                  <div className="flex items-center gap-4">
                    <span className="font-[inter] text-xl font-normal text-black">Size :</span>
                    <ul className="flex flex-wrap items-center gap-3 font-[poppins]">
                      <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">
                        XS
                      </li>
                      <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">
                        S
                      </li>
                      <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">
                        M
                      </li>
                      <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">
                        L
                      </li>
                      <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">
                        Xl
                      </li>
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-7">
                  <ul className="flex items-center border-[--textTwo-clr] border-[1px] rounded font-[poppins]">
                    <li
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                      className="py-1 px-3 text-xl text-black hover:bg-[--secondaryThree-clr] hover:text-white cursor-pointer"
                    >
                      -
                    </li>
                    <li className="py-1 px-8 text-xl text-black border-[--textTwo-clr] border-x-[1px]">{count}</li>
                    <li
                      onClick={() => {
                        if (count < stock) {
                          setCount(count + 1);
                        }
                      }}
                      className="py-1 px-3 text-xl text-black hover:bg-[--secondaryThree-clr] hover:text-white cursor-pointer"
                    >
                      +
                    </li>
                  </ul>
                  <button className="self-center py-2 px-12 rounded-[4px] font-[poppins] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr]">
                    Buy Now
                  </button>
                  <button className="py-1 px-3 text-xl font-[poppins] font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className="flex flex-col max-w-[26rem] w-full px-4 py-5 border-[--textTwo-clr] border-[1px] rounded font-[poppins]">
                <div className="flex items-center gap-3 pb-4 border-[--textTwo-clr] border-b-[1px]">
                  <img src="/icons/delivery.png" alt="Delivery Image" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-medium">Free Delivery</span>
                    <a href="/" className="text-sm font-medium underline">
                      Enter your postal code for Delivery Availability
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 ">
                  <img src="/icons/return.png" alt="Return Icon" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-medium">Return Delivery</span>
                    <p className="text-sm font-medium">
                      Free 30 Days Delivery Returns.{" "}
                      <a href="/" className="underline">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <RelatedItem />
    </>
  );
}
export default ProductDetails;
