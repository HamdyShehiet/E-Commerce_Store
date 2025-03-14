function FlashSell(){
    return(
        <>
        <section className="py-11">
            <div className="container grid lg:grid-cols-2 justify-center lg:justify-between items-start gap-y-8 mx-auto py-11 bg-black">
                <div className="flex flex-col items-start gap-8 lg:pl-9 text-white">
                    <span className="font-[poppins] font-semibold text-base text-[--secondaryFive-clr]">Categories</span>
                    <h1 className="font-[inter] leading-[1.3] font-semibold text-[clamp(2rem,_5vw,_3rem)]">Enhance Your <br /> Music Experience</h1>
                    <ul className="flex flex-wrap items-center gap-3 md:gap-5 font-[poppins] text-black">
                        <li className="inline-flex flex-col items-center justify-center gap-[1px] w-[4.9rem] h-[4.9rem] rounded-[50%] bg-white "><span className="text-lg font-semibold">05</span><span className="text-[0.688rem] font-normal">Days</span></li>
                        <li className="inline-flex flex-col items-center justify-center gap-[1px] w-[4.9rem] h-[4.9rem] rounded-[50%] bg-white "><span className="text-lg font-semibold">23</span><span className="text-[0.688rem] font-normal">Hours</span></li>
                        <li className="inline-flex flex-col items-center justify-center gap-[1px] w-[4.9rem] h-[4.9rem] rounded-[50%] bg-white "><span className="text-lg font-semibold">59</span><span className="text-[0.688rem] font-normal">Minutes</span></li>
                        <li className="inline-flex flex-col items-center justify-center gap-[1px] w-[4.9rem] h-[4.9rem] rounded-[50%] bg-white "><span className="text-lg font-semibold">35</span><span className="text-[0.688rem] font-normal">Seconds</span></li>
                    </ul>
                    <button className=" px-12 py-4 rounded-md bg-[--secondaryFive-clr] text-white">Buy Now!</button>
                </div>
                <div>
                    <img src="/images/frame2.png" alt="Flash Sell Image" />
                </div>
            </div>
        </section>
        </>
    )
}
export default FlashSell