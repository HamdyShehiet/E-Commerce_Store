import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart, setCart, totalPrice } = useContext(ProductsContext);

  return (
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/cart" className="text-[--textTwo-clr]">
              View Cart /
            </Link>
            <span className="text-black">CheckOut</span>
          </div>

          <div className="grid lg:grid-cols-[32rem,_35rem] lg:justify-between gap-8">
          {/* Billing Details Form */}
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
                  className=" h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md"
                />
                <label htmlFor="saveInfo" className="text-base font-normal text-black">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          <div className="bg-red-500">

          </div>
        </div>

      </div>
      </section>
  );
}
export default CheckOut;
