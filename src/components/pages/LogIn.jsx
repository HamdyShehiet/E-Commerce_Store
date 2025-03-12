import { useState } from "react"
import { Link } from "react-router-dom"

function LogIn(){
    const [loginFormInputs, setLoginFormInputs] = useState(
        {
            email:"",
            password:""
        }
    )
    const submit =()=>{
        console.log(loginFormInputs);
    }
    return(
        <section className="py-10">
            <div className="container grid justify-center lg:justify-start grid-cols-[min(24rem,_100%)] lg:grid-cols-[55%_22rem] items-center lg:gap-16 mx-auto">
                <div className="hidden lg:block">
                    <img src="/images/frame7.png" alt="Sign Up Image" />
                </div>
                <div className="flex flex-col gap-y-10 bg-transparent">
                    <div className="flex flex-col gap-5">
                    <h1 className="font-[inter] text-4xl font-medium text-black">Log in to Exclusive</h1>
                    <span className="font-[poppins] text-base font-normal text-black">Enter your details below</span>
                    </div>
                    <form onSubmit={(e)=> e.preventDefault()} method="post" className="flex flex-col gap-y-7 font-[poppins]">
                        <input onChange={(e)=>{setLoginFormInputs({...loginFormInputs,email:e.target.value})}} type="text" name="email" id="email"  placeholder="Email or Phone Number" className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"/>
                        <input onChange={(e)=>{setLoginFormInputs({...loginFormInputs,password:e.target.value})}} type="password" name="password" id="password"  placeholder="Password" className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"/>
                        <div className="flex justify-between items-center">
                        <input onClick={submit} type="submit" value="Log In" className="py-4 px-10 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer"/>
                        <a href="/" className="font-[poppins] text-base font-normal text-[--secondaryThree-clr]">Forget Password?</a>
                        </div>
                    </form>
                    <p className="text-center font-[poppins] text-base">
                        <span className="font-normal">Don’t have an Account ?</span>
                        <Link to="/signup" className="ml-2 font-medium underline">Register</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default LogIn