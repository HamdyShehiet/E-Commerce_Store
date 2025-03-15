import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RelatedItem from "../utils/RelatedItem"

function ProductDetails(){
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(product);
    
        async function getProduct(){
            try{
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if(response.status !== 200){
                    throw new Error("Response Error");
                }
                const data = await response.json();
                setProduct(data)
            }catch(error){
                console.error("Error",error)
            }finally{
                setLoading(false)
            }
        }
        useEffect(()=>{
            getProduct()
        },[id])
    return (
        <>
        {
        <section className="py-20">
            <div className="container grid items-strech justify-center xl:items-start xl:grid-cols-[60%,_28rem] xl:justify-between gap-y-10 mx-auto ">
                <div className="flex items-stretch justify-center xl:justify-start flex-col-reverse md:flex-row gap-9">
                    <div className="product-slides flex md:flex-col justify-center flex-wrap gap-4 ">
                        <div className="w-[min(9rem,100%)] inline-flex justify-center items-center p-4 rounded bg-[--secondaryTwo-clr]"><img src="/images/product5(1).png" alt="Image" /></div>
                        <div className="w-[min(9rem,100%)] inline-flex justify-center items-center p-4 rounded bg-[--secondaryTwo-clr]"><img src="/images/product5(2).png" alt="Image" /></div>
                        <div className="w-[min(9rem,100%)] inline-flex justify-center items-center p-4 rounded bg-[--secondaryTwo-clr]"><img src="/images/product5(3).png" alt="Image" /></div>
                        <div className="w-[min(9rem,100%)] inline-flex justify-center items-center p-4 rounded bg-[--secondaryTwo-clr]"><img src="/images/product5(4).png" alt="Image" /></div>
                    </div>
                    <div className=" inline-flex items-center justify-center p-9 rounded bg-[--secondaryTwo-clr]">
                        <img src="/images/product5.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 ">
                    <div className="flex flex-col gap-3 pb-4 border-b-[1px] border-[--textTwo-clr] border-solid">
                        <span className="font-[inter] text-2xl font-semibold text-black">Havic HV G-92 Gamepad</span>
                        <div className="flex items-center gap-3 font-[poppins]">
                            <ul className="flex items-center gap-2 text-sm">
                            <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(150 Reviews)</span>
                            <span className="pl-3 text-sm font-normal text-[--secondaryFive-clr] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[1px] before:h-[20px] before:bg-[--textTwo-clr]">in Stock</span>
                        </div>
                        <span className="font-[inter] text-2xl font-normal text-black">$192.00</span>
                        <p className="max-w-[42rem] w-full font-[poppins] text-base font-normal text-black">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>
                    <div className="flex flex-col gap-5 pt-4">
                        <div className="flex items-center gap-3">
                            <span className="font-[inter] text-xl font-normal text-black">Colours :</span>
                            <ul className="flex items-center gap-3">
                                <li className="w-[20px] h-[20px] outline border-[#ffffff] border-solid border-[3px] rounded-[50%] bg-[#A0BCE0] cursor-pointer"></li>
                                <li className="w-[20px] h-[20px]  rounded-[50%] bg-[#9c1616]  cursor-pointer"></li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-[inter] text-xl font-normal text-black">Size :</span>
                            <ul className="flex flex-wrap items-center gap-3 font-[poppins]">
                                <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">XS</li>
                                <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">S</li>
                                <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">M</li>
                                <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">L</li>
                                <li className="text-sm font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded py-2 px-4 cursor-pointer">Xl</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <ul className="flex items-center border-[--textTwo-clr] border-[1px] rounded font-[poppins]">
                                <li className="py-1 px-3 text-xl text-black hover:bg-[--secondaryThree-clr] hover:text-white cursor-pointer">-</li>
                                <li className="py-1 px-8 text-xl text-black border-[--textTwo-clr] border-x-[1px]">2</li>
                                <li className="py-1 px-3 text-xl text-black hover:bg-[--secondaryThree-clr] hover:text-white cursor-pointer">+</li>
                            </ul>
                            <button className="self-center py-2 px-12 rounded-[4px] font-[poppins] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr]">Buy Now</button>
                            <button className="py-1 px-3 text-xl font-[poppins] font-medium text-black hover:text-white hover:bg-[--secondaryThree-clr] border-[--textTwo-clr] border-[1px] border-solid rounded"><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[26rem] w-full px-4 py-5 border-[--textTwo-clr] border-[1px] rounded font-[poppins]">
                        <div className="flex items-center gap-3 pb-4 border-[--textTwo-clr] border-b-[1px]">
                            <img src="/icons/delivery.png" alt="Delivery Image" />
                            <div className="flex flex-col gap-1">
                                <span className="text-base font-medium">Free Delivery</span>
                                <a href="/" className="text-sm font-medium underline">Enter your postal code for Delivery Availability</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 pt-4 ">
                            <img src="/icons/return.png" alt="Return Icon" />
                            <div className="flex flex-col gap-1">
                                <span className="text-base font-medium">Return Delivery</span>
                                <p className="text-sm font-medium">Free 30 Days Delivery Returns. <a href="/" className="underline">Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
        <RelatedItem />
        </>
    )
}
export default ProductDetails