import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UsersContext } from "../../context/Users";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const {users, setUsers} = useContext(UsersContext)
  
  const [registerFormInputs, setRegisterFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = registerFormInputs;
  const [errors, setErrors] = useState({});

  const signUpValidate = () => {
    const newErrors = {};
    /**
     * Name Validate
     */
    if (!name.trim()) {
      newErrors.name = "Name Is Required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name Must be 3 Characters at least";
    }

    /**
     * Email Validate
     */
    if (!email.trim()) {
      newErrors.email = "Email Is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Not Valid Email";
    }

    /**
     * Password Validate
     */
    if (!password.trim()) {
      newErrors.password = "Password Is Required";
    } else if (password.trim().length < 7) {
      newErrors.password = "Your Password Is Weak";
    }

    setErrors(newErrors);
    /**
     * If This Condition is Verified  ( newErrors.length !== 0 )  => false
     * else  => true
     */
    return Object.keys(newErrors).length === 0;
  };

  const signUp = () => {
    if (signUpValidate()) {
      const existUser = users.find((item) =>  item.email === email)
      console.log(existUser)
      if(!existUser){
        const updatedUsers = [...users, { ...registerFormInputs, id: uuidv4(), cart: [], wishist: []}]
        setUsers(updatedUsers);
        console.log(users);
        console.log("SignUp Successful");
        toast.success("SignUp Successful");
        setRegisterFormInputs({
          name: "",
          email: "",
          password: "",
        });
      }else{
        toast.error("This user has already been used");
        console.log("This Email has already used")
      }
    }else {
      // Only check
      console.log(errors);
    }
  };

  return (
    <section className="py-10">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="container grid justify-center lg:justify-start grid-cols-[min(24rem,_100%)] lg:grid-cols-[55%_22rem] items-center lg:gap-16 mx-auto">
        <div className="hidden lg:block text-center">
          <img src="/images/frame7.png" alt="Sign Up Image" />
        </div>
        <div className="flex flex-col gap-y-10 bg-transparent">
          <div className="flex flex-col gap-5">
            <h1 className="font-[inter] text-4xl font-medium text-black">Create an account</h1>
            <span className="font-[poppins] text-base font-normal text-black">Enter your details below</span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} method="post" className="flex flex-col gap-y-7 font-[poppins]">
            <input
              value={name}
              onChange={(e) => {
                setRegisterFormInputs({ ...registerFormInputs, name: e.target.value });
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"
            />
            <input
              value={email}
              onChange={(e) => {
                setRegisterFormInputs({ ...registerFormInputs, email: e.target.value });
              }}
              type="text"
              name="email"
              id="email"
              placeholder="Email or Phone Number"
              className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"
            />
            <input
              value={password}
              onChange={(e) => {
                setRegisterFormInputs({ ...registerFormInputs, password: e.target.value });
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full pb-4 font-medium outline-none border-[--border-clr] border-b-[1px] bg-transparent"
            />
            <input
              onClick={signUp}
              type="submit"
              value="Create Account"
              className="py-4 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer"
            />
            <a href="/" className="flex justify-center gap-4 border-[--border-clr] border-[1px] py-4 rounded-[4px] text-base font-normal">
              <img src="/icons/google.png" width="25" alt="Google Icon" />
              <span href="/">Sign up with Google</span>
            </a>
          </form>
          <p className="text-center font-[poppins] text-base">
            <span className=" font-normal">Already have account?</span>
            <Link to="/login" className="ml-2 font-medium underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
