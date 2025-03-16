import { Link } from "react-router-dom"

function NotFound(){
    return(
        <>
        <section className="py-10">
            <div className="container mx-auto flex flex-col gap-20">
                <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
                    <Link to="/" className="text-[--textTwo-clr]">Home /</Link> 
                    <span className="text-black">404 Error</span>
                </div>
                <div className="flex flex-col items-center gap-12">
                    <h1 className="font-[inter] leading-[1] font-medium text-[clamp(2.5rem,_10vw,_6.875rem)] text-black ">404 Not Found</h1>
                    <p className="text-center font-[poppins] font-normal text-base text-black">Your visited page not found. You may go home page</p>
                    <Link to="/" className="py-4 px-12  rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">Back To Home Page</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default NotFound