import { Request, Response } from "express";
interface IRoutes {
  routes(req: Request, res: Response): void;
}

export default IRoutes;
