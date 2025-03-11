import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className="bg-black">
            <section className="py-14 border-b-[1px] border-[--primaryTwo-clr]">
                <div className="container grid justify-start md:justify-center gap-y-5 gap-x-4 grid-cols-[repeat(auto-fit,_min(300px,_100%))] mx-auto text-[--textOne-clr]">
                    <div className="flex flex-col items-start gap-6">
                        <Link to="/" className="font-[inter] text-2xl font-bold">Exclusive</Link>
                        <span className="font-[poppins] text-xl font-medium">Subscribe</span>
                        <span className="font-[poppins] text-base font-normal">Get 10% off your first order</span>
                        <div className="font-[poppins] send-email flex items-center py-3 px-3 rounded-md border-2 border-[--textOne-clr] bg-transparent placeholder:text-[--textOne-clr] text-[--textOne-clr]">
                            <input type="email" placeholder="Enter your email" className="pr-1 border-none outline-none font-medium bg-transparent"/>
                            <button><img src="/icons/send2.png" alt="Send Icon"/></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 font-[poppins]">
                        <span className="text-xl font-medium">Support</span>
                        <ul className="flex flex-col gap-4 text-base font-normal">
                            <li>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</li>
                            <li>exclusive@gmail.com</li>
                            <li>+88015-88888-9999</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 font-[poppins]">
                        <span className="text-xl font-medium">Accout</span>
                        <ul className="flex flex-col gap-4 text-base font-normal">
                            <li><Link to="/account">My Account</Link></li>
                            <li><Link to="/login">Login / Register</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/wishlist">Wishlist</Link></li>
                            <li><Link to="/">Shop</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 font-[poppins]">
                        <span className="text-xl font-medium">Quick Link</span>
                        <ul className="flex flex-col gap-4 text-base font-normal">
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms Of Use</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="mb-1 text-xl font-medium">Download App</span>
                        <p className="text-xs font-medium">Save $3 with App New User Only</p>
                        <div className="flex items-center gap-3">
                            <img src="/icons/qr-code.png" alt="Qr Code" />
                            <div className="flex flex-col gap-2">
                            <a href="/"><img src="/icons/google-play.png" alt="Google Play Download" /></a>
                            <a href="/"><img src="/icons/app-store.png" alt="App Store Download" /></a>
                            </div>
                        </div>
                        <ul className="flex items-center gap-6">
                            <li><a href="/" target="_blank"><img src="/public/icons/facebook.png" alt="FaceBook Icon" /></a></li>
                            <li><a href="/" target="_blank"><img src="/public/icons/twitter.png" alt="Twitter Icon" /></a></li>
                            <li><a href="/" target="_blank"><img src="/public/icons/instagram.png" alt="Instagram Icon" /></a></li>
                            <li><a href="/" target="_blank"><img src="/public/icons/linked-in.png" alt="LinkedIn Icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container mx-auto text-[--textOne-clr]">
                    <p className="text-center text-base font-normal">&copy; CopyRight Rimel 2022. All right reserved</p>
                </div>
            </section>
        </footer>
    )
}
export default Footer