import { useState } from "react"
import Search from "../utils/Search"
import { Link } from "react-router-dom"

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
                            <Link to="/" onClick={menuHidden}>Home</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={menuHidden}>Contact</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={menuHidden}>About</Link>
                        </li>
                        <li>
                            <Link to="/signup" onClick={menuHidden}>Sign Up</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 font-[poppins]">
                        <Search searchBox={searchBox}/>
                        <button onClick={()=>{setSearchBox(!searchBox)}} className="lg:hidden text-xl text-[--primaryTwo-clr]">
                            <i className="fa-solid fa-magnifying-glass"></i>
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