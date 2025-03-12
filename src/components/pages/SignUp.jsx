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
            <div className="container grid justify-center lg:justify-start lg:grid-cols-[60%_20rem] items-center md:gap-16 mx-auto lg:mx-0 lg:px-0">
                <div className="hidden lg:block">
                    <img src="/images/frame7.png" alt="Sign Up Image" />
                </div>
                <div className="flex flex-col gap-y-10 bg-transparent">
                    <div className="flex flex-col gap-5">
                    <h1 className="font-[inter] text-4xl font-medium text-black">Create an account</h1>
                    <span className="font-[poppins] text-base font-normal text-black">Enter your details below</span>
                    </div>
                    <form onSubmit={(e)=> e.preventDefault()} method="post" className="flex flex-col gap-y-6 font-[poppins]">
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,name:e.target.value})}} type="text" name="name" id="name"  placeholder="Name" className="w-full pb-4 font-medium outline-none border-black border-b-[1px] bg-transparent"/>
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,email:e.target.value})}} type="text" name="email" id="email"  placeholder="Email or Phone Number" className="w-full pb-4 font-medium outline-none border-black border-b-[1px] bg-transparent"/>
                        <input onChange={(e)=>{setRegisterFormInputs({...registerFormInputs,password:e.target.value})}} type="password" name="password" id="password"  placeholder="Email" className="w-full pb-4 font-medium outline-none border-black border-b-[1px] bg-transparent"/>
                        <input onClick={submit} type="submit" value="Create Account" className="py-4 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr]"/>
                        <div className="flex justify-center gap-4 border-[#00000066] border-[1px] py-4 rounded-[4px] text-base font-normal">
                            <img src="/public/icons/google.png" width="25" alt="Google Icon" />
                            <a href="/">Sign up with Google</a>
                        </div>
                    </form>
                    <p className="text-center text-lg">
                        <span className="font-normal">Already have account?</span>
                        <Link to="/login" className="ml-3 font-medium underline">Log in</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default SignUp