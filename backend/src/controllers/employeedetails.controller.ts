import { Request, Response } from 'express';
import { Employeedetails } from '../models/Employeedetails';
interface Results {
  totaluser: number;
  pagecount: number;
  next?: { page: number };
  previous?: { page: number };
  results?: any[]; 
}
export class EmployeedetailsController {
  constructor() { }

  public async createEmployeeDetails(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body);
      const { name, email, gender, designation, dateOfBirth, aadhaarNumber,dept,hireDate,createdDate,updatedDate,createdBy,updatedBy,salary,maritalStatus, } = req.body;
      const createdEmployee = { name, email, gender, designation, dateOfBirth, aadhaarNumber,dept,hireDate,createdDate,updatedDate,createdBy,updatedBy,salary,maritalStatus };

     
      const result = await Employeedetails.create(createdEmployee);

      res.status(201).json({ message: 'Employee details created successfully', employee: result });
    } catch (error) {
      console.error('Error creating employee details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async updateEmployeeDetails(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const employeeid = req.params.id;
      if (!employeeid) {
        return res
          .status(400).json({ message: "Employee ID is required for editing" });
      }

      const {
        name,
        email,
        gender,
        designation,
        dateOfBirth,
        aadhaarNumber,
        dept,
        hireDate,
        createdDate,
        updatedDate,
        createdBy,
        updatedBy,
        salary,
        maritalStatus,
      } = req.body;

      const defineEmployee = await Employeedetails.findByPk(employeeid);

      if (!defineEmployee) {
        res.status(404).json({ error: "Employee not found" });
        return res;
      }

    const result= await Employeedetails.update(
       {name,
        email,
        gender,
        designation,
        dateOfBirth,
        aadhaarNumber,
        dept,
        hireDate,
        createdDate,
        updatedDate,
        createdBy,
        updatedBy,
        salary,
        maritalStatus,},
         { where :{ id : employeeid}}
      );

      

      if (result[0]) {
        
        res.status(200).json({ message: "Employee details updated successfully" });
      } else {
        res.status(404).json({ message: "Employee not found for editing" });
      }
      return res;
    } catch (error) {
      console.error("Error updating employee details:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return res;
    }
  }
  public async getEmployeeDetails(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
      const employeeId = req.params.id
      

      if (!employeeId) {
        return res.status(400).json({ message: "Employee ID is required to fetch details" });
      }

      const employeeDetails = await Employeedetails.findOne({ where: { id: req.params.id} });

      if (!employeeDetails) {
        console.error(`Employee with ID ${employeeId} not found.`);
        return res.status(404).json({ message: "Employee not found" });
      }

      return res.status(200).json({  employeeDetails });
      
    } catch (error) {
      console.error('Error fetching employee details:', error);
      return res.status(500).json({ message: "Error fetching employee details" });
    }
  }
  public async deleteEmployeeDetails(req: Request,res: Response): Promise<Response> {
    try {
      const employeeId = req.params.id
  
      if (!employeeId) {
        return res.status(400).json({ message: "Employee ID is required to delete details" });
      }
      const result = await Employeedetails.destroy({ where: { id: employeeId } });
      if (result) {
        return res.status(200).json({ message: "Employee deleted successfully" });
      } else {
        return res.status(404).json({ message: "Employee not found for deletion" });
      }
    } catch (error) {
      console.error("Error deleting employee details:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  public async getAllEmployeelist( req: Request,res: Response ): Promise<Response<any, Record<string, any>>> {
    try {
      const result = await Employeedetails.findAll();
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = parseInt(req.query.limit as string, 10) || 10;
  
      if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
        return res.status(400).json({ message: 'Invalid page or limit value' });
      }
  
      const startIndex = (page - 1) * limit;
      const lastIndex = page * limit;
  
      const results: Results = {
        totaluser: result.length,
        pagecount: Math.ceil(result.length / limit),
      };
  
      if (lastIndex < result.length) {
        results.next = { page: page + 1 };
      }
  
      if (startIndex > 0) {
        results.previous = { page: page - 1 };
      }
  
      results.results = result.slice(startIndex, lastIndex);
  
      return res.status(200).json({
        results,
      });
    } catch (error) {
      console.log('Error fetching employee details', error);
      return res
        .status(500)
        .json({ message: 'Error fetching employee details outside the controller' });
    }
  }

}
