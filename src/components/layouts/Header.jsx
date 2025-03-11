import { useState } from "react"
import Search from "../utils/Search"
import { Link, NavLink } from "react-router-dom"

function Header(){
    const [menu, setMenu] = useState(false)
    const [searchBox, setSearchBox] = useState(false)
    const menuHidden = ()=>{
        setMenu(false)
    }
    return(
        <header className="sticky top-0 z-10 py-5 border-b-[1px] border-solid border-[--primaryTwo-clr] bg-white ">
            <div className="container  flex items-center gap-10 relative mx-auto">
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
                        <li className="lg:hidden">
                            <NavLink to="/login" onClick={menuHidden} className={`relative lg:pb-1`}>Login</NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 font-[poppins]">
                        <Search searchBox={searchBox}/>
                        <button onClick={()=>{setSearchBox(!searchBox)}} className={`${searchBox ? "fa-xmark" : "fa-magnifying-glass" } lg:hidden text-xl text-[--primaryTwo-clr]`}>
                            <i className="fa-solid"></i>
                        </button>
                        <button className="text-xl text-[--primaryTwo-clr]">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                        <button className="text-xl text-[--primaryTwo-clr]">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button onClick={()=>{setMenu(!menu)}} className={`${menu ? "fa-xmark" : "fa-bars-staggered" } lg:hidden text-xl text-[--primaryTwo-clr]`}>
                            <i className="fa-solid"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header