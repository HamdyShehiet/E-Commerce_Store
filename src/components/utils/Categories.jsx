import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function Categories(){
    const [categories, setCategories] = useState([])
    console.log(categories);
    
    async function getCategories(){
        try{
            const response = await fetch("https://dummyjson.com/products/categories")
            if(response.status !== 200){
                throw new Error("Response Error");
            }
            const data = await response.json();
            setCategories(data)
        }catch(error){
            console.error("Error",error)
        }
    }
    useEffect(()=>{
        getCategories()
    },[])
    return (
        <ul className="flex items-start flex-col gap-5 xl:hidden absolute right-16 top-[4rem] lg:top-[5rem] z-[7] max-w-64 w-full h-[20rem] px-6 py-4 rounded-sm font-[poppins] text-base font-medium bg-white overflow-y-scroll whitespace-nowrap text-black srcrollbar-v scrollbar-thumb scrollbar-track shadow-[0px_2px_6px_rgba(0,_0,_0,_.1),0px_-2px_6px_rgba(0,_0,_0,_.1)]">
            {
                categories.map((category, index) =>{
                    return (
                        <li key={index}>
                        <Link to={`/category/${category.slug}`}>{category.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Categories;