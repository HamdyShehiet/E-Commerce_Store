import { useEffect, useState } from "react"
import { ProductsContext } from "../../context/Products"


function ProductsProvider({children}){
    const [someProducts, setSomeProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const {products = [] } = someProducts
    const displaySomeProducts = products.slice(0 , 10);
    
    async function getProducts(){
        try{
            const response = await fetch(`https://dummyjson.com/products`)
            if(response.status !== 200){
                throw new Error("Response Error");
            }
            const data = await response.json();
            setSomeProducts(data)
        }catch(error){
            setError("Error")
            console.error("Error",error)
        }finally{
            setLoading(false)
            window.scrollTo(0, 0);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
    
    return(
        <ProductsContext.Provider value={{displaySomeProducts, loading, error}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider