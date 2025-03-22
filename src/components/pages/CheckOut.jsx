import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart, totalPrice } = useContext(ProductsContext);

  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
          <Link to="/cart" className="text-[--textTwo-clr]">
            View Cart /
          </Link>
          <span className="text-black">CheckOut</span>
        </div>

        <div className="grid xl:grid-cols-[30rem,_32rem] justify-center xl:justify-between gap-x-5 gap-y-10">
          {/* Billing Details */}
          <div>
            <h2 className="font-[inter] text-4xl font-medium text-black mb-6">Billing Details</h2>
            <form className="space-y-5 font-[poppins]">
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">First Name*</label>
                <input type="text" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " required />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Company Name</label>
                <input type="text" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Street Address*</label>
                <input type="text" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" required />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Apartment, floor, etc. (optional)</label>
                <input type="text" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Town/City*</label>
                <input type="text" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" required />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Phone Number*</label>
                <input type="tel" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" required />
              </div>
              <div>
                <label className="block text-base font-normal text-[--textTwo-clr] mb-1.5">Email Address*</label>
                <input type="email" className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr]" required />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="saveInfo"
                  value="saveInfo"
                  className=" h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md"
                />
                <label htmlFor="saveInfo" className="text-base font-normal text-black">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 font-[poppins] py-2 px-2 h-[11.25rem] overflow-auto whitespace-nowrap srcrollbar-v scrollbar-track .scrollbar-thumb">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-2 font-normal trext-base text-black ">
                  <div className="flex items-center gap-1 relative">
                    <span className="absolute top-0 left-0 w-7 h-7 leading-7 text-center rounded-[50%] text-white bg-[--secondaryThree-clr]">{item.quantity}</span>
                    <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <span>{item.title}</span>
                  </div>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>

            <ul className="flex flex-col gap-3 py-2 px-2 font-[poppins] font-medium text-base">
              <li className="flex items-center justify-between pb-4 border-[--border-clr] border-b-[1px]">
                <span>Subtotal:</span>
                <span>${totalPrice().toFixed() || "0"}</span>
              </li>
              <li className="flex items-center justify-between pb-4 border-[--border-clr] border-b-[1px]">
                <span>Shipping:</span>
                <span className="text-[--secondaryFour-clr]">Free</span>
              </li>
              <li className="flex items-center justify-between pb-4 border-[--border-clr] border-b-[1px] ">
                <span>Total:</span>
                <span>${totalPrice().toFixed() || "0"}</span>
              </li>
            </ul>

            <div className="font-[poppins] py-2 px-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    value="bank"
                    className="w-5 h-5"
                  />
                  <label htmlFor="bank" className="font-normal text-base text-black">Bank</label>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/icons/visa.png" alt="Visa" className="w-14" />
                  <img src="/icons/mastercard.png" alt="Mastercard" className="w-14" />
                </div>
              </div>
              <div className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value= "cash"
                  className="w-5 h-5"
                />
                <label htmlFor="cash" className="font-normal text-base text-black">Cash on delivery</label>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap py-2 px-2 font-[poppins]">
              <input type="text" placeholder="Coupon Code" className="grow-[1] py-3 px-4 font-medium rounded outline-none border-[--border-clr] border-[1px] bg-transparent" />
              <button className="py-3 px-8 rounded text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">Apply Coupon</button>
            </div>

            <button className="py-4 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CheckOut;
