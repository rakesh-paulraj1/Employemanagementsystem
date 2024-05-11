import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {
  private router: Router;
  private controller: UserController;

  constructor() {
    this.controller = new UserController();
    this.router = Router();
    this.routes();
  }

  private routes() {

  }

  public getRouter() {
    return this.router;
  }
}
