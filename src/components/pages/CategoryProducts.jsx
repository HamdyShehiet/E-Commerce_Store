import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function CategoryProducts() {
    const {categoryName} = useParams()
    const [category, setCategory] = useState({})
    const { products = [] } = category;
    console.log(products);
    products.map(({id, title, description})=>console.log(id,title,description))
    async function getCategoryProducts(){
        try{
            const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`)
            if(response.status !== 200){
                throw new Error("Response Error");
            }
            const data = await response.json();
            setCategory(data)
        }catch(error){
            console.error("Error",error)
        }
    }
    useEffect(()=>{
        getCategoryProducts()
    },[])
    return (
        <>
        <h1 className="text-7xl">Categories Products</h1>
        </>
    )
}

export default CategoryProducts