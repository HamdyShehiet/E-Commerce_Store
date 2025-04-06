import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Banar({ locale , changeLanguage}){
    const { t } = useTranslation();

    return(
        <div className="sticky top-0 z-[9] bg-black py-2">
            <div className="container flex items-center mx-auto font-[Poppins]">
                <div className="flex flex-wrap items-center justify-start lg:justify-center grow-[2] gap-2 text-[--textOne-clr]">
                    <p className="hidden lg:block text-sm font-normal">{t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}</p>
                    <Link to="/" className="text-base font-semibold underline">{t("ShopNow")}</Link>
                </div>

                <div className="w-full max-w-[100px]">      
                    <div className="relative">
                        <select defaultValue={locale} onChange={(e)=>changeLanguage(e.target.value)} name="languages" id="languages" className="w-full py-2 text-base font-medium bg-transparent text-[--textOne-clr] transition duration-300 ease border-none outline-none shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="en" className="font-medium bg-white text-[--primaryTwo-clr]">English</option>
                            <option value="ar" className="font-medium bg-white text-[--primaryTwo-clr]">العربية</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`absolute z-[-1] top-3  ${locale === "en" ? "right-1" : "left-5"} h-4 w-4`}>
                            <path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banar