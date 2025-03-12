import { useState } from "react"
import { Link } from "react-router-dom"

function SignUp(){
    const [registerFormInputs, setRegisterFormInputs] = useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const submit =()=>{
        console.log(registerFormInputs);
    }
    return(
        <section className="py-10">
            <div className="container grid justify-center lg:justify-start grid-cols-[min(24rem,_100%)] lg:grid-cols-[55%_22rem] items-center lg:gap-16 mx-auto">
                <div className="hidden lg:block text-center">
                    <img src="/images/frame7.png" alt="Sign Up Image" />
                </div>
                <div className="flex flex-col gap-y-10 bg-transparent">
                    <div className="flex flex-col gap-5">
                    <h1 className="font-[inter] text-4xl font-medium text-black">Create an account</h1>
                    <span className="font-[poppins] text-base font-normal text-black">Enter your details below</span>
                    </div>
                    <form onSubmit={(e)=> e.preventDefault()} method="post" className="flex flex-col gap-y-7 font-[poppins]">
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,name:e.target.value})}} type="text" name="name" id="name"  placeholder="Name" className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"/>
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,email:e.target.value})}} type="text" name="email" id="email"  placeholder="Email or Phone Number" className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"/>
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,password:e.target.value})}} type="password" name="password" id="password"  placeholder="Password" className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"/>
                        <input onClick={submit} type="submit" value="Create Account" className="py-4 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer"/>
                        <a href="/" className="flex justify-center gap-4 border-[--border-clr] border-[1px] py-4 rounded-[4px] text-base font-normal">
                            <img src="/public/icons/google.png" width="25" alt="Google Icon" />
                            <span href="/">Sign up with Google</span>
                        </a>
                    </form>
                    <p className="text-center font-[poppins] text-base">
                        <span className=" font-normal">Already have account?</span>
                        <Link to="/login" className="ml-2 font-medium underline">Log in</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default SignUp