import { Link } from "react-router-dom"
import {  useContext } from "react";
import { CategoriesContext } from "../../context/Categories";


function Categories({setCategoriesOpen}){
    const {categories, loading, error} = useContext(CategoriesContext)
    
    return (
        <ul className="flex items-start flex-col gap-5 xl:hidden absolute right-16 top-[4rem] lg:top-[5rem] z-[7] max-w-64 w-full h-[20rem] px-6 py-4 rounded-sm font-[poppins] text-base font-medium bg-white overflow-y-scroll whitespace-nowrap text-black srcrollbar-v scrollbar-thumb scrollbar-track shadow-[0px_2px_6px_rgba(0,_0,_0,_.1),0px_-2px_6px_rgba(0,_0,_0,_.1)]">
            {   loading ? <p>loading...</p> : error ? <p>Not Found?</p> :
                categories?.map((category, index) =>{
                    return (
                        <li key={index}>
                        <Link onClick={()=>setCategoriesOpen(false)} to={`/category/${category.slug}`}>{category.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Categories;