import Hero from "../utils/Hero"
import FlashSell from "../utils/FlashSell"
import FlashSales from "../utils/FlashSales"
import BestSelling from "../utils/BestSelling"
import ExploreProducts from "../utils/ExploreProducts"

function Home(){
    return(
        <>
        <Hero />
        <FlashSales/>
        <BestSelling />
        <FlashSell />
        <ExploreProducts />
        </>
    )
}
export default Home