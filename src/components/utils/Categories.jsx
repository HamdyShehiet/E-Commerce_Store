import { Link } from "react-router-dom"


function Categories(){
    
    return (
            <ul className="flex items-start flex-col gap-5 xl:hidden absolute right-16 top-[4rem] lg:top-[5rem] z-[7] max-w-64 w-full h-[20rem] px-6 py-4 rounded-sm font-[poppins] text-base font-medium bg-white overflow-y-scroll whitespace-nowrap text-black srcrollbar-v scrollbar-thumb scrollbar-track shadow-[0px_2px_6px_rgba(0,_0,_0,_.1),0px_-2px_6px_rgba(0,_0,_0,_.1)]">
                <li >
                    <Link to="/">Woman's Fashion</Link>
                </li>
                <li>
                    <Link to="/">Men's Fashion </Link>
                </li>
                <li>
                    <Link to="/">Electronics</Link>
                </li>
                <li>
                    <Link to="/">Home & Lifestyle</Link>
                </li>
                <li>
                    <Link to="/">Medicine</Link>
                </li>
                <li>
                    <Link to="/">Sports & Outdoor</Link>
                </li>
                <li>
                    <Link to="/">Baby's & Toys</Link>
                </li>
                <li>
                    <Link to="/">Groceries & Pets</Link>
                </li>
                <li>
                    <Link to="/">Flash Sales</Link>
                </li>
                <li>
                    <Link to="/">Best Selling</Link>
                </li>
                <li>
                    <Link to="/">New Arrival</Link>
                </li>
            </ul>
    )
}
export default Categories;