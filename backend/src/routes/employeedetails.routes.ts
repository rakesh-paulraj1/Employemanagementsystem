import { Router } from 'express';
import { EmployeedetailsController } from '../controllers/employeedetails.controller';

const router = Router();
const employeedetailsController = new EmployeedetailsController();

router.post('/employeedetails', employeedetailsController.createEmployeeDetails);
router.put('/employeedetails/:id', employeedetailsController.updateEmployeeDetails);
router.get('/oneemployeedetails/:id', employeedetailsController.getEmployeeDetails);
router.delete('/employeedetails/:id', employeedetailsController.deleteEmployeeDetails);
router.get('/employeedetails', employeedetailsController.getAllEmployeelist);
export default router;
