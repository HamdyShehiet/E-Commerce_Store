import Hero from "../utils/Hero"
import FlashSell from "../utils/FlashSell"
import FlashSales from "../utils/FlashSales"
import BestSelling from "../utils/BestSelling"
import ExploreProducts from "../utils/ExploreProducts"
import CategoriesProvider from "../utils/CategoriestProvider"
import ProductsProvider from "../utils/ProductsProvider"

function Home(){
    return(
        <>
        <CategoriesProvider>
            <Hero />
        </CategoriesProvider>

        <ProductsProvider>
        <FlashSales/>
        <BestSelling />
        <FlashSell />
        <ExploreProducts />
        </ProductsProvider>
        </>
    )
}
export default Home