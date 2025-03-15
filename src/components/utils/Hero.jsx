import Products from "../pages/Products"
import Slider from "./Slider"
import { Link } from "react-router-dom"

function Hero(){
    const categories =[
        {
          "slug": "beauty",
          "name": "Beauty",
        },
        {
          "slug": "fragrances",
          "name": "Fragrances",
          
        },
        {
          "slug": "furniture",
          "name": "Furniture",
        
        },
        {
          "slug": "groceries",
          "name": "Groceries",
        
        },
        {
          "slug": "home-decoration",
          "name": "Home Decoration",
        },
        {
          "slug": "kitchen-accessories",
          "name": "Kitchen Accessories",
        },
        {
          "slug": "laptops",
          "name": "Laptops",
        },
        {
          "slug": "mens-shirts",
          "name": "Mens Shirts",
        },
        {
          "slug": "mens-shoes",
          "name": "Mens Shoes",
        },
        {
          "slug": "mens-watches",
          "name": "Mens Watches",
        },
        {
          "slug": "mobile-accessories",
          "name": "Mobile Accessories",
        },
        {
          "slug": "motorcycle",
          "name": "Motorcycle",

        },
        {
          "slug": "skin-care",
          "name": "Skin Care",
        },
        {
          "slug": "smartphones",
          "name": "Smartphones",
        },
        {
          "slug": "sports-accessories",
          "name": "Sports Accessories",
        },
        {
        "slug": "sunglasses",
        "name": "Sunglasses",
        },
        {
        "slug": "tablets",
        "name": "Tablets",
        },
        {
        "slug": "tops",
        "name": "Tops",
        },
        {
        "slug": "vehicle",
        "name": "Vehicle",

        },
        {
        "slug": "womens-bags",
        "name": "Womens Bags",
        },
        {
        "slug": "womens-dresses",
        "name": "Womens Dresses",
        },
        {
        "slug": "womens-jewellery",
        "name": "Womens Jewellery",
        },
        {
        "slug": "womens-shoes",
        "name": "Womens Shoes",
        },
        {
        "slug": "womens-watches",
        "name": "Womens Watches",
        }
    ]

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