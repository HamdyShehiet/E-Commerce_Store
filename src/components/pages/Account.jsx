import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/Users";

function Account() {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UsersContext)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("LoggedInUser")));
  const [isSelect, setIsSelect] = useState("profile");
  const [editFormInputs, setEditFormInputs] = useState({
    firstName: user.name || "",
    lastName: user.lastName || "",
    email: user.email || "",
    address: user.address || "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  
  useEffect(() => {
    const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))
    if(!LoggedInUser){
      console.log("You are not Logged In ");
      navigate("/login");
    }else{
      setUser(LoggedInUser)
      console.log("You are Logged In ");
    }
  }, []);


  const saveChanges =()=>{
    const updatedUserData = {
      ...user,
      name: editFormInputs.firstName,
      lastName: editFormInputs.lastName ,
      address: editFormInputs.address,
      currentPassword: editFormInputs.currentPassword,
      newPassword: editFormInputs.newPassword,
      confirmNewPassword: editFormInputs.confirmNewPassword,
    }
    console.log(updatedUserData)
    UpdateUsers(updatedUserData)
  }

  
  const UpdateUsers =(updatedUserData)=>{
    const updatedUsersData = users.map((item)=>
      item.id === updatedUserData.id ? updatedUserData : item
    )
    setUsers(updatedUsersData)
    localStorage.setItem("LoggedInUser",JSON.stringify(updatedUserData))
    setEditFormInputs({
      firstName: user.name || "",
      lastName: user.lastName,
      email: user.email || "",
      address: user.address || "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    })
    console.log(users)
  }


  const selectChange = (showLayout) => {
    setIsSelect(showLayout);
  };

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">My Account</span>
          </div>

          <div className="grid lg:grid-cols-[12.625rem,_44rem] lg:justify-between gap-y-8 font-[poppins]">
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base text-black">Manage My Account</h3>
                <ul className="flex flex-col items-start gap-2 pl-6 font-normal text-base text-[--textTwo-clr]">
                  <li onClick={() => selectChange("profile")} className={`${isSelect === "profile" ? "text-[--secondaryThree-clr]" : ""} cursor-pointer hover:text-[--secondaryThree-clr]`}>
                    My Profile
                  </li>
                  <li onClick={() => selectChange("address")} className={`${isSelect === "address" ? "text-[--secondaryThree-clr]" : ""} cursor-pointer hover:text-[--secondaryThree-clr]`}>
                    Address Book
                  </li>
                  <li onClick={() => selectChange("payment")} className={`${isSelect === "payment" ? "text-[--secondaryThree-clr]" : ""} cursor-pointer  hover:text-[--secondaryThree-clr]`}>
                    My Payment Options
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3">
                <h3 className="font-medium text-base text-black">My Orders</h3>
                <ul className="flex flex-col gap-2 pl-6 font-normal text-base  text-[--textTwo-clr]">
                  <li onClick={() => selectChange("myReturns")} className={`${isSelect === "myReturns" ? "text-[--secondaryThree-clr]" : ""} cursor-pointer hover:text-[--secondaryThree-clr]`}>My Returns</li>
                  <li onClick={() => selectChange("myCancellations")} className={`${isSelect === "myCancellations" ? "text-[--secondaryThree-clr]" : ""} cursor-pointer hover:text-[--secondaryThree-clr]`}>My Cancellations</li>
                </ul>
              </div>
            </div>

            {isSelect === "profile" && (
              <div className="profileForm py-10 px-[4rem] rounded shadow-md">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl text-[--secondaryThree-clr] font-medium">Edit Your Profile</h2>
                  <form onSubmit={(e)=>e.preventDefault()} className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-normal text-base text-black">
                      <div>
                        <label className="block mb-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={editFormInputs.firstName}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, firstName: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={editFormInputs.lastName}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, lastName: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          readOnly
                          value={editFormInputs.email}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, email: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-normal text-base text-black">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={editFormInputs.address}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, address: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-normal text-base text-black">Password Changes</h3>
                      <div className="flex flex-col gap-4">
                        <input
                          type="password"
                          name="currentPassword"
                          placeholder="Current Password"
                          value={editFormInputs.currentPassword}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, currentPassword: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />

                        <input
                          type="password"
                          name="newPassword"
                          placeholder="New Password"
                          value={editFormInputs.newPassword}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, newPassword: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />

                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm New Password"
                          value={editFormInputs.confirmNewPassword}
                          onChange={(e)=>setEditFormInputs({...editFormInputs, confirmNewPassword: e.target.value })}
                          className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-10 mt-1">
                      <button type="button" className="">
                        Cancel
                      </button>
                      <input
                      onClick={()=>saveChanges()}
                        type="submit"
                        value="Save Changes"
                        className="py-3 px-8 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isSelect === "address" && <div className="py-10 px-[4rem] rounded shadow-md "><h2  className="text-xl text-[--secondaryThree-clr] font-medium">Address Book</h2></div>}
            {isSelect === "payment" && <div className="py-10 px-[4rem] rounded shadow-md "><h2  className="text-xl text-[--secondaryThree-clr] font-medium">My Payment Options</h2></div>}
            {isSelect === "myReturns" && <div className="py-10 px-[4rem] rounded shadow-md "><h2  className="text-xl text-[--secondaryThree-clr] font-medium">My Returns</h2></div>}
            {isSelect === "myCancellations" && <div className="py-10 px-[4rem] rounded shadow-md "><h2  className="text-xl text-[--secondaryThree-clr] font-medium">My Cancellation</h2></div>}
          </div>
        </div>
      </section>
    </>
  );
}
export default Account;
