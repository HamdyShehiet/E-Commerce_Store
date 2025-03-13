import { Link } from "react-router-dom"

function ExploreProducts(){
    return(
        <section className="py-12">
            <div className="container mx-auto flex flex-col items-start gap-12">
                <span className="relative pl-7 font-[poppins] font-semibold text-base text-[--secondaryThree-clr] before:absolute before:content-[''] before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-5 before:h-10 before:rounded before:bg-[--secondaryThree-clr]">Our Products</span>
                <div className="flex items-center justify-between w-full">
                    <span className="font-[inter] font-semibold text-[clamp(1.5rem,_5vw,_2.25rem)]">Explore Our Products</span>
                    <ul className="flex items-center gap-2">
                        <li className="next w-[2.875rem] h-[2.875rem] leading-[2.875] text-center rounded-[50%] text-base bg-[--secondaryTwo-clr]"><i className="fa-solid fa-arrow-left"></i></li>
                        <li className="previous w-[2.875rem] h-[2.875rem] leading-[2.875] text-center rounded-[50%] text-base bg-[--secondaryTwo-clr]"><i className="fa-solid fa-arrow-right"></i></li>
                    </ul>
                </div>
                <div className="row flex items-start w-full gap-8 pb-6 px-1 overflow-x-scroll whitespace-nowrap srcrollbar-h scrollbar-thumb scrollbar-track font-[poppins]">
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                    <div className="col min-w-[18.125rem]  flex flex-col gap-3">
                        <div className="hover-Card relative flex items-center justify-center w-full h-[18.125rem] rounded-[0.25rem] bg-[--secondaryTwo-clr]  overflow-hidden">
                            {/* This Span Appear depends on A Condition  (If (New Product) => Appear and Bg Green, Else If (Have Discount) => Bg Red, Else => DisAppear ) */}
                        {/* <span className="absolute z-[2] top-3 left-3 py-1 px-3 rounded-[0.25rem] text-xs font-normal text-white bg-[--secondaryThree-clr]">-40%</span> */}
                        <div className="flex flex-col gap-[0.625rem] absolute z-[2] top-3 right-3">
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-regular fa-heart"></i></button>
                            <button className="w-10 h-10 leading-10 text-center rounded-[50%] bg-[--primaryOne-clr]"><i className="fa-solid fa-eye"></i></button>
                        </div>
                        <button className="add-to-cart absolute z-[10] bottom-[-3rem] right-0 w-full py-3 text-base font-medium bg-black text-white">Add To Cart</button>
                        <Link to="/"><img src="/images/product1.png"  alt="Product Image" /></Link>
                        </div>
                        <Link to="/" className="text-base font-medium text-black">HAVIT HV-G92 Gamepad</Link>
                        <div className="flex items-center gap-4 font-medium text-base">
                            <span className="text-[--secondaryThree-clr]">$120</span>
                            <ul className="flex items-center gap-2">
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                                <li><i className="fa-solid fa-star text-[#e6e6e6] hover:text-[#ff9c1a] cursor-pointer"></i></li>
                            </ul>
                            <span className="text-[--textTwo-clr]">(80)</span>
                        </div>
                    </div>
                </div>
                <Link to="/products"  className="self-center mt-3 py-4 px-12  rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer">View All Products</Link>
            </div>
        </section>
    )
}
export default ExploreProducts