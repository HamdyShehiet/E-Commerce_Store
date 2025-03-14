import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function Categories({setCategoriesOpen}){
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    async function getCategories(){
        try{
            const response = await fetch("https://dummyjson.com/products/categories")
            if(response.status !== 200){
                throw new Error("Response Error");
            }
            const data = await response.json();
            setCategories(data)
        }catch(error){
            setError("Not Found")
            console.error("Error",error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getCategories()
    },[])

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