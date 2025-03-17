import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-14">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">Cart</span>
          </div>
          <div className="w-full bg-white shadow-md rounded overflow-auto whitespace-nowrap srcrollbar-h scrollbar-track .scrollbar-thumb">
            <table className="w-full table-auto text-left">
              <thead className="font-[poppins] text-sm font-normal text-[--primaryTwo-clr]">
                <tr className="border-b border-[--border-clr] bg-[--secondaryTwo-clr] shadow-sm">
                  <th className="px-3 py-6">Product Name</th>
                  <th className="px-3 py-6">Date</th>
                  <th className="px-3 py-6">Price</th>
                  <th className="px-3 py-6">Quatity</th>
                  <th className="px-3 py-6">Quatity</th>
                  <th className="px-3 py-6"></th>
                </tr>
              </thead>
              <tbody className="font-[poppins]">
                <tr className="text-sm shadow-sm text-black hover:bg-slate-50">
                  <td className="flex items-center gap-2  px-3 py-6">
                    <img src="/images/product1.png" className="max-w-[70px]" alt="title" />
                    <span className="font-semibold">Project Name</span>
                  </td>
                  <td className="px-3 py-6">01/01/2024</td>
                  <td className="px-3 py-6">$50</td>
                  <td className="px-3 py-6">
                    <div className="w-[9rem]">
                      <div className="relative">
                        <button
                          className="absolute right-9 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                          type="button"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          readOnly
                          value="0"
                          className="w-full bg-transparent placeholder:text-slate-400 text-[--primaryTwo-clr] text-sm border border-slate-200 rounded-md pl-1 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm appearance-none text-center"
                        />
                        <button
                          className="absolute right-1 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700"
                          type="button"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-6">$300</td>
                  <td className="px-4 py-6">
                    <button className=" font-semibold">Delete</button>
                  </td>
                </tr>




                <tr className="text-sm shadow-sm text-black hover:bg-slate-50">
                  <td className="flex items-center gap-2  px-3 py-6">
                    <img src="/images/product1.png" className="max-w-[70px]" alt="title" />
                    <span className="font-semibold">Project Name</span>
                  </td>
                  <td className="px-3 py-6">01/01/2024</td>
                  <td className="px-3 py-6">$50</td>
                  <td className="px-3 py-6">
                    <div className="w-[9rem]">
                      <div className="relative">
                        <button
                          className="absolute right-9 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                          type="button"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          readOnly
                          value="0"
                          className="w-full bg-transparent placeholder:text-slate-400 text-[--primaryTwo-clr] text-sm border border-slate-200 rounded-md pl-1 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm appearance-none text-center"
                        />
                        <button
                          className="absolute right-1 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700"
                          type="button"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-6">$300</td>
                  <td className="px-4 py-6">
                    <button className=" font-semibold">Delete</button>
                  </td>
                </tr>
                <tr className="text-sm shadow-sm text-black hover:bg-slate-50">
                  <td className="flex items-center gap-2  px-3 py-6">
                    <img src="/images/product1.png" className="max-w-[70px]" alt="title" />
                    <span className="font-semibold">Project Name</span>
                  </td>
                  <td className="px-3 py-6">01/01/2024</td>
                  <td className="px-3 py-6">$50</td>
                  <td className="px-3 py-6">
                    <div className="w-[9rem]">
                      <div className="relative">
                        <button
                          className="absolute right-9 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                          type="button"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          readOnly
                          value="0"
                          className="w-full bg-transparent placeholder:text-slate-400 text-[--primaryTwo-clr] text-sm border border-slate-200 rounded-md pl-1 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm appearance-none text-center"
                        />
                        <button
                          className="absolute right-1 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700"
                          type="button"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-6">$300</td>
                  <td className="px-4 py-6">
                    <button className=" font-semibold">Delete</button>
                  </td>
                </tr>
                <tr className="text-sm shadow-md text-black hover:bg-slate-50">
                  <td className="flex items-center gap-2  px-3 py-6">
                    <img src="/images/product1.png" className="max-w-[70px]" alt="title" />
                    <span className="font-semibold">Project Name</span>
                  </td>
                  <td className="px-3 py-6">01/01/2024</td>
                  <td className="px-3 py-6">$50</td>
                  <td className="px-3 py-6">
                    <div className="w-[9rem]">
                      <div className="relative">
                        <button
                          className="absolute right-9 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                          type="button"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          readOnly
                          value="0"
                          className="w-full bg-transparent placeholder:text-slate-400 text-[--primaryTwo-clr] text-sm border border-slate-200 rounded-md pl-1 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm appearance-none text-center"
                        />
                        <button
                          className="absolute right-1 top-1 rounded bg-[--primaryTwo-clr] p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 active:bg-slate-700"
                          type="button"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-6">$300</td>
                  <td className="px-4 py-6">
                    <button className=" font-semibold">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
