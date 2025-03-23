import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
function About() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-1.5 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">Contact</span>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto flex flex-col xl:flex-row items-center xl:justify-between gap-y-10 font-[poppins]">
          <div className="flex flex-col gap-6 xl:w-[30rem] text-black">
            <h1 className="text-[clamp(2.5rem,_5vw,_3.375rem)] leading-[1] font-semibold">Our Story</h1>
            <p className="text-base font-normal">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-base font-normal">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="xl:w-[43.75rem]">
            <img src="/images/frame8.png" alt="Two women shopping with bags and looking at phone" className="rounded" />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-[repeat(auto-fit,min(16.875rem,_100%))] justify-center gap-8 font-[poppins]">
          <div className="border rounded p-6 flex flex-col items-center justify-center">
            <div className="bg-gray-200 rounded-full p-3 mb-4">
              <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
                <CiShop className="text-2xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold">10.5k</h2>
            <p className="text-base font-normal text-center">Sellers active our site</p>
          </div>

          <div className="border rounded p-6 flex flex-col items-center justify-center bg-[--secondaryThree-clr]">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-3 mb-4">
              <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-white text-black">
                <MdOutlineAttachMoney className="text-3xl"/>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white">33k</h2>
            <p className="text-base font-normal text-center text-white">Monthly Prodouct Sale</p>
          </div>

          <div className="border rounded p-6 flex flex-col items-center justify-center">
            <div className="bg-gray-200 rounded-full p-3 mb-4">
              <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
                <FaShoppingBag className="text-2xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold">45.5k</h2>
            <p className="text-base font-normal text-center">Customer active in our site</p>
          </div>

          <div className="border rounded p-6 flex flex-col items-center justify-center">
            <div className="bg-gray-200 rounded-full p-3 mb-4">
              <div className="flex items-center justify-center text-2xl w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
              <i class="fa-solid fa-sack-dollar"></i>
              </div>
            </div>
            <h2 className="text-3xl font-bold">25k</h2>
            <p className="text-sm font-normal text-center">Anual gross sale in our site</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
