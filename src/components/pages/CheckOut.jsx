import { useContext } from "react";
import { ProductsContext } from "../../context/Products";




function CheckOut(){
      const { cart, setCart, totalPrice } = useContext(ProductsContext);
    
    return (
        <>
            <h1 className="text-4xl">CheckOut</h1>
        </>
    )
}
export default CheckOut