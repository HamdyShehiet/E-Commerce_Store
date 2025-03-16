import Slider from "./Slider"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CategoriesContext } from "../../context/Categories"

function Hero(){
    const {categories} = useContext(CategoriesContext)
    
    return(
        <>
        <section className="hero hidden lg:block pt-11 pb-14">
            <div className="container mx-auto grid xl:grid-cols-[17rem,auto] justify-center xl:justify-between items-center relative font-[poppins] xl:after:content-[''] xl:after:absolute xl:after:left-[320px] xl:after:top-[-44px] xl:after:h-[400px] xl:after:w-[1px] xl:after:bg-[--border-clr]">
                <ul className="hidden xl:flex flex-col gap-4 xl:h-[22rem] text-base font-normal  xl:overflow-y-scroll text-black srcrollbar-v scrollbar-thumb scrollbar-track">
                    {
                        categories?.map((category,index)=>{
                            return(
                            <li key={index} ><Link to={`/category/${category.slug}`}>{category.name}</Link></li>
                            )
                        })
                    }
                </ul>
                <Slider />
            </div>
        </section>
        </>
    )
}
export default Hero