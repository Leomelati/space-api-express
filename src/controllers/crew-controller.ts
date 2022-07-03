import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class CrewController{

  public createCrew(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public updateCrew(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public crew(req: Request, res: Response, next: NextFunction) {
    return res.json({
      message: 'Hello Crew!'
    });
  }

}

export const crewController = new CrewController();
