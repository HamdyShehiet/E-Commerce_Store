import Spinner from "../ui/Spinners/Spinner";
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";


function CategoryProducts() {
    const {categoryName} = useParams()
    const {addToCart} = useContext(ProductsContext)
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const { products = [] } = category;

    async function getCategoryProducts(){
        try{
            const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`)
            if(response.status !== 200){
                throw new Error("Response Error");
            }
            const data = await response.json();
            setCategory(data)
        }catch(error){
            setError("Error")
            console.error("Error",error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getCategoryProducts()
    },[categoryName])
    return (
        <section className="py-12">
            <div className="container mx-auto grid grid-cols-[repeat(auto-fit,min(18.125rem,_100%))] justify-center  gap-8 font-[poppins]">
                    {   loading ? <Spinner /> : error ? <p>Not Found</p> :
                        products?.map((product)=>{
                            const {
                                id,
                                title,
                                thumbnail,
                                price,
                                discountPercentage,
                                rating,
                            } = product;
                            return (
                                <div key={id} className="col flex flex-col gap-3">
                                <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                                <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">{discountPercentage || "0"}%</span>
                                <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                                    <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                                    <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                                </div>
                                <button onClick={()=>addToCart(product)} className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                                <Link to={`/product/${id}`}><img src={thumbnail}  alt={`${title} Image`} /></Link>
                                </div>
                                <Link to={`/product/${id}`} className="text-base font-medium text-black">{title}</Link>
                                <div className="flex items-center gap-4 text-base font-medium">
                                    <span className="text-[--secondaryThree-clr]">${price}</span>
                                    <del className="text-[--textTwo-clr]">${(price + (price * (discountPercentage/100))).toFixed(2)}</del>
                                </div>
                                <div className="flex items-center gap-4 font-medium text-base">
                                    <ul className="flex items-center gap-2">
                                        <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                        <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                        <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                        <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                        <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                    </ul>
                                    <span className="text-[--textTwo-clr]">({rating})</span>
                                </div>
                            </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}

export default CategoryProducts