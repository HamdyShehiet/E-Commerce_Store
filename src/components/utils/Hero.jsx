import Slider from "./Slider"
import { Link } from "react-router-dom"

function Hero(){
    return(
        <>
        <section className="hero hidden lg:block pt-11 pb-16">
            <div className="container mx-auto grid xl:grid-cols-[17rem,auto] justify-center xl:justify-between items-center relative font-[poppins] xl:after:content-[''] xl:after:absolute xl:after:left-[320px] xl:after:top-[-44px] xl:after:h-[400px] xl:after:w-[1px] xl:after:bg-[--border-clr]">
                <ul className="hidden xl:flex flex-col gap-4 xl:h-[22rem] text-base font-normal  xl:overflow-y-scroll text-black srcrollbar-v scrollbar-thumb scrollbar-track">
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
                <Slider />
            </div>
        </section>
        </>
    )
}
export default Hero