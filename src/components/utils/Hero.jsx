import Slider from "./Slider"
import Categories from "./Categories"

function Hero(){
    return(
        <>
        <section className="hero hidden lg:block pt-11 pb-16">
            <div className="container mx-auto grid xl:grid-cols-[17rem,auto] justify-center xl:justify-between items-center relative font-[poppins] xl:after:content-[''] xl:after:absolute xl:after:left-[320px] xl:after:top-[-44px] xl:after:h-[400px] xl:after:w-[1px] xl:after:bg-[--border-clr]">
                <Categories />
                <Slider />
            </div>
        </section>
        </>
    )
}
export default Hero