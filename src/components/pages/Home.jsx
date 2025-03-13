import Hero from "../utils/Hero"
import FlashSales from "../utils/FlashSales"
import BestSelling from "../utils/BestSelling"
import ExploreProducts from "../utils/ExploreProducts"

function Home(){
    return(
        <>
        <Hero />
        <FlashSales/>
        <BestSelling />
        <ExploreProducts />
        </>
    )
}
export default Home