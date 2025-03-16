import { useEffect, useState } from "react"
import { CategoriesContext } from "../../context/Categories"

function CategoriesProvider({children}){
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
    return(
        <CategoriesContext.Provider value={{categories,loading,error}}>
            {children}
        </CategoriesContext.Provider>
    )
}
export default CategoriesProvider