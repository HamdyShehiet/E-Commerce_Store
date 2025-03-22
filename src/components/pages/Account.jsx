import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    console.log(LoggedInUser);
    console.log(user);
    if (LoggedInUser) {
      setUser(LoggedInUser);
    } else {
      console.log("You are not Loggeg In ");
      navigate("/login");
    }
  }, []);

  return (
    <>
      {/* {user && <h1 className="text-4xl">Hello {user.name || "User"} Account</h1>} */}
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">My Account</span>
          </div>

          <div className="grid lg:grid-cols-[12.625rem,_50rem] lg:justify-between gap-y-5 font-[poppins]">

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base text-black">Manage My Account</h3>
                <ul className="flex flex-col gap-2 pl-6 font-normal text-base text-[--textTwo-clr]">
                  <li className="hover:text-[--secondaryThree-clr]">My Profile</li>
                  <li className="hover:text-[--secondaryThree-clr]">Address Book</li>
                  <li className="hover:text-[--secondaryThree-clr]">My Payment Options</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base text-black">My Orders</h3>
                <ul className="flex flex-col gap-2 pl-6 font-normal text-base  text-[--textTwo-clr]">
                  <li className="hover:text-[--secondaryThree-clr]">My Returns</li>
                  <li className="hover:text-[--secondaryThree-clr]">My Cancellations</li>
                </ul>
              </div>
            </div>
            
            <div className="py-10 px-[4rem] rounded shadow-md">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-[--secondaryThree-clr] font-medium">Edit Your Profile</h2>
              <form className="grid gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-normal text-base text-black">
                <div>
                  <label className="block mb-1">First Name</label>
                  <input 
                  type="text" 
                  name="firstName" 
                  // value={formData.firstName} 
                  className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>

                <div>
                  <label className="block mb-1">Last Name</label>
                  <input 
                  type="text" 
                  name="lastName" 
                  // value={formData.lastName} 
                  className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <input 
                  type="email"
                  name="email" 
                  // value={formData.email} 
                  className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>

                <div>
                  <label className="block mb-1 font-normal text-base text-black">Address</label>
                  <input 
                  type="text" 
                  name="address" 
                  // value={formData.address} 
                  className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-normal text-base text-black">Password Changes</h3>
                  <div className="flex flex-col gap-4">
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    // value={formData.currentPassword}
                    className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                  />

                  <input 
                  type="password" 
                  name="newPassword" 
                  placeholder="New Password" 
                  // value={formData.newPassword}
                  className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "/>

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    // value={formData.confirmPassword}
                    className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                    </div>
                </div>

                <div className="flex justify-end gap-10 mt-1">
                  <button type="button" className="">Cancel</button>
                  <input type="submit" value="Save Changes" className="py-3 px-8 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer" />
                </div>
              </form>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Account;
