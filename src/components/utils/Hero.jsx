import Slider from "./Slider"
import { Link } from "react-router-dom"

function Hero(){
    return(
        <>
        <section className="hero hidden lg:block pt-11 pb-16">
            <div className="container mx-auto grid xl:grid-cols-[17rem,auto] justify-center xl:justify-between items-center relative font-[poppins] xl:after:content-[''] xl:after:absolute xl:after:left-[320px] xl:after:top-[-44px] xl:after:h-[400px] xl:after:w-[1px] xl:after:bg-[--border-clr]">
                <ul className="hidden xl:flex flex-col gap-4 xl:h-[22rem] text-base font-normal  xl:overflow-y-scroll text-black srcrollbar-v scrollbar-thumb scrollbar-track">
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
                <Slider />
            </div>
        </section>
        </>
    )
}
export default Hero