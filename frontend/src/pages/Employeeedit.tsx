import axios from "axios";
import React, { useEffect ,useState} from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useParams } from 'react-router-dom';


interface Employee {
    id: number;
     name: string;
     email: string;
     gender: string;
     designation: string;
     dateOfBirth: string;
     aadhaarNumber: string;
     dept: string;
     hireDate: string;
     createdDate: string;
     updatedDate: string;
     createdBy: string;
     updatedBy: string;
     salary: string;
     maritalStatus: string;
   }
export const Employeeedit:React.FC=()=> {
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        
        handleEdit(id);
      }, []);
    const [editedemployee, setEditedemployee ] = useState<Employee>({
        id:0,
        name: "",
        email: "",
        gender: "",
        designation: "",
        dateOfBirth: "",
        aadhaarNumber: "",
        dept: "",
        hireDate: "",
        createdDate: "",
        updatedDate: "",
        createdBy: "",
        updatedBy: "",
        salary: "",
        maritalStatus: "",
      });
      const handleEdit = async (employeeId:any) => {
        try {
          if (!employeeId) {
            console.error("Employee ID is required for fetching details");
            return;
          }
          console.log("Fetching employee details for ID:", employeeId);
      
          const response = await axios.get(`http://localhost:3307/oneemployeedetails/${employeeId}`);
      
          if (response.status === 200) {
            const data = response.data; 
            console.log(data);
            setEditedemployee(data.employeeDetails);
            
          } else {
            console.error("Error fetching employee details. Status:", response.status);
          }
        } catch (error:any) {
          console.error("Error fetching employee details:", error.message);
        }
      };

      const handlesave = async () => {
        try {
          const response = await axios.put(
            `http://localhost:3307/employeedetails/${editedemployee.id}`,
            editedemployee
          );
    
          toast.success(response.data.message, {
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
    
          
        } catch (error:any) {
         
    
          toast.error(
            error.response?.data?.message || "Error updating employee details",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            }
          );
        }
      };
  
  
    return (<>
    <div className="border p-4 m-4 bg-white  rounded-lg ">
        <div className="flex justify-center items-center">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.name ? editedemployee.name : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.email ? editedemployee.email : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, email: e.target.value })}
          />
          <label>Date of Birth:</label>
          <input
            type="date"
            value={editedemployee && editedemployee.dateOfBirth ? editedemployee.dateOfBirth : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, dateOfBirth: e.target.value })}
          />
          <label>Gender:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.gender ? editedemployee.gender : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, gender: e.target.value })}
          />
          <label>AAddhar Number:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.aadhaarNumber ? editedemployee.aadhaarNumber : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, aadhaarNumber: e.target.value })}
          />
          <label>Designation :</label>
          <input
            type="text"
            value={editedemployee && editedemployee.designation ? editedemployee.designation : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, designation: e.target.value })}
          />
          <label>Department:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.dept ? editedemployee.dept : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, dept: e.target.value })}
          />
          <label>Hire Date:</label>
          <input
           type="date"
           value={editedemployee && editedemployee.hireDate ? editedemployee.hireDate : ''}
           className="mt-1 p-2 border rounded-md w-full"
           onChange={(e) => {
            const formattedDate = new Date(e.target.value).toISOString().split('T')[0];
            setEditedemployee({ ...editedemployee, hireDate: formattedDate });
}}
/>
          <label>Salary:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.salary ? editedemployee.salary : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, salary: e.target.value })}
          />
          <label>Marital Status:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.maritalStatus ? editedemployee.maritalStatus : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, maritalStatus: e.target.value })}
          />
          <label>Created by :</label>
          <input
            type="text"
            value={editedemployee && editedemployee.createdBy ? editedemployee.createdBy : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, createdBy: e.target.value })}
          />
          <label>Upadted by:</label>
          <input
            type="text"
            value={editedemployee && editedemployee.updatedBy ? editedemployee.updatedBy : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, updatedBy: e.target.value })}
          />
          <label>Created date :</label>
          <input
            type="date"
            value={editedemployee && editedemployee.createdDate ? editedemployee.createdDate : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, createdDate: e.target.value })}
          />
          <label>Updated  date :</label>
          <input
            type="date"
            value={editedemployee && editedemployee.updatedDate ? editedemployee.updatedDate : ''}
            className="mt-1 p-2 border rounded-md w-full"
            onChange={(e) => setEditedemployee({ ...editedemployee, updatedDate: e.target.value })}
          />
        </div>
      </div>
      </div>
      <button onClick={handlesave}
      className="px-3 py-2 bg-blue-500 text-white rounded mt-2">Save</button>
     <Link to="/manageemployee"> <span className="px-3 py-2 bg-blue-500 text-white rounded mt-2">Close</span></Link>
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
      </>
  )
}

export default Employeeedit