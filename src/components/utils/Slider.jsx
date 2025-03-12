


function Slider(){
    
    return (
        <>
            <div className="slider hidden lg:block relative text-center self-start">
                <img src="/images/frame1.png" alt="Slide Image" />
                <ul className="flex items-center gap-3 absolute bottom-4 right-[50%] translate-x-[50%]">
                    <li className="w-3.5 h-3.5 rounded-full bg-[--textTwo-clr]"></li>
                    <li className="w-3.5 h-3.5 rounded-full bg-[--textTwo-clr]"></li>
                    <li className="active w-3.5 h-3.5  rounded-full"></li>
                    <li className="w-3.5 h-3.5 rounded-full bg-[--textTwo-clr]" ></li>
                    <li className="w-3.5 h-3.5 rounded-full bg-[--textTwo-clr]"></li>
                </ul>
            </div>
        </>
    )
}
export default Slider;