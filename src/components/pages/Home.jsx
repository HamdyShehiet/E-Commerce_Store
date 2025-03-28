import Hero from "../utils/Hero";
import Features from "../utils/Features";
import FlashSell from "../utils/FlashSell";
import FlashSales from "../utils/FlashSales";
import BestSelling from "../utils/BestSelling";
import ExploreProducts from "../utils/ExploreProducts";
import CategoriesProvider from "../utils/CategoriestProvider";

function Home() {
  return (
    <>
      <CategoriesProvider>
        <Hero />
      </CategoriesProvider>
      <FlashSales />
      <BestSelling />
      <FlashSell />
      <ExploreProducts />
      <Features />
    </>
  );
}
export default Home;
