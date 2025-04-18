import Search from "../utils/Search";
import { useContext, useState } from "react";
import Categories from "../utils/Categories";
import { ProductsContext } from "../../context/Products";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { cart } = useContext(ProductsContext);
  const [searchBox, setSearchBox] = useState(false);
  const [userOptions, setUserOptions] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "About", path: "/about" },
  ];

  const logOut = () => {
    localStorage.removeItem("LoggedInUser");
    navigate("/login");
    setUserOptions(false);
  };

  return (
    <>
      <header className="sticky top-0 z-10 py-5 border-b-[1px] border-solid border-[--border-clr] bg-white">
        <div className="container  flex items-center gap-5 relative mx-auto">
          <Link to="/" className="grow-[1] text-2xl font-[inter] font-bold">
            Exclusive
          </Link>
          <nav className="flex items-center justify-end lg:justify-between grow-[1]">
            <ul
              className={`${
                menu
                  ? "max-lg:absolute max-lg:right-[12px] max-lg:top-[60px] max-lg:z-[9] max-lg:max-w-[15rem] max-lg:w-full max-lg:py-[10px] max-lg:px-6 max-lg:rounded-sm max-lg:transition-all max-lg:duration-700 max-lg:ease-in-out max-lg:text-[--primaryTwo-clr] max-lg:bg-[--primaryOne-clr] max-lg:shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
                  : "hidden"
              } lg:flex lg:items-center lg:gap-6 font-[poppins] text-base font-normal`}
            >
              {navLinks.map((navLink) => {
                return (
                  <li key={navLink.path}>
                    <NavLink to={navLink.path} onClick={()=>setMenu(false)} className={`relative lg:pb-1`}>
                      {navLink.label}
                    </NavLink>
                  </li>
                );
              })}
              {!LoggedInUser && (
                <li>
                  <NavLink to="/signup" onClick={()=>setMenu(false)} className={`relative lg:pb-1`}>
                    Sign Up
                  </NavLink>
                </li>
              )}
              {!LoggedInUser && (
                <li className="lg:hidden text-[--secondaryThree-clr]">
                  <NavLink to="/login" onClick={()=>setMenu(false)} className={`relative lg:pb-1`}>
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
            <div className="flex items-center gap-4 font-[poppins]">
              <Search searchBox={searchBox} />
              <button
                title="Search"
                onClick={() => {
                  setSearchBox(!searchBox);
                }}
                className="lg:hidden text-xl text-[--primaryTwo-clr]"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <Link to="/wishlist" title="WishList" className="text-xl text-[--primaryTwo-clr]">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <button
                title="Categories"
                onClick={() => {
                  setCategoriesOpen(!categoriesOpen);
                }}
                className="xl:hidden text-xl text-[--primaryTwo-clr]"
              >
                <i className="fa-solid fa-icons"></i>
              </button>
              <Link to="/cart" title="Cart Shopping" className="relative text-xl text-[--primaryTwo-clr]">
                <i className="fa-solid fa-cart-shopping"></i>
                {cart.length > 0 && <span className="absolute top-[-9px] right-[-10px] w-5 h-5 leading-5 text-center font-medium text-sm bg-red-500 text-white rounded-[50%]">{cart.length}</span>}
              </Link>
              <button
                onClick={() => {
                  setMenu((prev) => !prev);
                }}
                className={`${menu ? "fa-xmark" : "fa-bars-staggered"} lg:hidden text-xl text-[--primaryTwo-clr]`}
              >
                <i className="fa-solid"></i>
              </button>
              {LoggedInUser && (
                <button
                  onClick={() => {
                    setUserOptions(!userOptions);
                  }}
                  className="avatar w-8 h-8 rounded-[50%] text-sm bg-red-500 text-white"
                >
                  <i className="fa-solid fa-user"></i>
                </button>
              )}
            </div>
          </nav>
          {categoriesOpen && <Categories setCategoriesOpen={setCategoriesOpen} />}
          {userOptions && LoggedInUser && (
            <ul className="flex items-start flex-col gap-5 absolute right-5 top-[4rem] lg:top-[5rem] z-[7] max-w-[17rem] w-full  px-6 py-6 rounded-sm font-[poppins] text-base font-medium bg-white overflow-y-scroll whitespace-nowrap text-black srcrollbar-v scrollbar-thumb scrollbar-track shadow-[0px_2px_6px_rgba(0,_0,_0,_.1),0px_-2px_6px_rgba(0,_0,_0,_.1)]">
              <li>
                <Link to="/account" onClick={()=>setUserOptions(false)} className="flex items-center gap-2">
                  <i className="fa-solid fa-user"></i>
                  <span>Manage My Account</span>
                </Link>
              </li>
              <li>
                <Link to={"/"} onClick={()=>setUserOptions(false)} className="flex items-center gap-2">
                  <i className="fa-solid fa-box-open"></i>
                  <span>My Order</span>
                </Link>
              </li>
              <li>
                <Link to={"/"} onClick={()=>setUserOptions(false)} className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>My Cancellations</span>
                </Link>
              </li>
              <li>
                <Link to={"/"} onClick={()=>setUserOptions(false)} className="flex items-center gap-2">
                  <i className="fa-solid fa-star"></i>
                  <span>My Reviews</span>
                </Link>
              </li>
              <li>
                <button onClick={logOut} className="flex items-center gap-2">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
export default Header;
