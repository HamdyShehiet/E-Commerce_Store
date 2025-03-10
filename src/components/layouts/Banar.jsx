import { useState } from "react"
import { Link } from "react-router-dom"

function Banar(){
    const [language, setLanguage] = useState("");
    console.log(language);
    return(
        <>
        <div className="sticky top-0 bg-black py-2.5 ">
            <div className="container flex items-center mx-auto px-2 font-[Poppins]">
                <div className="flex flex-wrap items-center justify-start lg:justify-center grow-[2] gap-2 text-white">
                    <p className="hidden lg:block text-sm font-normal">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link to="/" className="text-base font-semibold underline">ShopNow</Link>
                </div>

                <div className="w-full max-w-[120px]">      
                    <div className="relative">
                        <select defaultValue="en" onChange={(e)=> setLanguage(e.target.value)} name="languages" id="languages" className="w-full font-medium bg-transparent text-white text-base  pl-3 pr-8 py-2 transition duration-300 ease border-none outline-none shadow-sm focus:shadow-md  appearance-none cursor-pointer">
                            <option value="en" className="font-medium bg-white text-[--primaryTwo-clr]">English</option>
                            <option value="ar" className="font-medium bg-white text-[--primaryTwo-clr]">Arabic</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Banar