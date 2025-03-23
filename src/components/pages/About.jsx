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

    </>
  );
}
export default About;
