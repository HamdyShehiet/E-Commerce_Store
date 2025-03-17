import { useContext, useState } from "react"
import Search from "../utils/Search"
import Categories from "../utils/Categories"
import { Link, NavLink } from "react-router-dom"
import { ProductsContext } from "../../context/Products"

function Header(){
    const {cart} = useContext(ProductsContext)
    const [menu, setMenu] = useState(false)
    const [searchBox, setSearchBox] = useState(false)
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const menuHidden = ()=>{
        setMenu(false)
    }
    return(
        <>
        <header className="sticky top-0 z-10 py-5 border-b-[1px] border-solid border-[--border-clr] bg-white">
            <div className="container  flex items-center gap-5 relative mx-auto">
                <Link to="/" className="grow-[1] text-2xl font-[inter] font-bold">Exclusive</Link>
                <nav className="flex items-center justify-end lg:justify-between grow-[1]">
                    <ul className={`${menu ? "menu" : "" } font-[poppins] text-base font-normal`}>
                        <li>
                            <NavLink to="/" onClick={menuHidden} className={`relative lg:pb-1`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={menuHidden} className={`relative lg:pb-1`}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={menuHidden} className={`relative lg:pb-1`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" onClick={menuHidden} className={`relative lg:pb-1`}>Sign Up</NavLink>
                        </li>
                        <li className="lg:hidden text-[--secondaryThree-clr]">
                            <NavLink to="/login" onClick={menuHidden} className={`relative lg:pb-1`}>Login</NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 font-[poppins]">
                        <Search searchBox={searchBox}/>
                        <button title="Search" onClick={()=>{setSearchBox(!searchBox)}} className="lg:hidden text-xl text-[--primaryTwo-clr]">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <Link to="/wishlist" title="WishList" className="text-xl text-[--primaryTwo-clr]">
                            <i className="fa-regular fa-heart"></i>
                        </Link>
                        <button title="Categories" onClick={()=>{setCategoriesOpen(!categoriesOpen)}} className="xl:hidden text-xl text-[--primaryTwo-clr]">
                            <i className="fa-solid fa-icons"></i>
                        </button>
                        <Link to="/cart" title="Cart Shopping" className="relative text-xl text-[--primaryTwo-clr]">
                            <i className="fa-solid fa-cart-shopping"></i>
                            { cart.length > 0 && <span className="absolute top-[-9px] right-[-10px] w-5 h-5 leading-5 text-center font-medium text-sm bg-red-500 text-white rounded-[50%]">{cart.length}</span>}
                        </Link>
                        <button onClick={()=>{setMenu(!menu)}} className={`${menu ? "fa-xmark" : "fa-bars-staggered" } lg:hidden text-xl text-[--primaryTwo-clr]`}>
                            <i className="fa-solid"></i>
                        </button>
                    </div>
                </nav>
                {categoriesOpen && <Categories setCategoriesOpen={setCategoriesOpen}/>}
            </div>
        </header>
        </>
    )
}
export default Header