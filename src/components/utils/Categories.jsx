import { Link } from "react-router-dom"



function Categories(){
    
    return (
        <>
            <div className="container">
                <ul className="categories hidden xl:flex flex-col gap-4 xl:h-[22rem] text-base font-normal  xl:overflow-y-scroll text-[--primaryTwo-clr] text-black ">
                    <li>
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
        </>
    )
}
export default Categories;