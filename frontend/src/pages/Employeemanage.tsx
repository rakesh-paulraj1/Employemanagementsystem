import axios from "axios";
import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import ReactPaginate from 'react-paginate';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  martialStatus: string;
}


 export const Employeemanage: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
 
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
    martialStatus: "",
  });
  

  const currentpage = useRef<number>();
  const [limit, setLimit] = useState(2);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    currentpage.current = 1;
    getPaginatedUsers();
  }, []);

  function handlePageChange(e: { selected: number }) {
    currentpage.current = e.selected + 1;
    getPaginatedUsers();
  }

    const handleEdit = async (employeeId: number) => {
    try {
      if (!employeeId) {
        console.error("Employee ID is required for fetching details");
        return;
      }

      const response = await axios.get(
        `http://localhost:3307/oneemployeedetails/${employeeId}`
      );

      if (response.status === 200) {
        const data: Employee = response.data.employeedetails;
        setEditedemployee(data);
       
      } else {
        console.error(
          "Error fetching employee details. Status:",
          response.status
        );
      }
    } catch (error: any) {
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


  function changeLimit() {
    getPaginatedUsers();
  }

  const handleDelete = async (employeeId: number ) => {
    if (employeeId === 0) {
      console.error('Employee ID is undefined');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:3307/employeedetails/${employeeId}`);
      if (response.status === 200) {
        toast.info(response.data.message, {
          position: 'top-center',   
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        getPaginatedUsers();
      } else {
        toast.error('Failed to delete employee', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  function getPaginatedUsers() {
    axios
      .get(`http://localhost:3307/employeedetails?page=${currentpage.current}&limit=${limit}`)
      .then((response) => {
        console.log(response.data);
        setPageCount(parseInt(response.data.results.pagecount, 10) || 1);
        setData(response.data.results.results);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }

  return (
    <>
    <div className="border p-4 m-4 bg-white  rounded-lg ">
      <div className="flex items-start justify-between mx-3">
        <h1 className="mb-8 text-xl">Employees</h1>
        
      </div>
      <Link to="/addemployee"><button className="px-3 py-2 bg-blue-400 hover:bg-blue-600 rounded mt-2" >Add employee</button></Link>
      <section className="mx-auto w-full px-4 py-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              
              <th className="py-2">Salary</th>
              <th className="py-2">Designation</th>
              
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                
                <td className="py-2">{i.id}</td>
                <td className="py-2">{i.name}</td>
                <td className="py-2">{i.email}</td>
                
                <td className="py-2">{i.salary}</td>
                <td className="py-2">{i.designation}</td>
                
                <td className="py-2">
                 <Link to={`/employeeedit/${i.id}`}> <span
                    onClick={() => handleEdit(i.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </span></Link>
                  <button
                    onClick={() => handleDelete(i.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="flex items-center justify-center space-x-2 mt-4"
          pageClassName="px-3 py-2 border rounded hover:bg-blue-200"
          pageLinkClassName="text-black-500"
          previousClassName="px-3 py-2 border rounded hover:bg-blue-300"
          previousLinkClassName="text-black-500"
          nextClassName="px-3 py-2 border rounded hover:bg-blue-300"
          nextLinkClassName="text-black-500"
          activeClassName="bg-blue-500 text-white"
        />
        <input
          className="px-3 py-2 border rounded mt-4"
          type="text"
          placeholder="Limit"
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />
        <button className="px-3 py-2 bg-blue-500 text-white rounded mt-2" onClick={changeLimit}>
          Change limit
        </button>
        
      </section>
      </div>
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
  );
};

export default Employeemanage;
