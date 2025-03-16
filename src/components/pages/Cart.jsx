import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-20">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">Cart</span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
