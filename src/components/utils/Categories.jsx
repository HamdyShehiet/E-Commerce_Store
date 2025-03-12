import { Link } from "react-router-dom"


function Categories(){
    
    return (
        <div className="absolute right-0 top-[3.4rem] lg:top-[4.2rem] z-[7] w-full px-[.75rem] rounded-sm shadow-[0px_2px_2px_rgba(0,_0,_0,_.1),0px_-2px_2px_rgba(0,_0,_0,_.1)]">
                <ul className="flex items-center gap-16 xl:hidden w-full px-4 py-6 font-[poppins] text-base font-medium bg-white overflow-x-scroll whitespace-nowrap text-black srcrollbar-h scrollbar-thumb scrollbar-track">
                    <li >
                        <Link>Woman's Fashion</Link>
                    </li>
                    <li>
                        <Link>Men's Fashion </Link>
                    </li>
                    <li>
                        <Link>Electronics</Link>
                    </li>
                    <li>
                        <Link>Home & Lifestyle</Link>
                    </li>
                    <li>
                        <Link>Medicine</Link>
                    </li>
                    <li>
                        <Link>Sports & Outdoor</Link>
                    </li>
                    <li>
                        <Link>Baby's & Toys</Link>
                    </li>
                    <li>
                        <Link>Groceries & Pets</Link>
                    </li>
                    <li>
                        <Link>Flash Sales</Link>
                    </li>
                    <li>
                        <Link>Best Selling</Link>
                    </li>
                    <li>
                        <Link>New Arrival</Link>
                    </li>
                </ul>
                </div>
    )
}
export default Categories;