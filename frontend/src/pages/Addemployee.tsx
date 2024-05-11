import axios from "axios";
import { ToastContainer,toast,Bounce } from "react-toastify";
import { useState, useEffect } from "react";
export const  Addemployee:React.FC = () => {

    const [details , setDetails] = useState({
        name: "",
        email : "",
        gender : "",
        designation: "",
        dateOfBirth: "",
        aadhaarNumber: "",
        dept : "",
        hireDate:"",
        createdDate:"",
        updatedDate:"",
        createdBy:"",
        updatedBy:"",
        salary: "",
        maritalStatus: "",
        });
        const handlechange = (e:any) => {
            const { name, value } = e.target;
              setDetails((prev)=>{return {...details, [name]: value} });
              
            };

    return (
        <div className="max-h-screen bg-blue-100 p-4">
        <div className="border p-4 m-4 bg-white  rounded-lg ">
        <div className="flex items-start justify-between mx-3">
          <h1 className="mb-8 text-xl">New Employee Details  </h1>
        </div>
  
        <div className="">
          <h1 className="mx-3 mt-1 text-xl">Please Provide the following details</h1>
        </div>
  
        <section className="mx-auto w-full px-4 py-4">
          <form  className="grid grid-cols-2 gap-4">
            
  
            <div className="mb-4">
              <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
                 Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Employee Name"
                onChange={handlechange}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Your Email"
                onChange={handlechange}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="dateofBirth" className="block text-sm font-medium text-gray-700">
                DateOfBirth:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Your Date of Birth"
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender 
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Your Gender"
                onChange={handlechange}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Designation:
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter your Designation"
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                AADHAR Number:
              </label>
              <input
                type="text"
                id="aadhaarnumber"
                name="aadhaarNumber"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter your AADHAR Number"
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Department:
              </label>
              <input
                type="text"
                id="dept"
                name="dept"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter your Department"
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Hire Date:
              </label>
              <input
                type="date"
                id="hireDate"
                name="hireDate"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Hired Date "
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                CreatedDate:
              </label>
              <input
                type="date"
                id="cretatedDate"
                name="createdDate"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Created date "
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Updated date:
              </label>
              <input
                type="date"
                id="updatedDate"
                name="updatedDate"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Updated Date "
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">
                Created by:
              </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Created By "
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="Upadtedby" className="block text-sm font-medium text-gray-700">
                Updated By:
              </label>
              <input
                type="text"
                id="updatedBy"
                name="updatedBy"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Updated By "
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salary:
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Your salary"
                onChange={handlechange}
              />
            </div><div className="mb-4">
              <label htmlFor="Martialstatus" className="block text-sm font-medium text-gray-700">
                Marital Status :
              </label>
              <input
                type="text"
                id="maritalStatus"
                name="maritalStatus"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Married/Unmarried"
                onChange={handlechange}
              />
            </div>
            

  
            
          </form>
        </section>
        <button onClick={async()=>{
            try {
              const response = await axios.post("http://localhost:3307/employeedetails", {
                name: details.name,
                email: details.email,
                gender: details.gender,
                designation: details.designation,
                dateOfBirth: details.dateOfBirth,
                aadhaarNumber: details.aadhaarNumber,
                dept: details.dept,
                hireDate: details.hireDate,
                createdDate: details.createdDate,
                updatedDate: details.updatedDate,
                createdBy: details.createdBy,
                updatedBy: details.updatedBy,
                salary: details.salary,
                maritalStatus: details.maritalStatus
              });
              
             console.log(details);
          
          toast.info(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
          } catch (error) {
            
            toast.error("Error adding employee details", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
          }
        }} type="button" className="w-full text-black bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Employee </button>
        <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Bounce}  
  />
      </div>
      </div>
    )
   


}